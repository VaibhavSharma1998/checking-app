import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import {  toast,ToastContainer } from 'react-toastify';

// validation Schema to define rules for each and every field

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
      /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      "Password must have 8 characters with at least one uppercase letter and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Main = () => {
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
      alert("User with this email already exists use another email to proceed!.");
    } else {
      // Email is unique, proceed with saving the data
      console.log("Form data:", data);
      existingData.push(data);
      alert("Your form has been submitted successfully!");
      reset();
      localStorage.setItem("FormCredential", JSON.stringify(existingData));
    }
  };
  return (
    <div className="w-full px-[10%] bg-[#000] ">
      <div className="flex items-center ">
        <div className="w-[50%]">
          <p className="text-center text-[#fff]">Vaibhav</p>
        </div>
        <div className="w-[50%]">
          <p className="text-center ml-2 text-[#fff]">Sharma</p>
        </div>
      </div>

      <h1 className="text-center mt-10 text-[#0ED3CF] font-semibold text-3xl ">
        Information Form{" "}
      </h1>
      {/* Form Start */}
      <div className="">
        <form
          className="flex flex-col  mt-10  px-[30%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-[#fff]">Name :</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="text" className="block w-[30rem] mt-2" />
            )}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label className="mt-2 text-[#fff]"> Email</label>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="email" className="block w-[30rem] mt-2" />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label className="mt-2 text-[#fff]"> Phone</label>

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="tel" className="block w-[30rem] mt-2" />
            )}
          />

          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
          <label className="mt-2 text-[#fff]"> Password</label>

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="block w-[30rem] mt-2"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <label className="mt-2 text-[#fff]"> Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="block w-[30rem] mt-2"
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <button
            type="submit"
            className="pt-2 px-4 bg-[#0ED3CF] text-black mt-5 w-48 ml-36 rounded"
          >
            Submit
          </button>
        </form>
        {/* <ToastContainer 

        /> */}
      </div>
    </div>
  );
};

export default Main;
