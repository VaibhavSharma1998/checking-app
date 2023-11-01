import React from "react";
import { useForm, Controller } from "react-hook-form";

export const RegexMain = () => {
  const { control, handleSubmit, reset, setError, formState: { errors },} = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  const onSubmit = (data) => {
//     const errors = {}; // Create an empty object to collect errors

//     if (!emailRegex.test(data.email)) {
//       errors.email = { type: "manual", message: "Invalid email address" };
//     }
//     if (!phoneRegex.test(data.phone)) {
//       errors.phone = { type: "manual", message: "Phone must have exactly 10 digits" };
//     }
//     if (!passwordRegex.test(data.password)) {
//       errors.password = { type: "manual", message: "Password must have 8 characters with at least one uppercase letter and one special character" };
//     }
//     if (data.password !== data.confirmPassword) {
//       errors.confirmPassword = { type: "manual", message: "Passwords must match" };
//     }
//    // Set all errors at once
//    setError(errors);

//    if (Object.keys(errors).length === 0) {
//      const existingData = JSON.parse(localStorage.getItem("FormCredential")) || [];
//      existingData.push(data);
//      alert("Your form has been submitted successfully!");
//      reset();
//      localStorage.setItem("FormCredential", JSON.stringify(existingData));
//    }
    if (!emailRegex.test(data.email)) {
        setError("email", { type: "manual", message: "Invalid email address" });
      }else if (!phoneRegex.test(data.phone)) {
        setError("phone", { type: "manual", message: "Phone must have exactly 10 digits" });
      } else if (!passwordRegex.test(data.password)) {
        setError("password", { type: "manual", message: "Password must have 8 characters with at least one uppercase letter and one special character" });
      } else if (data.password !== data.confirmPassword) {
        setError("confirmPassword", { type: "manual", message: "Passwords must match" });
      } else{
        const existingData = JSON.parse(localStorage.getItem("FormCredential")) || [];
      existingData.push(data);
      alert("Your form has been submitted successfully!");
      reset();
      localStorage.setItem("FormCredential", JSON.stringify(existingData));
      }
   
  };
  

  return (
    <div className="w-full px-[10%] bg-[#000] ">
      <div className="flex items-center">
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
          className="flex flex-col mt-10 px-[30%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-[#fff]">Name :</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="text" className="block w-[30rem] mt-2" required/>
            )}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}

          <label className="mt-2 text-[#fff]"> Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="email"
                  className="block w-[30rem] mt-2"
                  required
                />
              </div>
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
              <input {...field} type="tel" className="block w-[30rem] mt-2" required/>
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
                required
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
                required
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="pt-2 px-4 bg-[#0ED3CF] text-black mt-5 w-48 ml-36 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
