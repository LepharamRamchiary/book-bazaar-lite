import React, { useState, useEffect } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function SetNewPassword() {
  const [formData, setFormData] = useState({});
  const { loading, error, resetToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      return dispatch(signInFailure("Password field is required"));
    }

    // Get resetToken from state or localStorage as fallback
    const token = resetToken || localStorage.getItem("resetToken");

    if (!token) {
      return dispatch(
        signInFailure(
          "Reset token not found. Please try the forgot password process again."
        )
      );
    }

    try {
      dispatch(signInStart());

      const res = await fetch(
        `${API_BASE_URL}/api/users/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ password: formData.password }),
        }
      );

      const data = await res.json();
      console.log("reset password data", data);

      if (!res.ok) {
        return dispatch(signInFailure(data.message));
      }

      // Clear resetToken from localStorage after successful reset
      localStorage.removeItem("resetToken");

      // Show success message
      dispatch(
        signInSuccess({
          currentUser: null,
          accessToken: null,
        })
      );

      // Redirect user to login page
      navigate("/login");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(signInFailure(null));
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);
  
  return (
    <div className="min-h-screen flex my-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1 flex flex-col justify-end items-center">
          <p className="text-sm mt-5">
            This is a demo project. set your new password.
          </p>
        </div>
        {/* rigth */}
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* email */}
            <div>
              <Label value="New Password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Set your new password"
              )}
            </Button>
          </form>
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SetNewPassword;
