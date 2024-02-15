import React from "react";

function EmailRegisterForm({ formData, handleChange }) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="block text-sm text-start font-medium text-gray-700"
          >
            Username
          </label>

          <div className="w-full   gap-1 inline-flex">
            <input
              value={formData.username}
              onChange={handleChange}
              name="username"
              required
              id="fullname"
              type="text"
              autoComplete="on"
              className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
              placeholder="Enter your username"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="block text-sm text-start font-medium text-gray-700"
          >
            Email Adress
          </label>

          <div className="w-full   gap-1 inline-flex">
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              id="email"
              type="text"
              autoComplete="on"
              className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="block text-sm text-start font-medium text-gray-700"
          >
            Password
          </label>

          <div className="w-full gap-1 inline-flex">
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              required
              id="password"
              type="password"
              autoComplete="on"
              className=" text-zinc-400 py-3 px-2   text-base font-normal w-full leading-normal bg-white border border-neutral-300"
              placeholder="Create a password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailRegisterForm;
