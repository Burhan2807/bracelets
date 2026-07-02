"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@knottedandbright.example";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-display text-4xl font-extrabold">Get in Touch</h1>
      <p className="mt-3 text-foreground/70">
        Questions about an order, a custom piece, or a wholesale inquiry?
        Send a note and we&apos;ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="font-display font-semibold">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border-2 border-brand-purple/30 px-4 py-2 focus:border-brand-purple focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-display font-semibold">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border-2 border-brand-purple/30 px-4 py-2 focus:border-brand-purple focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-display font-semibold">Message</span>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-xl border-2 border-brand-purple/30 px-4 py-2 focus:border-brand-purple focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="mt-2 self-start rounded-full bg-brand-pink px-8 py-3 font-display font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
