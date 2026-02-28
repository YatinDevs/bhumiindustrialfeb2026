// components/home/TestimonialsSection.jsx
"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajendra Khadse",
    company: "Khadse Industries, Ambad MIDC",
    service: "MIDC Transfer & NOC",
    text: "Bhumi Industrial helped us complete our MIDC plot transfer in record time. Milind sir's expertise is unmatched — everything was done without us having to visit any office multiple times.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    company: "Mehta Enterprises, Satpur",
    service: "Term Loan & CMA Report",
    text: "We got a ₹2Cr term loan approved in 45 days with Bhumi's help. Their CMA report was so well-prepared that the bank officer had no questions. Highly recommend for all financial consulting.",
    rating: 5,
  },
  {
    name: "Suresh Jain",
    company: "Jain Group, Pune MIDC",
    service: "Project Planning",
    text: "Milind sir guided us through the entire factory setup — from MIDC plot selection to final production. His 26 years of experience shows in every step. Best industrial consultant in Nashik.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            500+ satisfied clients across Nashik, Pune, and Maharashtra
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-[#fff7ed] to-white p-7 rounded-2xl border border-[#ffedd5] hover:shadow-xl transition-shadow"
            >
              <div className="text-7xl text-[#f97316]/10 absolute top-4 right-5 font-serif leading-none select-none">
                "
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating)
                  .fill(0)
                  .map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-[#f97316] fill-[#f97316]"
                    />
                  ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="border-t border-[#ffedd5] pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-[#f97316] font-medium">
                  {t.company}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-[#f97316]/10 text-[#ea580c] rounded text-xs">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
