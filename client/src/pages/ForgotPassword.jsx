import React, { useState, useEffect } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import {
    forgotInStart,
  forgotSuccess,
  forgotInFailure
} from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ForgotPassword() {
  const [formData, setFormData] = useState({});
  const { loading, error: error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.email){
        return dispatch(forgotInFailure("Email fill must be required"))
    }
    try {
        dispatch(forgotInStart());

        const res = await fetch(`${API_BASE_URL}/api/users/forgot-password`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),
        })

        const data = await res.json()

        console.log("forgot data", data);

        if(!res.ok){
            return dispatch(forgotInFailure(data.message))
        }

        localStorage.setItem("resetToken", data.data.resetToken)
        dispatch(forgotSuccess({
            currentUser: data.data.user,
            resetToken: data.data.resetToken,
        }))

        navigate("/set-new-pass")
        
    } catch (error) {
      dispatch(forgotInFailure(error.message));
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(forgotInFailure(null));
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  return (
    <div className="min-h-screen flex my-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1 flex flex-col justify-end items-center">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Book Bazaar
            </span>
            Lite
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. If you forgot the password the you can re-set the your password
          </p>
        </div>
        {/* rigth */}
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* email */}
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="example@gmail.com"
                id="email"
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
                "Re-set"
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

export default ForgotPassword;
