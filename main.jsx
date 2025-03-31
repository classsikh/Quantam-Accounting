import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./src/index.css";
import Home from "./src/Components/Home/Home.jsx";
import Layout from "./src/Layout.jsx";
import About from "./src/Components/About/About.jsx";
import Services from "./src/Components/Services/Services.jsx";
import Contact from "./src/Components/Contact/Contact.jsx";
import Connect from "./src/Components/Connect/Connect.jsx";
import { AuthProvider } from "./src/AuthContext.jsx";
import PrivateRoute from "./src/privateRoute.jsx";
import Dashboard from "./src/Components/Dashboard/dashboard.jsx";
import Login from "./src/Components/Auth/login.jsx";
import Terms from "./src/Components/Terms/Terms.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="connect" element={<Connect />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
