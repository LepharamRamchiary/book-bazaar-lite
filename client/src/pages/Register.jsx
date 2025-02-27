import React, {useState} from "react";
import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
  FileInput,
} from "flowbite-react";
import { Link } from "react-router-dom";

function Register() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen mt-20">
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
          <form className="flex flex-col gap-3">
            {/* fullname, username, email, password, avatar */}
            <div>
              <Label value="Fullname" />
              <TextInput type="text" placeholder="Jhon Dey" id="fullname" />
            </div>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="example123"
                id="username"
                autoCapitalize="none"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="example@gmail.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
              />
            </div>
            <div>
              <Label value="Image for avatar" />
              <FileInput
                id="avatar"
                helperText="PNG, JPG or JPNG (MAX. 800x400px)."
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
        </div>
      </div>
    </div>
  );
}

export default Register;
