"use client";
import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Pesan terkirim dari ${form.name}`);
  };
  return (
    <section id="contact" className="bg-slate-100 py-20 px-6 md:px-14">
      <div className="md:max-w-5xl max-w-4xl md:mx-0 mx-auto">
        <div className="mb-8">
          <h2 className="md:text-3xl text-2xl font-bold text-slate-900 mb-2">
            Get in touch
          </h2>
          <p className="text-slate-600 md:text-xl">
            Our team will get back to you within 24 hours
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="name"
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g Casper Halcro"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your dream ski trip.... "
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl h-32 resize-y focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div>
            <Button
              className="w-auto px-8 py-3 bg-white font-semibold text-slate-800 border border-slate-300 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
