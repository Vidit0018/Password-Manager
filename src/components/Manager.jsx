import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const ref = useRef();
  const passwordref = useRef();
  const showPassword = () => {
    passwordref.current.type = "text";
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordref.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordref.current.type = "text";
    }
  };

  const savepassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "password",
        JSON.stringify([...passwordArray, form])
      );
      console.log([...passwordArray, form]);
      setform({ site: "", username: "", password: "" });
      toast.success("Password Saved Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else{
      toast.error('Invalid Credentials !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id = " + id);
    let c = confirm("Are you sure you want to delete this item");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
    toast.success("Password Deleted!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const editPassword = (id) => {
    console.log("Editing password with id = " + id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    toast.success("Password Edited!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast.success("Copied to Clipboard!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto  p-2 md:p-2 md:mycontainer min-h-[83vh]   ">
        <h1 className="text-4xl font-bold text-center ">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt; </span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="text-black flex flex-col  p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handlechange}
            className="rounded-full border border-green-500 w-full bg-clip p-4 py-1"
            type="text"
            name="site"
            id="url"
            placeholder="Enter URL"
          />
          <div className=" w-full flex flex-col md:flex-row gap-8 justify-between ">
            <input
              value={form.username}
              onChange={handlechange}
              className="rounded-full border border-green-500 w-full bg-clip p-4 py-1  "
              name="username"
              id="username"
              placeholder="Enter UserName"
            />
            <div className="relative ">
              <input
                value={form.password}
                onChange={handlechange}
                className="rounded-full border border-green-500 w-full bg-clip p-4 py-1"
                type="password"
                ref={passwordref}
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <span
                className="absolute right-0 cursor-pointer "
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="mt-1.5 mr-4"
                  width={20}
                  height={25}
                  src="/icons/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savepassword}
            className=" flex justify-center items-center border border-green-900 rounded-full w-fit py-1 px-4 text-black text-l  bg-green-500"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              //   style="width:250px;height:250px"
            ></lord-icon>
            Save
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-semibold text-2xl text-green-700 py-4">
            Your Passwords{" "}
          </h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-green-800 text-white ">
                <tr>
                  <th className="py-2"> Url</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item) => {
                  return (
                    <tr key={item.site}>
                      <td className="text-center  py-2 border border-white overflow-hidden max-w-[15vw]    ">
                        <div className=" flex-col   lg:flex lg:flex-row text-lg justify-center items-center">
                          <span>
                            {" "}
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>{" "}
                          </span>
                          <img
                            className="cursor-pointer ml-4 size-4"
                            src="\icons\copy.png"
                            alt=""
                            onClick={() => {
                              copyText(item.site);
                            }}
                          />
                        </div>
                      </td>

                      <td className="text-center  py-2 border border-white overflow-hidden  max-w-[15vw] ">
                        <div className="flex-col lg:flex lg:flex-row text-lg justify-center items-center">
                          <span>{item.username} </span>
                          <img
                            className="cursor-pointer ml-4 size-4"
                            src="\icons\copy.png"
                            alt=""
                            onClick={() => {
                              copyText(item.username);
                            }}
                          />
                        </div>
                      </td>

                      <td className="text-center   py-2 border border-white overflow-hidden max-w-[15vw] ">
                        <div className="flex-col lg:flex lg:flex-row text-lg justify-center items-center">
                          <span>{item.password}</span>

                          <img
                            className="cursor-pointer ml-4 size-4"
                            src="\icons\copy.png"
                            alt=""
                            onClick={() => {
                              copyText(item.password);
                            }}
                          />
                        </div>
                      </td>

                      <td className="text-center  py-2 border border-white overflow-hidden max-w-[15vw] ">
                        <span
                          className="mx-2 cursor-pointer"
                          onClick={() => deletePassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            className="size-1"
                          ></lord-icon>
                        </span>
                        <span
                          className="mx-2 cursor-pointer"
                          onClick={() => editPassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
