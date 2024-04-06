"use client";
import React, { useState } from "react";
import { ContactFormSchema, subjects } from "@/lib/utils/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ContactFormSchema.validate(formData, { abortEarly: false });
      setErrors({});
      toast.success("Thanks for reaching out. We'll get back to you ASAP.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-success",
      });
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    } finally {
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <form
      id="ContactForm"
      onSubmit={handleSubmit}
      className="max-w-xl w-full py-5 border-gray-50 border-[1px] border-opacity-10 rounded-md px-5 my-10"
    >
      <ToastContainer />
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-1 text-white">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Bob John Smith"
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        />
        {errors.fullName && (
          <span className="text-red-500">{errors.fullName}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="bob@example.com"
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1 text-white">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        >
          <option value="">Select a subject...</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="text-red-500">{errors.subject}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1 text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        />
        {errors.message && (
          <span className="text-red-500">{errors.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-md hover:cursor"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
