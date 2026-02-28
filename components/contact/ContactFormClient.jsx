// components/contact/ContactFormClient.jsx
"use client";
import { useState, useEffect } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import axiosInstance from "@/services/api";
import { servicesList, citiesList } from "@/lib/data";

export default function ContactFormClient({ defaultLocation = "Mumbai" }) {
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferred_location: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // After mounting, we can set the default location
  useEffect(() => {
    setMounted(true);
    setForm(prev => ({
      ...prev,
      preferred_location: defaultLocation
    }));
  }, [defaultLocation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (serverError) setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) newErrors.name = "Full name is required";

    // Phone validation
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
    }

    // Email validation (optional but must be valid if provided)
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Service validation
    if (!form.service) newErrors.service = "Please select a service";

    // Location validation (only after mounted to avoid hydration issues)
    if (mounted && !form.preferred_location) {
      newErrors.preferred_location = "Please select a location";
    }

    // Message validation
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to top of form to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setStatus("loading");
    setErrors({});
    setServerError("");

    try {
      // Map frontend field names to backend field names
      const payload = {
        full_name: form.name,
        email: form.email,
        phone: form.phone,
        preferred_location: form.preferred_location,
        subject: form.service,
        message: form.message,
      };

      console.log("Sending enquiry to server...");

      const response = await axiosInstance.post('/enquiries', payload);

      if (response.data.success) {
        setStatus("success");
        // Reset form after successful submission
        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          preferred_location: defaultLocation,
          message: "",
        });
      } else {
        setServerError(response.data.message || "Failed to submit enquiry. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");

      // Handle different types of errors
      if (error.response?.status === 422) {
        // Validation errors from backend
        const backendErrors = error.response.data.errors;
        const formattedErrors = {};

        Object.keys(backendErrors).forEach(key => {
          if (key === 'full_name') formattedErrors.name = backendErrors[key][0];
          else if (key === 'subject') formattedErrors.service = backendErrors[key][0];
          else formattedErrors[key] = backendErrors[key][0];
        });

        setErrors(formattedErrors);
        setServerError("Please check the form for errors");
      } else if (error.code === 'ERR_NETWORK') {
        setServerError(
          "Cannot connect to server. Please check:\n" +
          "1. Your internet connection\n" +
          "2. The server is running\n" +
          "3. Try again in a few moments"
        );
      } else if (error.response?.status === 429) {
        setServerError("Too many requests. Please wait a few minutes before trying again.");
      } else if (error.response?.status === 500) {
        setServerError("Server error. Our team has been notified. Please try again later or call us directly.");
      } else {
        setServerError(error.response?.data?.message || "An unexpected error occurred. Please try again.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-[#f0fdf4] rounded-2xl border border-green-200 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6 max-w-md">
          Thank you for reaching out to Bhumi Industrial Consultant.
          {form.preferred_location === "Nashik"
            ? " Milind Rajhans will call you back within 2 business hours."
            : ` Our ${form.preferred_location} office team will contact you within 2 business hours.`}
        </p>
        <div className="mt-4  ">
          <p className="text-xs text-gray-500">
            For immediate assistance, call us at:{' '}
            <a href="tel:+919096099960" className="text-[#f97316] font-medium">+91 90960 99960</a>
            {' / '}
            <a href="tel:+919822372070" className="text-[#f97316] font-medium">+91 98223 72070</a>
          </p>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              phone: "",
              email: "",
              service: "",
              preferred_location: defaultLocation,
              message: "",
            });
            setErrors({});
          }}
          className="px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Alert */}
      {serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-700 whitespace-pre-line">
            <p className="font-medium mb-1">Error submitting form:</p>
            <p>{serverError}</p>
            <p className="mt-2 text-xs">
              Alternatively, call us directly: <a href="tel:+919822242170" className="font-bold underline">+91 9822242170</a>
            </p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 border rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all bg-gray-50 focus:bg-white ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 border rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all bg-gray-50 focus:bg-white ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email Address <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 border rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all bg-gray-50 focus:bg-white ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
            }`}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.email}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Service Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all bg-gray-50 focus:bg-white ${errors.service ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            aria-invalid={errors.service ? "true" : "false"}
          >
            <option value="">Select a service...</option>
            {servicesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.service}
            </p>
          )}
        </div>

        {/* Location Dropdown */}
        <div>
          <label
            htmlFor="preferred_location"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Preferred Location <span className="text-red-500">*</span>
          </label>
          <select
            id="preferred_location"
            name="preferred_location"
            required
            value={form.preferred_location}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all bg-gray-50 focus:bg-white ${errors.preferred_location ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            aria-invalid={errors.preferred_location ? "true" : "false"}
          >
            <option value="">Select location...</option>
            {citiesList.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          {errors.preferred_location && mounted && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.preferred_location}
            </p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe your requirements in detail. For example: Need assistance with MIDC NOC for a new factory in Ambad MIDC..."
          className={`w-full px-4 py-3 border rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all bg-gray-50 focus:bg-white resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'
            }`}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
        <p className="mt-1 text-xs text-gray-400 text-right">
          {form.message.length} characters (minimum 10)
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-xl font-bold text-base hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message — Get Free Consultation
          </>
        )}
      </button>
    </form>
  );
}