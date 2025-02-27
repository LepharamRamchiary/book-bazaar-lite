import React, { useState } from "react";
import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
  FileInput,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.id]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.avatar
    ) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      setError(null);

      const formDataToSend = new FormData();
      formDataToSend.append("fullname", formData.fullname);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("avatar", formData.avatar);

      const res = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }

      console.log(data);
      

      setLoading(false);

      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center my-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Book Bazaar
            </span>
            Lite
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your username,
            fullname, avatar, email and password
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* fullname, username, email, password, avatar */}
            <div>
              <Label value="Fullname" />
              <TextInput
                type="text"
                placeholder="Jhon Dey"
                id="fullname"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="example123"
                id="username"
                autoCapitalize="none"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="example@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Image for avatar" />
              <FileInput
                id="avatar"
                helperText="PNG, JPG or JPEG (MAX. 800x400px)."
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
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/login" className="text-blue-500">
              Sign In
            </Link>
          </div>
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

export default Register;
