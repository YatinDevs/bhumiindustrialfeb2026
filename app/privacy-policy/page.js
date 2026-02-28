// app/privacy-policy/page.jsx
import { buildMetadata } from "@/utils/seoConfig";
import Link from "next/link";

export const metadata = buildMetadata("privacy"); // Add to seoConfig.js

export default function PrivacyPolicy() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you fill out contact forms, call us, or communicate via email...
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to respond to your inquiries,
              provide services, and improve our website...
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-[#f97316] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
