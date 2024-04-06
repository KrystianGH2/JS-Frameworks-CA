"use client";
import { useState } from "react";
import usePaginationStore from "@/lib/utils/store";
import { formSchema } from "@/lib/utils/validation";

export default function FormLayout() {
  const { toggleModalOpen } = usePaginationStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
    cardNumber: "",
    expireDate: "",
    cvc: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await formSchema.validate(formData, { abortEarly: false });
      toggleModalOpen();
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };
  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-evenly gap-8 lg:flex-row lg:gap-8 w-full"
      >
        <div className="space-y-12 border p-5 rounded-md">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Shipping Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="block w-full rounded-md bg-white outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                  />
                  {errors["firstName"] && (
                    <span className="text-red-500">{errors["firstName"]}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="block w-full rounded-md bg-white outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                  />
                  {errors["lastName"] && (
                    <span className="text-red-500">{errors["lastName"]}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  bg-white outline-none sm:text-sm sm:leading-6"
                  />
                  {errors["email"] && (
                    <span className="text-red-500">{errors["email"]}</span>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetAddress"
                    id="street-address"
                    autoComplete="street-address"
                    onChange={handleChange}
                    value={formData.streetAddress}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 bg-white outline-none sm:text-sm sm:leading-6"
                  />
                  {errors["streetAddress"] && (
                    <span className="text-red-500">
                      {errors["streetAddress"]}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    onChange={handleChange}
                    value={formData.city}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 bg-white outline-none sm:text-sm sm:leading-6"
                  />
                  {errors["city"] && (
                    <span className="text-red-500">{errors["city"]}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    onChange={handleChange}
                    value={formData.region}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-white outline-none sm:text-sm sm:leading-6"
                  />
                  {errors["region"] && (
                    <span className="text-red-500">{errors["region"]}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalCode"
                    id="postal-code"
                    autoComplete="postal-code"
                    onChange={handleChange}
                    value={formData.postalCode}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-white outline-none sm:text-sm sm:leading-6"
                  />
                  {errors["postalCode"] && (
                    <span className="text-red-500">{errors["postalCode"]}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 border xl:w-[60%] h-[450px] lg:h-[425px] rounded-md">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Card Information
          </h2>

          <div className="flex flex-col w-full h-full justify-around gap-5">
            <div className="flex flex-col gap-2 ">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="card-number"
              >
                Card Number
              </label>

              <input
                className={`block w-full rounded-md bg-white outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 ${
                  errors["cardNumber"] ? "border-red-500" : ""
                }`}
                type="text"
                name="cardNumber"
                id="card-number"
                placeholder="1234 - 5678 - 9011 - 7100"
                onChange={handleChange}
                value={formData.cardNumber}
              />
              {errors["cardNumber"] && (
                <span className="text-red-500">{errors["cardNumber"]}</span>
              )}
            </div>

            <div className="flex flex-col justify-evenly gap-5 lg:flex-row">
              <div className="flex flex-col gap-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="expire-date"
                >
                  Expire Date
                </label>

                <input
                  className={`block w-full lg:w-[300px] rounded-md bg-white outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 ${
                    errors["expireDate"] ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="expireDate"
                  id="expire-date"
                  placeholder="09 / 29"
                  onChange={handleChange}
                  value={formData.expireDate}
                />
                {errors["expireDate"] && (
                  <span className="text-red-500">{errors["expireDate"]}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="cvc"
                >
                  CVC
                </label>

                <input
                  className={`block w-full lg:w-[300px] rounded-md bg-white outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 ${
                    errors["cvc"] ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder=" * * *"
                  onChange={handleChange}
                  value={formData.cvc}
                />
                {errors["cvc"] && (
                  <span className="text-red-500">{errors["cvc"]}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  onChange={handleChange}
                  checked={formData.acceptTerms}
                />
                <span className="ml-2 text-sm font-medium leading-6 text-gray-900">
                  I accept the terms and conditions
                </span>
              </div>
              {errors["acceptTerms"] && (
                <span className="text-red-500">{errors["acceptTerms"]}</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center items-center pt-5">
            <button
              type="submit"
              className="w-full bg-black rounded-full h-12 text-white max-w-lg"
            >
              Pay
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
