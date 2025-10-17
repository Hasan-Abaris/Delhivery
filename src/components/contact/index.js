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

export default function ContactPage() {
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
      // Replace with your API endpoint
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
    <section className="min-h-screen bg-gray-100 py-20 px-6">
      <ToastContainer />
      {/* Header */}
      <div className="text-center mb-16">
        <Image
          src="/images/favicon.png"
          alt="Delia UG Logo"
          width={100}
          height={100}
          className="mx-auto mb-6 rounded-full shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Contact <span className="text-orange-400">Delia UG</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re a courier, fleet owner, or business partner,
          we&rsquo;re here to assist you. Reach out to the relevant team below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <ContactCard
          title="Onboarding Team"
          email="onboarding@deliagroup.eu"
          description="For help applying or submitting documents."
          icon="file-text"
          gradient="from-gray-700 to-gray-800"
        />
        <ContactCard
          title="Fleet & Courier Support"
          email="support@deliagroup.eu"
          description="Active partners or couriers needing help."
          icon="users"
          gradient="from-gray-700 to-gray-800"
        />
        <ContactCard
          title="General Inquiries"
          email="info@deliagroup.eu"
          description="For press, partnerships, or questions."
          icon="mail"
          gradient="from-orange-500 to-red-500"
        />
        <ContactCard
          title="Legal & Compliance"
          email="legal@deliagroup.eu"
          description="Contract-related or compliance inquiries."
          icon="scale"
          gradient="from-orange-500 to-red-500"
        />
      </div>

      {/* Schedule a Call */}
      <div className="text-center mb-16">
        <a
          href="https://calendar.app.google/Hkcj5jeSGEp9kwpx9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 shadow-lg transition-all duration-300"
        >
          Schedule a Call
        </a>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Send us a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              id="name"
              label="Full Name *"
              placeholder="Your full name"
              register={register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />
            <InputField
              id="email"
              label="Email *"
              placeholder="you@example.com"
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
              id="phone"
              label="Phone"
              placeholder="+49 123 456789"
              register={register("phone")}
              error={errors.phone?.message}
            />
            <TextAreaField
              id="message"
              label="Message *"
              placeholder="Write your message here..."
              register={register("message", {
                required: "Message is required",
              })}
              error={errors.message?.message}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-lg font-semibold rounded-lg bg-orange-500 text-white shadow-lg transition-all duration-300 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-600 hover:shadow-xl"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Contact Card Component
const ContactCard = ({ title, email, description, icon, gradient }) => {
  const icons = {
    "file-text": <DocumentTextIcon className="w-6 h-6 text-white" />,
    users: <UsersIcon className="w-6 h-6 text-white" />,
    mail: <EnvelopeIcon className="w-6 h-6 text-white" />,
    scale: <ScaleIcon className="w-6 h-6 text-white" />,
  };
  return (
    <div
      className={`flex p-6 rounded-2xl shadow-md border border-gray-200 bg-gradient-to-br ${gradient} text-white`}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mr-4">
        {icons[icon]}
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <a href={`mailto:${email}`} className="text-sm underline block mb-1">
          {email}
        </a>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-gray-700 font-medium">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      className={`w-full px-4 py-2 border rounded-lg ${
        error ? "border-red-500" : "border-gray-300"
      } focus:outline-none focus:ring-2 focus:ring-orange-400`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// TextArea Component
const TextAreaField = ({ id, label, placeholder, register, error }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-gray-700 font-medium">
      {label}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      rows={5}
      {...register}
      className={`w-full px-4 py-2 border rounded-lg ${
        error ? "border-red-500" : "border-gray-300"
      } focus:outline-none focus:ring-2 focus:ring-orange-400`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
