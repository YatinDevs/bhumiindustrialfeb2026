// components/CTASection.jsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Calendar,
} from "lucide-react";
import axiosInstance from "@/services/api";

const CTASection = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [headOffice, setHeadOffice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactData();
    fetchHeadOffice();
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

  const fetchHeadOffice = async () => {
    try {
      const response = await axiosInstance.get('/offices/head-office');
      if (response.data.success) {
        setHeadOffice(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching head office:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get data from API or use fallbacks
  const primaryPhone = contactInfo?.primary_phone || "+91 90960 99960";
  const primaryEmail = contactInfo?.primary_email || "info@bhumiindustrial.com";
  const whatsappNumber = contactInfo?.whatsapp_number || "+91 90960 99960";
  
  // Format head office address
  const headOfficeAddress = headOffice 
    ? `${headOffice.address_line_1}, ${headOffice.address_line_2 ? headOffice.address_line_2 + ', ' : ''}${headOffice.city} - ${headOffice.pincode}`
    : "Office no 301/302, Tulips Apartment, College Road, Nashik-422005";

  // Google Maps link
  const googleMapsLink = headOffice?.google_maps_link || 
    "https://maps.google.com/?q=Tulips+Apartment+College+Road+Nashik";

  const ctaCards = [
    {
      title: "Free Consultation",
      description:
        "Get expert advice on your industrial project or financial needs",
      icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      buttonText: "Call Now",
      buttonLink: `tel:${primaryPhone.replace(/\s+/g, '')}`,
      bgColor: "bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c]",
      textColor: "text-white",
    },
    {
      title: "Visit Our Office",
      description: headOfficeAddress,
      icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      buttonText: "Get Directions",
      buttonLink: googleMapsLink,
      bgColor: "bg-[#003366]",
      textColor: "text-white",
    },
    {
      title: "Email Us",
      description:
        "Send us your requirements and we'll respond within 24 hours",
      icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      buttonText: "Send Email",
      buttonLink: `mailto:${primaryEmail}`,
      bgColor: "bg-[#f97316]",
      textColor: "text-white",
    },
  ];

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fff7ed] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-48 sm:h-56 lg:h-64">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 sm:border-4 border-[#f97316] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fff7ed] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 mb-10 sm:mb-12 lg:mb-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
              Ready to Start Your Industrial Journey?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90 px-2">
              Get a free consultation from our experts. We'll help you navigate
              through MIDC approvals, project finance, and more.
            </p>
            
            {/* CTA Buttons - ALWAYS SIDE BY SIDE with flex-1 */}
            <div className="flex flex-row flex-nowrap gap-1 sm:gap-2 lg:gap-3 justify-center max-w-full mx-auto">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 px-1 sm:px-2 lg:px-4 py-2.5 sm:py-3 lg:py-4 bg-white text-[#ea580c] rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#fff7ed] hover:scale-105 transition-all shadow-lg group text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="truncate max-w-[90px] xs:max-w-[110px] sm:max-w-none">Free Consult</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden xs:inline" />
              </Link>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 px-1 sm:px-2 lg:px-4 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-white/20 hover:scale-105 transition-all text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="truncate max-w-[80px] xs:max-w-[100px] sm:max-w-none">{primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.textColor} p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] lg:hover:scale-105 flex flex-col`}
            >
              <div className="mb-3 sm:mb-4">{card.icon}</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{card.title}</h3>
              <p className="mb-4 sm:mb-5 lg:mb-6 text-white/90 text-xs sm:text-sm lg:text-base flex-1 line-clamp-3 sm:line-clamp-none">
                {card.description}
              </p>
              <Link
                href={card.buttonLink}
                className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/30 transition-all group text-xs sm:text-sm lg:text-base w-full sm:w-auto"
                target={card.buttonLink.startsWith('http') ? '_blank' : undefined}
                rel={card.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {card.buttonText}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f97316]">27+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f97316]">4000+</div>
            <div className="text-xs sm:text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f97316]">3500+</div>
            <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f97316]">25+</div>
            <div className="text-xs sm:text-sm text-gray-600">MIDC Areas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;