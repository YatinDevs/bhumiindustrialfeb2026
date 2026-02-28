// app/terms-conditions/page.jsx
import { buildMetadata } from "@/utils/seoConfig";
import Link from "next/link";

export const metadata = buildMetadata("blog");

export default function TermsConditions() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms
              and Conditions...
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Services</h2>
            <p>
              Bhumi Industrial Consultant provides industrial and financial
              consulting services...
            </p>
          </section>

          {/* Add more sections */}
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
