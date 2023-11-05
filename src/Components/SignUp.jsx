import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d{10}$/, "Phone must have exactly 10 digits"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z\d\W_].{8,})/,
      "password should contain atlest 8 characters"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "", // Initial value for name
      email: "", // Initial value for email
      phone: "", // Initial value for phone
      password: "", // Initial value for password
      confirmPassword: "", // Initial value for confirmPassword
    },
  });

  const onSubmit = (data) => {
    const existingData =
      JSON.parse(localStorage.getItem("FormCredential")) || [];

    const emailExists = existingData.some((item) => item.email === data.email);
    if (emailExists) {
      alert(
        "User with this email already exists use another email to proceed!."
      );
    } else {
      // Email is unique, proceed with saving the data
      console.log("Form data:", data);
      existingData.push(data);
      alert("Your form has been submitted successfully!");
      navigate("/signin")
      reset();
      localStorage.setItem("FormCredential", JSON.stringify(existingData));
    }
  };

  const navigate = useNavigate();

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  // });


  return (
    <div className="w-full  bg-[#FAF9F6] flex flex-col items-center justify-center h-[100vh]">
      {/* Form Start */}
      <main className=" py-5 px-20 bg-white text-black mt-10  rounded-xl">
        {/* <h1 className="text-[#5F093D] text-3xl  text-center">LOGO</h1> */}
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <p className="mt-1">Just a few quick things to get started</p>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <label className="mt-4 font-semibold">Name :</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="block w-[20rem] border outline-none py-1 px-3 rounded"
                placeholder="Enter Name"
              />
            )}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label className="mt-4 font-semibold"> Email :</label>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="block w-[20rem] border outline-none py-1 px-3 rounded"
                placeholder="Enter Email ID"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label className="mt-4 font-semibold"> Phone :</label>

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                className="block w-[20rem] border outline-none py-1 px-3 rounded"
                placeholder="Enter Phone Number"
              />
            )}
          />

          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
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
                className="block w-[20rem] border outline-none py-1 px-3 rounded"
                placeholder="Enter Password"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <label className="mt-4 font-semibold"> Confirm Password :</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="block w-[20rem] border outline-none py-1 px-3 rounded"
                placeholder="Enter Confirm Password"
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <button
            type="submit"
            className="py-1 px-4 bg-black text-white mt-5 rounded text-xl"
          >
            Sign In
          </button>
        </form>
        {/* <ToastContainer 

        /> */}

        <div className="flex items-center my-4">
          <div className="flex-grow border-b border-gray-300"></div>
          <div className="mx-4 text-black">OR</div>
          <div className="flex-grow border-b border-gray-300"></div>
        </div>

        <section className="flex items-center justify-center">
          <div className="flex items-center justify-center py-2 px-12 border rounded text-xl">
            {/* <p>{<FcGoogle size={30} />}</p>
            <button onClick={() => login()} className="ml-2">
              Sign in with Google
            </button> */}
            <GoogleLogin 
             onSuccess={(credentialResponse) =>{
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                console.log(credentialResponseDecoded)
                navigate("/data")
             }} 
             onError={()=>{
                console.log("Login Failed")
             }}/>
          </div>
        </section>


        <section className="section mt-10 text-center">
          Already have an account?{" "}
          <button
            className="border-b text-xl font-semibold"
            onClick={() => navigate("/signin")}
          >
            {" "}
            Sign In
          </button>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
