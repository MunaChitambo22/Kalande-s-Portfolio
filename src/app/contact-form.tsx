"use client";

import React, { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <section className="py-28 px-8">
      <div className="container mx-auto text-center mb-20">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography variant="lead" className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          I would love to hear from you! Please fill out the form below.
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <Button type="submit" variant="filled" color="blue">
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default Contact;
