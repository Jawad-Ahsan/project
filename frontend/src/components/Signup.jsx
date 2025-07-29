import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaEnvelope, FaLock, FaMedal } from "react-icons/fa";
import { GiMilitaryFort, GiRank3 } from "react-icons/gi";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-gray-900 text-white p-12 flex flex-col justify-center"
      >
        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center mb-10">
            <GiMilitaryFort className="text-yellow-500 text-4xl mr-3" />
            <h1 className="text-3xl font-bold">
              JOIN THE <span className="text-yellow-500">FORCES</span>
            </h1>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="relative">
                <FaUserShield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="relative">
                <GiRank3 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select className="w-full bg-gray-800 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none">
                  <option>Select Branch</option>
                  <option>Army</option>
                  <option>Navy</option>
                  <option>Air Force</option>
                  <option>Marines</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, cursor: "pointer" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg"
              >
                <FaMedal className="inline mr-2" />
                ENLIST NOW
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>

      {/* Right Side - Image - Shows full height */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden md:block w-1/2 overflow-y-auto" // Allows scrolling if needed
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./images/EnlistNow.jpg)",
          backgroundSize: "contain", // Shows full image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#111827", // Fallback color (matches your dark theme)
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default Signup;
