// components/careers/CareerEnquiryForm.jsx
"use client";
import { useState, useEffect } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import axiosInstance from "@/services/api";

export default function CareerEnquiryForm() {
  const [mounted, setMounted] = useState(false);
  
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (serverError) setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.message.trim()) newErrors.message = "Please tell us about yourself";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setStatus("loading");
    setErrors({});
    setServerError("");

    try {
      const payload = {
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        position: form.position || "Not specified",
        experience: form.experience || "Not specified",
        message: form.message,
        type: "career_enquiry"
      };
      
      const response = await axiosInstance.post('/career-enquiries', payload);
      
      if (response.data.success) {
        setStatus("success");
      } else {
        setServerError(response.data.message || "Failed to submit enquiry");
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      
      if (error.response?.status === 422) {
        const backendErrors = error.response.data.errors;
        const formattedErrors = {};
        
        Object.keys(backendErrors).forEach(key => {
          formattedErrors[key] = backendErrors[key][0];
        });
        
        setErrors(formattedErrors);
        setServerError("Please check the form for errors");
      } else if (error.code === 'ERR_NETWORK') {
        setServerError("Cannot connect to server. Please check your connection.");
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
    }
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-[#f97316]" />
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-[#f0fdf4] rounded-xl border border-green-200 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
        <p className="text-gray-600 text-sm mb-4">
          Thank you for your interest. Our HR team will contact you soon.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              full_name: "",
              email: "",
              phone: "",
              position: "",
              experience: "",
              message: "",
            });
            setErrors({});
          }}
          className="px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium text-sm hover:bg-[#ea580c] transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-700">{serverError}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          name="full_name"
          type="text"
          required
          value={form.full_name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`w-full px-3 py-2 border rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white ${
            errors.full_name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.full_name && (
          <p className="mt-1 text-xs text-red-500">{errors.full_name}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={`w-full px-3 py-2 border rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full px-3 py-2 border rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position Interested In
          </label>
          <input
            name="position"
            type="text"
            value={form.position}
            onChange={handleChange}
            placeholder="e.g., Industrial Consultant"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>
          <input
            name="experience"
            type="text"
            value={form.experience}
            onChange={handleChange}
            placeholder="e.g., 2-5 years"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about yourself *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your experience, skills, and why you'd like to join us..."
          className={`w-full px-3 py-2 border rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-white resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Submit Enquiry
          </>
        )}
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        We'll respond within 48 hours.
      </p>
    </form>
  );
}