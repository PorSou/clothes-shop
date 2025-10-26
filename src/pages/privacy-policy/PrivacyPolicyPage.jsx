import React from "react";
import { useSelector } from "react-redux";

export default function PrivacyPolicyPage() {
  const theme = useSelector((state) => state.theme.mode);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-50" : "bg-white text-gray-900"
      }`}
    >
      <main className="container flex-1 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>
          <p className={isDark ? "text-gray-400 mb-8" : "text-gray-500 mb-8"}>
            Last updated: October 2025
          </p>

          <div className="space-y-8 prose max-w-none">
            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Introduction
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                At StyleHub, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or make a purchase from
                us.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Information We Collect
              </h2>
              <p
                className={isDark ? "text-gray-300 mb-4" : "text-gray-600 mb-4"}
              >
                We collect information that you provide directly to us,
                including:
              </p>
              <ul
                className={
                  isDark
                    ? "list-disc list-inside space-y-2 text-gray-300 ml-4"
                    : "list-disc list-inside space-y-2 text-gray-600 ml-4"
                }
              >
                <li>Name, email address, and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>
                  Payment information (processed securely through our payment
                  providers)
                </li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                How We Use Your Information
              </h2>
              <p
                className={isDark ? "text-gray-300 mb-4" : "text-gray-600 mb-4"}
              >
                We use the information we collect to:
              </p>
              <ul
                className={
                  isDark
                    ? "list-disc list-inside space-y-2 text-gray-300 ml-4"
                    : "list-disc list-inside space-y-2 text-gray-600 ml-4"
                }
              >
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and customer service</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Information Sharing
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                We do not sell or rent your personal information to third
                parties. We may share your information with:
              </p>
              <ul
                className={
                  isDark
                    ? "list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4"
                    : "list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4"
                }
              >
                <li>
                  Service providers who help us operate our business (shipping,
                  payment processing, etc.)
                </li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Cookies and Tracking
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                We use cookies and similar tracking technologies to enhance your
                browsing experience, analyze site traffic, and understand where
                our visitors are coming from. You can control cookies through
                your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Data Security
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                We implement appropriate technical and organizational measures
                to protect your personal information. However, no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Your Rights
              </h2>
              <p
                className={isDark ? "text-gray-300 mb-4" : "text-gray-600 mb-4"}
              >
                You have the right to:
              </p>
              <ul
                className={
                  isDark
                    ? "list-disc list-inside space-y-2 text-gray-300 ml-4"
                    : "list-disc list-inside space-y-2 text-gray-600 ml-4"
                }
              >
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Children's Privacy
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                Our website is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Changes to This Policy
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl font-bold">Contact Us</h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div
                className={isDark ? "mt-4 text-gray-300" : "mt-4 text-gray-600"}
              >
                <p>Email: privacy@stylehub.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Fashion Street, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
