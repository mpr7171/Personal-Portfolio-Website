import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Collaboration Inquiry");
    const body = encodeURIComponent(
      `Hello,\n\nMy name is ${name}, and my email is ${email}. 
      I have a message for you:\n\n${message}`
    );
    window.location.href = `mailto:maddipranavreddy@gmail.com?subject=${subject}&body=${body}`;
  };

  const isFormFilled = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 sm:pt-14 sm:pb-16"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className={`flex flex-col max-w-[600px] w-full ${window.innerWidth <= 768 ? '-mt-24' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Please don't hesitate to reach out to me, or you can call me at +91
            8186010696
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className={`text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ${!isFormFilled ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormFilled}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
