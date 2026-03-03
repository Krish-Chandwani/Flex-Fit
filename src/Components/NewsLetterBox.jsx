import { useState } from "react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing! 🎉");
    setEmail("");

  };

  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>

      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Get updates about new arrivals and special offers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md cursor-pointer hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-green-600">{message}</p>
      )}
    </div>
  );
};

export default NewsletterBox;