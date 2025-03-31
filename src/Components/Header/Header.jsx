import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo2.jpeg"
                            className="mr-3 justify-items-end h-full max-h-16"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/connect"
                            className="font-helvetica text-white bg-[#EEA123] hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-4 lg:px-5 py-4 lg:py-2.5 mr-2 focus:outline-none font-semibold"
                        >
                            Connect
                        </Link>
                        <button
                            className="lg:hidden text-gray-700 focus:outline-none p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center lg:order-1">
                        <ul className="flex flex-row space-x-8 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg p-4 rounded-lg border border-gray-300 lg:hidden">
                        <ul className="flex flex-col font-medium space-y-4 text-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-[#EEA123]" : "text-gray-700"
                                        } hover:bg-gray-50 hover:text-[#9c8046] p-2 rounded`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}