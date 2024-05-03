import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto bg-slate-50 mycontainer ">
        <h1 className="text-4xl font-bold text-center ">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt; </span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full bg-clip p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className=" w-full flex gap-8 justify-between">
            <input
              className="rounded-full border border-green-500 w-full bg-clip p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <input
              className="rounded-full border border-green-500 w-full bg-clip p-4 py-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className=" flex justify-center items-center rounded-full w-fit py-1 px-4 text-black text-l font-semibold bg-green-500">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            //   style="width:250px;height:250px"
            ></lord-icon>
            Add Password{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
