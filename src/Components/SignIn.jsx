import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
        /^(?=.*[A-Za-z\d\W_].{8,})/,
      "password contain atlest 8 characters"
      
    ),
});

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "", // Initial value for email
      password: "", // Initial value for password
    },
  });

  const onSubmit = (data) => {
    const existingData =
      JSON.parse(localStorage.getItem("FormCredential")) || [];

    const user = existingData.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      alert("You are sucessfully Logged in!");
      navigate("/data")
      reset();
    } else {
      alert("User not found. Please check your email and password.");
    }
  };

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="  bg-[#FAF9F6] flex flex-col items-center justify-center h-[100vh]">
      {/* Form Start */}
      <main className=" py-10 px-20 bg-white text-black mt-10  rounded-xl ">
        {/* <h1 className="text-[#5F093D] text-3xl  text-center">LOGO</h1> */}
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <p className="mt-1">Welcome back you've been missed</p>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <label className="mt-4 font-semibold"> Email :</label>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="block w-[20rem] border outline-none py-2 px-3 rounded"
                placeholder="Enter Email ID"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label className="mt-4 font-semibold"> Password :</label>

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="block w-[20rem] mt-2 border outline-none py-2 px-3 rounded"
                placeholder="Enter Password"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="py-2 px-4 bg-black text-white mt-5 rounded text-xl"
          >
            Sign In
          </button>
        </form>
        

        <div className="flex items-center my-4">
          <div className="flex-grow border-b border-gray-300"></div>
          <div className="mx-4 text-black">OR</div>
          <div className="flex-grow border-b border-gray-300"></div>
        </div>

        <section className="flex items-center justify-center">
          <div className="flex items-center justify-center py-2 px-12 border rounded text-xl">
            <p>{<FcGoogle size={30} />}</p>
            <button onClick={() => login()} className="ml-2">
              Sign in with Google
            </button>
            {/* <GoogleLogin 
             onSuccess={(credentialResponse) =>{
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                console.log(credentialResponseDecoded)
                navigate("/data")
             }} 
             onError={()=>{
                console.log("Login Failed")
             }}/> */}
          </div>
        </section>

        <section className="section mt-10 text-center">
          Don't have an account?{" "}
          <button
            className="border-b text-xl font-semibold"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Sign Up
          </button>
        </section>
      </main>
    </div>
  );
};
