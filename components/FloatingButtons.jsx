"use client";
import React, { useState } from "react";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaPhone, 
  FaPhoneAlt,
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaBuilding, 
  FaDirections,
  FaClock
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

function FloatingButtons() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const router = useRouter();
  
  // Bhumi Industrial Consultant contact information
  const contactInfo = {
    primaryPhone: "+919096099960",
    secondaryPhone: "+919822372070",
    whatsapp: "+919096099960",
    email: "info@bhumiindustrial.com",
    website: "https://bhumiindustrial.com",
    whatsappMessage:
      "Hello Bhumi Industrial, I would like to know more about your industrial consulting services.",
    instagram: "https://www.instagram.com/bhumiindustrial",
    facebook: "https://www.facebook.com/bhumiindustrial",
    linkedin: "https://www.linkedin.com/company/bhumi-industrial",
    youtube: "https://youtube.com/@bhumiindustrial",
  };

  // Location pages routes
  const locationPages = {
    'head-office': "/contact/head-office",
    'mumbai-office': "/contact/mumbai-office",
    'nagpur-office': "/contact/nagpur-office",
    'pune-office': "/contact/pune-office",
  };

  const locationOptions = [
    {
      icon: <FaBuilding size={18} />,
      label: "Head Office - Nashik",
      href: locationPages['head-office'],
      bgColor: "bg-[#f97316]",
      hoverColor: "hover:bg-[#ea580c]",
      address: "College Road, Nashik",
    },
    {
      icon: <FaBuilding size={18} />,
      label: "Mumbai Office",
      href: locationPages['mumbai-office'],
      bgColor: "bg-[#003366]",
      hoverColor: "hover:bg-[#002244]",
      address: "Andheri East",
    },
    {
      icon: <FaBuilding size={18} />,
      label: "Nagpur Office",
      href: locationPages['nagpur-office'],
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20ba5a]",
      address: "Ambazari",
    },
    {
      icon: <FaBuilding size={18} />,
      label: "Pune Office",
      href: locationPages['pune-office'],
      bgColor: "bg-[#dc2626]",
      hoverColor: "hover:bg-[#b91c1c]",
      address: "Chakan MIDC",
    },
  ];

  const callOptions = [
    {
      icon: <FaPhoneAlt size={16} />,
      label: "Primary Contact",
      number: "+91 90960 99960",
      href: "tel:+919096099960",
      bgColor: "bg-[#f97316]",
      description: "24/7 Available",
    },
    {
      icon: <FaPhoneAlt size={16} />,
      label: "Alternate Contact",
      number: "+91 98223 72070",
      href: "tel:+919822372070",
      bgColor: "bg-[#ea580c]",
      description: "Office Hours",
    },
  ];

  const buttons = [
    {
      icon: <FaPhone size={20} />,
      label: "Call Us",
      href: "#",
      bgColor: "bg-[#f97316]",
      hoverColor: "hover:bg-[#ea580c]",
      aria: "Call us",
      hasDropdown: true,
      dropdownType: "call",
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      href: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`,
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20ba5a]",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: "Chat on WhatsApp",
      isExternal: true,
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      href: `mailto:${contactInfo.email}`,
      bgColor: "bg-[#003366]",
      hoverColor: "hover:bg-[#002244]",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: "Send us an email",
      isExternal: true,
    },
  ];

  const handleLocationClick = (href) => {
    setIsLocationOpen(false);
    router.push(href);
  };

  const handleCallClick = (href) => {
    setIsCallOpen(false);
    window.location.href = href;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {/* Call Button with Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsCallOpen(true)}
          onMouseLeave={() => setIsCallOpen(false)}
        >
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, type: "spring", stiffness: 200 }}
          >
            <div
              className={`p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-[#f97316] hover:bg-[#ea580c]`}
            >
              <FaPhone size={22} />
              <span className="hidden group-hover:inline text-sm font-medium pr-2">
                Call Us
              </span>
            </div>
          </motion.div>

          <AnimatePresence>
            {isCallOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-2 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] p-3">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <FaPhone className="w-4 h-4" />
                    Call Our Offices
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    24/7 support available
                  </p>
                </div>
                
                <div className="p-2 max-h-96 overflow-y-auto">
                  {callOptions.map((option, index) => (
                    <motion.div
                      key={option.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleCallClick(option.href)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group text-left"
                      >
                        <div className={`p-2 ${option.bgColor} rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">{option.label}</p>
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-[#f97316]">
                            {option.number}
                          </p>
                          <p className="text-xs text-gray-400">{option.description}</p>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-2 border-t border-gray-100 bg-gray-50">
                  <p className="text-xs text-gray-500 text-center">
                    ⏱️ Response within 2 hours
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        >
          <div
            className={`p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-[#25D366] hover:bg-[#20ba5a]`}
          >
            <FaWhatsapp size={24} />
            <span className="hidden group-hover:inline text-sm font-medium pr-2">
              WhatsApp
            </span>
          </div>
        </motion.a>

        {/* Email Button */}
        <motion.a
          href={`mailto:${contactInfo.email}`}
          aria-label="Send us an email"
          className="relative"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div
            className={`p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-[#003366] hover:bg-[#002244]`}
          >
            <FaEnvelope size={20} />
            <span className="hidden group-hover:inline text-sm font-medium pr-2">
              Email
            </span>
          </div>
        </motion.a>

        {/* Location Button with Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsLocationOpen(true)}
          onMouseLeave={() => setIsLocationOpen(false)}
        >
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div
              className={`p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600`}
            >
              <FaMapMarkerAlt size={22} />
              <span className="hidden group-hover:inline text-sm font-medium pr-2">
                Our Offices
              </span>
            </div>
          </motion.div>

          <AnimatePresence>
            {isLocationOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-2 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <FaBuilding className="w-4 h-4" />
                    Our Office Locations
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    Visit us at any of our branches
                  </p>
                </div>
                
                <div className="p-2 max-h-96 overflow-y-auto">
                  {locationOptions.map((option, index) => (
                    <motion.div
                      key={option.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleLocationClick(option.href)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group text-left"
                      >
                        <div className={`p-2 ${option.bgColor} rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 group-hover:text-[#f97316]">
                            {option.label}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            {option.address}
                          </p>
                        </div>
                        <FaDirections className="w-4 h-4 text-gray-400 group-hover:text-[#f97316] transition-colors" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <FaClock className="w-3 h-3 text-[#f97316]" />
                    <span>Mon-Fri: 9am-6pm | Sat: 9am-2pm</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default FloatingButtons;