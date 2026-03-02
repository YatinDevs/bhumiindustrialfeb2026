"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Calendar,
} from "lucide-react";

const CTASection = () => {
  const ctaCards = [
    {
      title: "Free Consultation",
      description:
        "Get expert advice on your industrial project or financial needs",
      icon: <Phone className="w-8 h-8" />,
      buttonText: "Call Now",
      buttonLink: "tel:+919096099960",
      bgColor: "bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c]",
      textColor: "text-white",
    },
    {
      title: "Visit Our Office",
      description:
        "Office no 301/302, Tulips Apartment, College Road, Nashik-422005",
      icon: <MapPin className="w-8 h-8" />,
      buttonText: "Get Directions",
      buttonLink:
        "https://maps.google.com/?q=Tulips+Apartment+College+Road+Nashik",
      bgColor: "bg-[#003366]",
      textColor: "text-white",
    },
    {
      title: "Email Us",
      description:
        "Send us your requirements and we'll respond within 24 hours",
      icon: <Mail className="w-8 h-8" />,
      buttonText: "Send Email",
      buttonLink: "mailto:info@bhumiindustrial.com",
      bgColor: "bg-[#f97316]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff7ed] to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Industrial Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation from our experts. We'll help you navigate
              through MIDC approvals, project finance, and more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#ea580c] rounded-xl font-bold hover:bg-[#fff7ed] hover:scale-105 transition-all shadow-xl group"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/enquiry"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Meeting
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.textColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="mb-6 text-white/90 text-sm">{card.description}</p>
              <Link
                href={card.buttonLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all group"
              >
                {card.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f97316]">27+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f97316]">1000+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f97316]">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f97316]">25+</div>
            <div className="text-sm text-gray-600">MIDC Areas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
