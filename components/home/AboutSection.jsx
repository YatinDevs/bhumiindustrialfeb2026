"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  ThumbsUp,
} from "lucide-react";
import { founderImage } from "../../assets"; // Adjust path as needed

const AboutSection = () => {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "26+",
      label: "Years of Excellence",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  const milestones = [
    { year: "1999", text: "Bhumi Industrial Founded by Milind Rajhans" },
    { year: "2005", text: "Expanded to MIDC consultancy services" },
    { year: "2010", text: "Started Financial Advisory vertical" },
    { year: "2015", text: "FI-ACC accreditation received" },
    { year: "2024", text: "Serving 1000+ clients across Maharashtra" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fff7ed]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
            About Bhumi Industrial
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Partner in{" "}
            <span className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent">
              Industrial Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by{" "}
            <span className="font-bold text-[#ea580c]">Milind Rajhans</span>,
            we've been the backbone of industrial development in Nashik, Pune &
            Chakan since 1999.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={founderImage}
                alt="Milind Rajhans - Founder"
                className="w-full h-[400px] object-cover"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Milind Rajhans</h3>
                <p className="text-white/90">
                  Founder & Lead Consultant | FI-ACC
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
                >
                  <div className="text-[#f97316] mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Industrial Solutions Under One Roof
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#f97316]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    FI-ACC Accredited
                  </h4>
                  <p className="text-gray-600">
                    Recognized financial and industrial consulting expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#f97316]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Strategic Locations
                  </h4>
                  <p className="text-gray-600">
                    Serving Ambad MIDC, Satpur MIDC, Sinnar MIDC, Pune & Chakan
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline/Milestones */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <h4 className="text-lg font-semibold mb-4">Our Journey</h4>
              <div className="space-y-3">
                {milestones.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="font-bold text-[#f97316] min-w-[60px]">
                      {item.year}
                    </span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
