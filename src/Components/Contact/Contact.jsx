import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(formData.email)) {
      setError("❌ Invalid email format. Please enter a valid email.");
      setNotification("");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      setError("❌ Invalid phone number. Please enter a 10-digit phone number.");
      setNotification("");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await addDoc(collection(db, "leads"), formData);
      setNotification("✅ Form submitted successfully! We will get in touch with you soon.");
      setError("");
      setFormData({ fname: "", lname: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error adding lead:", error);
      setError("❌ Error submitting the form. Please try again later.");
      setNotification("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen mt-3 p-4">
      <div className="flex flex-wrap w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden border-4 border-orange-400 border-b-blue-500 p-6">
        <div className="hidden md:flex items-center justify-center w-full md:w-1/2 bg-[#EEA124] p-8">
          <img src="/contact_pic.png" alt="Illustration" className="w-full max-w-xs md:max-w-sm h-auto" />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            Let's Connect with Us
          </h1>
          {error && <p className="text-red-600 font-semibold text-center mb-4">{error}</p>}
          {notification && <p className="text-green-600 font-semibold text-center mb-4">{notification}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" name="fname" placeholder="First Name"
                value={formData.fname} onChange={handleChange}
                className="p-3 border rounded w-full" required
              />
              <input 
                type="text" name="lname" placeholder="Last Name"
                value={formData.lname} onChange={handleChange}
                className="p-3 border rounded w-full" required
              />
            </div>
            <input 
              type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange}
              className="w-full p-3 border rounded" required
            />
            <input 
              type="number" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange}
              className="w-full p-3 border rounded" required
            />
            <textarea 
              name="message" placeholder="Message"
              value={formData.message} onChange={handleChange}
              className="w-full p-3 border rounded" required
            ></textarea>
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-green-600">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-8 px-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center mb-4">📍 Find Us Here</h2>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7340.129136832227!2d77.50634463731967!3d23.09473208553464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c47b6d656d071%3A0xa4ae9a9957a321eb!2sShiv%20vatika%20Patel%20Nagar%20Mandideep!5e0!3m2!1sen!2sin!4v1741711765786!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
