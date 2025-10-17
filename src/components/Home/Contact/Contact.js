import React from "react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary-dark)), hsl(var(--primary)))",
      }}
    >
      <div className="py-12 text-center bg-black">
        <div className="container mx-auto px-6 max-w-4xl ">
          <Image
                     src="/images/favicon.png"
                     alt="Courier Connect Logo"
                     width={50} 
                     height={50} 
                     className="rounded-full"
                   />

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Lets Talk Logistics.
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Whether you are a courier, fleet, or enterprise, we build transparent, fair logistics together.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-6 max-w-5xl pb-2 bg-amber-950 mt-10 border-2 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-4 mb-20 mt-5 rounded-2xl ">
          <ContactCard
            title="Onboarding Team"
            email="info@deliaug.com"
            description="For help applying or submitting documents."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text w-6 h-6 text-white"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            }
            gradient="bg-[linear-gradient(135deg,hsl(var(--brand-blue)),hsl(var(--brand-blue)))]"
          />

          <ContactCard
            title="Fleet & Courier Support"
            email="info@deliaug.com"
            description="Active partners or couriers needing help."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-6 h-6 text-white"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            gradient="bg-[linear-gradient(135deg,hsl(var(--brand-blue)),hsl(var(--brand-blue)))]"
          />

          <ContactCard
            title="General Inquiries"
            email="info@deliaug.com"
            description="For press, partnerships, or questions."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-6 h-6 text-white"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            }
            gradient="bg-[linear-gradient(135deg,hsl(var(--orange-primary)),hsl(var(--orange-dark)))]"
          />

          <ContactCard
            title="Legal & Compliance"
            email="info@deliaug.com"
            description="Contract-related or compliance inquiries."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scale w-6 h-6 text-white"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
            }
            gradient="bg-[linear-gradient(135deg,hsl(var(--orange-primary)),hsl(var(--orange-dark)))]"
          />
        </div>

        {/* Schedule Call */}
        <div className="text-center mb-10">
          <a
            href="https://calendar.app.google/Hkcj5jeSGEp9kwpx9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a call on Google Calendar"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 rounded-[var(--radius-control)] bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 border-none"
          >
            Schedule a Call
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Send us a Message</h3>
            <form className="space-y-4">
              <InputField id="contact-name" label="Full Name *" placeholder="Your full name" />
              <InputField id="contact-email" label="Email *" placeholder="your@email.com" type="email" />
              <TextAreaField id="contact-message" label="Message *" placeholder="Tell us how we can help..." />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full py-3 text-lg rounded-[var(--radius-control)] bg-[hsl(var(--brand-blue))] hover:bg-[hsl(var(--brand-blue))]/90 text-white font-semibold border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card Component
const ContactCard = ({ title, email, description, icon, gradient }) => (
  <div className="group bg-white/5 backdrop-blur-sm border border-white/20 rounded-[var(--radius-card)] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] h-full">
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <a
          href={`mailto:${email}`}
          className="text-blue-300 font-semibold hover:text-blue-200 transition-colors duration-200 block mb-2 text-left"
          title={`Click to open email`}
        >
          {email}
        </a>
        <p className="text-blue-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// Input Component
const InputField = ({ id, label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium leading-none text-white" htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required
      className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-[hsl(var(--brand-blue))] focus:ring-[hsl(var(--brand-blue))] shadow-sm"
    />
  </div>
);

// TextArea Component
const TextAreaField = ({ id, label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium leading-none text-white" htmlFor={id}>{label}</label>
    <textarea
      id={id}
      placeholder={placeholder}
      required
      rows={4}
      className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-[hsl(var(--brand-blue))] focus:ring-[hsl(var(--brand-blue))] shadow-sm"
    />
  </div>
);

export default ContactSection;
