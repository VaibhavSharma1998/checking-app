import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Main = () => {
  return (
    <div className="w-full px-[10%] bg-[#000] text-[#fff] ">
      <div className="flex items-center ">
        <div className="w-[50%]">
          <p className="text-center">Vaibhav</p>
        </div>
        <div className="w-[50%]">
          <p className="text-center ml-2">Sharma</p>
        </div>
      </div>

      <h1 className="text-center mt-10 text-[#0ED3CF] font-semibold text-3xl ">
        Information Form{" "}
      </h1>
      {/* Form Start */}
      <div className="">
        <form className="flex flex-col  px-[30%] mt-10 ">
          <label className="">Name :</label>

          <input type="text" className="block w-[30rem] mt-2" />

          <label className="mt-2"> Email</label>
          <input type="email" name="" id="" className="block w-[30rem] mt-2" />
          <label className="mt-2"> Phone</label>
          <input type="tel" name="" id="" className="block w-[30rem] mt-2" />
          <label className="mt-2"> Password</label>
          <input
            type="password"
            name=""
            id=""
            className="block w-[30rem] mt-2"
          />
          <label className="mt-2"> Confirm Password</label>
          <input
            type="password"
            name=""
            id=""
            className="block w-[30rem] mt-2"
          />
          <button
            type="button"
            className="pt-2 px-4 bg-[#0ED3CF] text-black mt-5 w-48 ml-36 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
