import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Connect() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-black text-3xl font-bold mb-8">
        Make a Healthy Connection with Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Instagram */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-orange-500">
          <FaInstagram className="text-orange-600 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Instagram</h2>
          <a
            href="https://www.instagram.com/info_quantumabs/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Follow
          </a>
        </div>

        {/* Facebook */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-700">
          <FaFacebook className="text-blue-700 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Facebook</h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Friend
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-900">
          <FaLinkedin className="text-blue-900 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/company/quantum-abs/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Connect
          </a>
        </div>

        {/* Twitter */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-4 border-blue-400">
          <FaTwitter className="text-blue-400 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Twitter</h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}
