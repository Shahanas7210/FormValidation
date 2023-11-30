import React, { useState } from "react";

const Form = () => {
  const formElement = [
    { label: "First Name", type: "text", name: "firstName" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Email", type: "email", name: "email" },
    { label: "Password", type: "password", name: "password" },
  ];
  const [formData, setFormData] = useState({});
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="  rounded-xl border border-white w-[31.25rem] px-10 py-10">
      <form action="">
        <div className="py-10">
          <h1 className="font-extrabold text-2xl">Create Your Account</h1>
          <p className="font-semibold pt-2">Fill all the details </p>
        </div>
        {formElement.map((item, index) => {
          return (
            <div className="flex flex-col pt-4 " key={index}>
              <label className="flex items-start " htmlFor={item.name}>
                {item.label}:
              </label>
              <input
                className="h-9 mt-2"
                type={item.type}
                onChange={onChange}
                name={item.name}
                id={item.name}
              />
            </div>
          );
        })}
        <input
          className="bg-white px-10 py-3 text-gray-900 font-semibold mt-6 rounded-xl border-[3px] cursor-pointer border-white hover:bg-[#242424] hover:text-white "
          type="submit"
          value="Submit"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
