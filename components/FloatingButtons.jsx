"use client";
import React, { useState, useEffect } from "react";
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
import axiosInstance from "@/services/api";

function FloatingButtons() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchContactData();
    fetchOfficeLocations();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await axiosInstance.get('/contact');
      if (response.data.success) {
        setContactInfo(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
    }
  };

  const fetchOfficeLocations = async () => {
    try {
      const response = await axiosInstance.get('/offices');
      if (response.data.success) {
        setOffices(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching office locations:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Get data from API or use fallbacks
  const primaryPhone = contactInfo?.primary_phone || "+91 90960 99960";
  const secondaryPhone = contactInfo?.secondary_phone || "+91 98223 72070";
  const whatsappNumber = contactInfo?.whatsapp_number || "+919096099960";
  const primaryEmail = contactInfo?.primary_email || "info@bhumiindustrial.com";
  
  const facebookUrl = contactInfo?.facebook_url || "https://www.facebook.com/bhumiindustrial";
  const instagramUrl = contactInfo?.instagram_url || "https://www.instagram.com/bhumiindustrial";
  const linkedinUrl = contactInfo?.linkedin_url || "https://www.linkedin.com/company/bhumi-industrial";
  const youtubeUrl = contactInfo?.youtube_url || "https://youtube.com/@bhumiindustrial";
  
  const weekdayHours = contactInfo?.weekday_hours || "9:00 AM – 6:00 PM";
  const saturdayHours = contactInfo?.saturday_hours || "9:00 AM – 2:00 PM";

  // Format phone numbers for display (add space after country code)
  const formatPhoneForDisplay = (phone) => {
    if (!phone) return phone;
    // If it starts with +91 and has no space, add space
    if (phone.startsWith('+91') && phone.length === 13) {
      return `+91 ${phone.slice(3, 7)} ${phone.slice(7)}`;
    }
    return phone;
  };

  // Format phone for tel URL (remove spaces)
  const formatPhoneForTel = (phone) => {
    return phone?.replace(/\s+/g, '') || '';
  };

  // Build location options from API data
  const locationOptions = offices.length > 0 
    ? offices.map((office) => ({
        icon: <FaBuilding size={16} className="sm:w-[18px] sm:h-[18px]" />,
        label: office.is_head_office ? `${office.name} - ${office.city}` : office.name,
        href: `/contact/${office.slug}`,
        bgColor: office.is_head_office ? "bg-[#f97316]" : "bg-[#003366]",
        hoverColor: office.is_head_office ? "hover:bg-[#ea580c]" : "hover:bg-[#002244]",
        address: office.address_line_1?.split(',')[0] || office.city,
      }))
    : [
        {
          icon: <FaBuilding size={16} className="sm:w-[18px] sm:h-[18px]" />,
          label: "Head Office - Nashik",
          href: "/contact/head-office",
          bgColor: "bg-[#f97316]",
          hoverColor: "hover:bg-[#ea580c]",
          address: "College Road, Nashik",
        },
        {
          icon: <FaBuilding size={16} className="sm:w-[18px] sm:h-[18px]" />,
          label: "Mumbai Office",
          href: "/contact/mumbai-office",
          bgColor: "bg-[#003366]",
          hoverColor: "hover:bg-[#002244]",
          address: "Andheri East",
        },
        {
          icon: <FaBuilding size={16} className="sm:w-[18px] sm:h-[18px]" />,
          label: "Nagpur Office",
          href: "/contact/nagpur-office",
          bgColor: "bg-[#25D366]",
          hoverColor: "hover:bg-[#20ba5a]",
          address: "Ambazari",
        },
        {
          icon: <FaBuilding size={16} className="sm:w-[18px] sm:h-[18px]" />,
          label: "Pune Office",
          href: "/contact/pune-office",
          bgColor: "bg-[#dc2626]",
          hoverColor: "hover:bg-[#b91c1c]",
          address: "Chakan MIDC",
        },
      ];

  const callOptions = [
    {
      icon: <FaPhoneAlt size={14} className="sm:w-4 sm:h-4" />,
      label: "Primary Contact",
      number: formatPhoneForDisplay(primaryPhone),
      href: `tel:${formatPhoneForTel(primaryPhone)}`,
      bgColor: "bg-[#f97316]",
      description: "24/7 Available",
    },
    {
      icon: <FaPhoneAlt size={14} className="sm:w-4 sm:h-4" />,
      label: "Alternate Contact",
      number: formatPhoneForDisplay(secondaryPhone),
      href: `tel:${formatPhoneForTel(secondaryPhone)}`,
      bgColor: "bg-[#ea580c]",
      description: "Office Hours",
    },
  ];

  const buttons = [
    {
      icon: <FaPhone size={18} className="sm:w-5 sm:h-5" />,
      label: "Call Us",
      href: "#",
      bgColor: "bg-[#f97316]",
      hoverColor: "hover:bg-[#ea580c]",
      aria: "Call us",
      hasDropdown: true,
      dropdownType: "call",
    },
    {
      icon: <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />,
      label: "WhatsApp",
      href: `https://wa.me/${formatPhoneForTel(whatsappNumber)}?text=${encodeURIComponent("Hello Bhumi Industrial, I would like to know more about your industrial consulting services.")}`,
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20ba5a]",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: "Chat on WhatsApp",
      isExternal: true,
    },
    {
      icon: <FaEnvelope size={18} className="sm:w-5 sm:h-5" />,
      label: "Email",
      href: `mailto:${primaryEmail}`,
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

  if (loading) {
    return (
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="flex flex-col items-end gap-2 sm:gap-3">
          <div className="p-2.5 sm:p-3 bg-gray-300 rounded-full shadow-lg animate-pulse">
            <div className="w-5 h-5 sm:w-6 sm:h-6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <div className="flex flex-col items-end gap-2 sm:gap-3">
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
              className={`p-2.5 sm:p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-[#f97316] hover:bg-[#ea580c]`}
            >
              <FaPhone size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:group-hover:inline text-xs sm:text-sm font-medium pr-2">
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
                className="absolute bottom-full right-0 mb-2 w-64 sm:w-72 lg:w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] p-2.5 sm:p-3">
                  <h3 className="text-white font-bold flex items-center gap-2 text-sm sm:text-base">
                    <FaPhone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Call Our Offices
                  </h3>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                    24/7 support available
                  </p>
                </div>
                
                <div className="p-2 max-h-80 sm:max-h-96 overflow-y-auto">
                  {callOptions.map((option, index) => (
                    <motion.div
                      key={option.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleCallClick(option.href)}
                        className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group text-left"
                      >
                        <div className={`p-1.5 sm:p-2 ${option.bgColor} rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
                          {option.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] sm:text-xs text-gray-500">{option.label}</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#f97316] truncate">
                            {option.number}
                          </p>
                          <p className="text-[8px] sm:text-xs text-gray-400">{option.description}</p>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-2 border-t border-gray-100 bg-gray-50">
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center">
                    Response within 2 hours
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${formatPhoneForTel(whatsappNumber)}?text=${encodeURIComponent("Hello Bhumi Industrial, I would like to know more about your industrial consulting services.")}`}
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
            className={`p-2.5 sm:p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-[#25D366] hover:bg-[#20ba5a]`}
          >
            <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
            <span className="hidden sm:group-hover:inline text-xs sm:text-sm font-medium pr-2">
              WhatsApp
            </span>
          </div>
        </motion.a>

        {/* Email Button */}
        <motion.a
          href={`mailto:${primaryEmail}`}
          aria-label="Send us an email"
          className="relative"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div
            className={`p-2.5 sm:p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-[#003366] hover:bg-[#002244]`}
          >
            <FaEnvelope size={18} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:group-hover:inline text-xs sm:text-sm font-medium pr-2">
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
              className={`p-2.5 sm:p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600`}
            >
              <FaMapMarkerAlt size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:group-hover:inline text-xs sm:text-sm font-medium pr-2">
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
                className="absolute bottom-full right-0 mb-2 w-64 sm:w-72 lg:w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2.5 sm:p-3">
                  <h3 className="text-white font-bold flex items-center gap-2 text-sm sm:text-base">
                    <FaBuilding className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Our Office Locations
                  </h3>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                    Visit us at any of our branches
                  </p>
                </div>
                
                <div className="p-2 max-h-80 sm:max-h-96 overflow-y-auto">
                  {locationOptions.map((option, index) => (
                    <motion.div
                      key={option.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleLocationClick(option.href)}
                        className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group text-left"
                      >
                        <div className={`p-1.5 sm:p-2 ${option.bgColor} rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
                          {option.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-[#f97316] truncate">
                            {option.label}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                            <FaMapMarkerAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                            {option.address}
                          </p>
                        </div>
                        <FaDirections className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#f97316] transition-colors flex-shrink-0" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-2.5 sm:p-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-600">
                    <FaClock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#f97316] flex-shrink-0" />
                    <span className="truncate">Mon-Fri: {weekdayHours} | Sat: {saturdayHours}</span>
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