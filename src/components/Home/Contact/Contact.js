"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import {
  DocumentTextIcon,
  UsersIcon,
  EnvelopeIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Mock API call
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
      aria-labelledby="contact-heading"
    >
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-16 px-4 sm:px-6">
        <Image
          src="/images/favicon.png"
          alt="Delia UG Logo"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-6 shadow-lg"
          priority
        />
        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight"
        >
          Let&apos;s Talk Logistics
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
          Whether you&apos;re a courier, fleet, or enterprise, we provide
          structured, transparent, and data-driven logistics solutions.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ContactCard
            title="Onboarding Team"
            email="onboarding@deliaug.com"
            description="For help applying or submitting documents."
            icon="file-text"
            gradient="from-gray-700 to-gray-800"
          />
          <ContactCard
            title="Fleet & Courier Support"
            email="support@deliaug.com"
            description="For active partners or couriers needing help."
            icon="users"
            gradient="from-gray-700 to-gray-800"
          />
          <ContactCard
            title="General Inquiries"
            email="info@deliaug.com"
            description="For press, partnerships, or general questions."
            icon="mail"
            gradient="from-orange-500 to-red-500"
          />
          <ContactCard
            title="Legal & Compliance"
            email="legal@deliaug.com"
            description="For contracts or compliance inquiries."
            icon="scale"
            gradient="from-orange-500 to-red-500"
          />
        </div>

        {/* Schedule Call */}
        <div className="text-center mb-16">
          <a
            href="https://calendar.app.google/Hkcj5jeSGEp9kwpx9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Schedule a call with our team"
          >
            Schedule a Call
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Apply as Driver / Fleet Owner
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                id="contact-name"
                label="Full Name or Company Name *"
                placeholder="Your full name or company"
                register={register("name", { required: "Name is required" })}
                error={errors.name?.message}
              />
              <InputField
                id="contact-email"
                label="Email *"
                placeholder="your@email.com"
                type="email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email?.message}
              />
              <InputField
                id="contact-phone"
                label="Phone *"
                placeholder="+49..."
                type="tel"
                register={register("phone", { required: "Phone is required" })}
                error={errors.phone?.message}
              />
              <SelectField
                id="contact-jobtype"
                label="Job Type *"
                options={["Full Time", "Part Time", "Mini Job"]}
                register={register("jobtype", {
                  required: "Job type is required",
                })}
                error={errors.jobtype?.message}
              />
              <TextAreaField
                id="contact-message"
                label="Message"
                placeholder="Additional information or queries..."
                register={register("message")}
                error={errors.message?.message}
              />
              <InputField
                id="contact-upload"
                label="Upload Documents (Optional)"
                type="file"
                register={register("upload")}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-gray-600 hover:to-gray-700 hover:shadow-2xl"
                } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                aria-label="Send your application"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center animate-pulse">
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Card
const ContactCard = ({ title, email, description, icon, gradient }) => {
  const icons = {
    "file-text": <DocumentTextIcon className="w-6 h-6 text-white" />,
    users: <UsersIcon className="w-6 h-6 text-white" />,
    mail: <EnvelopeIcon className="w-6 h-6 text-white" />,
    scale: <ScaleIcon className="w-6 h-6 text-white" />,
  };

  return (
    <div className="group p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 bg-gray-900/60 hover:scale-105 transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900">
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
        >
          {icons[icon]}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <a
            href={`mailto:${email}`}
            className="text-gray-300 font-semibold hover:text-gray-100 transition-colors text-sm block mb-1 focus:outline-none focus:underline"
            aria-label={`Email ${title} at ${email}`}
          >
            {email}
          </a>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Input Component
const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-100" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      className={`w-full px-4 py-2 rounded-lg border ${
        error ? "border-red-500" : "border-gray-600"
      } bg-gray-800/50 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-sm transition-all duration-300`}
      aria-invalid={error ? "true" : "false"}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// Select Component
const SelectField = ({ id, label, options, register, error }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-100" htmlFor={id}>
      {label}
    </label>
    <select
      id={id}
      {...register}
      className={`w-full px-4 py-2 rounded-lg border ${
        error ? "border-red-500" : "border-gray-600"
      } bg-gray-800/50 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-sm transition-all duration-300`}
    >
      <option value="">Select a job type</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// TextArea Component
const TextAreaField = ({ id, label, placeholder, register, error }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-100" htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      rows={5}
      {...register}
      className={`w-full px-4 py-2 rounded-lg border ${
        error ? "border-red-500" : "border-gray-600"
      } bg-gray-800/50 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-sm transition-all duration-300`}
      aria-invalid={error ? "true" : "false"}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default ContactSection;
