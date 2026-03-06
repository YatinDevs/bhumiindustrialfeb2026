// components/home/TestimonialsSection.jsx
"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import axiosInstance from "@/services/api";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const [stats, setStats] = useState({
    clients: "3500+",
    projects: "4000+",
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axiosInstance.get('/about');
      if (response.data.success) {
        const pageData = response.data.data;
        
        // Extract testimonials from about page data
        if (pageData?.testimonials && Array.isArray(pageData.testimonials)) {
          setTestimonials(pageData.testimonials);
        } else {
          setTestimonials(getDefaultTestimonials());
        }
        
        // Update stats from about page data if available
        if (pageData?.stats) {
          const clientStat = pageData.stats.find(s => s.label === "Happy Clients");
          const projectStat = pageData.stats.find(s => s.label === "Projects Completed");
          
          setStats({
            clients: clientStat?.value || "3500+",
            projects: projectStat?.value || "4000+",
          });
        }
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials(getDefaultTestimonials());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultTestimonials = () => [
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
    {
      name: "Amit Patil",
      company: "Patil Engineers, Chakan",
      service: "MSME Registration",
      text: "Got our Udyam registration in just 24 hours. The team was extremely professional and helpful throughout the process.",
      rating: 5,
    },
    {
      name: "Neha Deshmukh",
      company: "Deshmukh Foods, Sinnar",
      service: "Project Finance",
      text: "They structured our project finance perfectly. The bank sanctioned our loan without any hiccups. Thank you Bhumi Industrial!",
      rating: 5,
    },
  ];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentSlide((prev) => Math.min(prev + 1, testimonials.length - 1));
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => Math.min(prev + 1, testimonials.length - 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Client Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Loading testimonials...
            </p>
          </div>
          <div className="flex justify-center items-center h-48 sm:h-56 lg:h-64">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 sm:border-4 border-[#f97316] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Client Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto">
            {stats.clients} satisfied clients across Nashik, Pune, and Maharashtra
          </p>
        </div>

        {/* Mobile View - Single Card with Navigation */}
        {isMobile ? (
          <div className="relative">
            {/* Current Slide Indicator */}
            <div className="flex justify-center gap-2 mb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToSlide(index, e)}
                  className="group"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div
                    className={`
                      transition-all duration-300 rounded-full
                      ${index === currentSlide 
                        ? 'w-8 h-2 bg-[#f97316]' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full transition-all hover:scale-110 ${
                currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#f97316]" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full transition-all hover:scale-110 ${
                currentSlide === testimonials.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#f97316]" />
            </button>

            {/* Testimonial Card */}
            <div 
              className="overflow-hidden px-2"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative bg-gradient-to-br from-[#fff7ed] to-white p-5 rounded-xl border border-[#ffedd5] shadow-md">
                <div className="text-5xl text-[#f97316]/15 absolute top-2 right-4 font-serif leading-none">
                  "
                </div>
                <div className="flex gap-1 mb-3">
                  {Array(testimonials[currentSlide].rating || 5)
                    .fill(0)
                    .map((_, s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-[#f97316] fill-[#f97316]"
                      />
                    ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 relative z-10">
                  "{testimonials[currentSlide].text}"
                </p>
                <div className="border-t border-[#ffedd5] pt-3">
                  <p className="font-bold text-gray-900 text-base">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-xs text-[#f97316] font-medium">
                    {testimonials[currentSlide].company}
                  </p>
                  {testimonials[currentSlide].service && (
                    <span className="inline-block mt-2 px-2 py-1 bg-[#f97316]/10 text-[#ea580c] rounded text-xs">
                      {testimonials[currentSlide].service}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop View - Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-[#fff7ed] to-white p-5 sm:p-6 lg:p-7 rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#ffedd5] hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl text-[#f97316]/15 absolute top-2 sm:top-3 lg:top-4 right-3 sm:right-4 lg:right-6 font-serif leading-none">
                  "
                </div>
                <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3 lg:mb-4">
                  {Array(t.rating || 5)
                    .fill(0)
                    .map((_, s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-[#f97316] fill-[#f97316]"
                      />
                    ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 lg:mb-5 xl:mb-6 relative z-10 line-clamp-4 sm:line-clamp-5 lg:line-clamp-none">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs sm:text-sm text-[#f97316]">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Summary - Visible on both mobile and desktop */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f97316]">
              {stats.clients}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#003366]">
              {stats.projects}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f97316]">
              27+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}