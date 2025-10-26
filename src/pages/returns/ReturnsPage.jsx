import React from "react";
import { useSelector } from "react-redux";
import { RotateCcw, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function ReturnsPage() {
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
          <h1 className="mb-4 font-serif text-4xl font-bold text-center md:text-5xl">
            Returns & Exchanges
          </h1>
          <p
            className={`mb-12 text-lg text-center ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            We want you to love your purchase. If you're not satisfied, we're
            here to help.
          </p>

          <div className="space-y-12">
            {/* Return Policy Highlight */}
            <div
              className={`p-8 text-center border rounded-lg ${
                isDark
                  ? "bg-blue-900 border-blue-700"
                  : "bg-blue-50 border-blue-200"
              }`}
            >
              <RotateCcw
                className={`w-12 h-12 mx-auto mb-4 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h2 className="mb-2 font-serif text-2xl font-bold">
                30-Day Return Policy
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-500"}>
                Return any item within 30 days of delivery for a full refund or
                exchange.
              </p>
            </div>

            {/* Return Process */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold">
                Return Process
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Contact Us",
                    desc: "Email support@stylehub.com with your order number and reason for return.",
                  },
                  {
                    step: 2,
                    title: "Receive Return Label",
                    desc: "We'll send you a prepaid return shipping label within 24 hours.",
                  },
                  {
                    step: 3,
                    title: "Ship Your Return",
                    desc: "Pack the item securely and drop it off at any carrier location.",
                  },
                  {
                    step: 4,
                    title: "Get Your Refund",
                    desc: "Refunds are processed within 5-7 business days of receiving your return.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold rounded-full text-white ${
                        isDark ? "bg-blue-500" : "bg-blue-600"
                      }`}
                    >
                      {step}
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{title}</h3>
                      <p className={isDark ? "text-gray-300" : "text-gray-500"}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Return Guidelines */}
            <div
              className={`pt-8 border-t ${
                isDark ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <h2 className="mb-6 font-serif text-2xl font-bold">
                Return Guidelines
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  {[
                    "Items must be unworn and unwashed",
                    "Original tags must be attached",
                    "Items in original packaging",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    "Final sale items cannot be returned",
                    "Swimwear and intimates (hygiene reasons)",
                    "Items returned after 30 days",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Need Help Section */}
            <div
              className={`p-6 rounded-lg ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <div className="flex items-start gap-4">
                <AlertCircle
                  className={`flex-shrink-0 w-6 h-6 mt-1 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <div>
                  <h3 className="mb-2 font-semibold">Need Help?</h3>
                  <p className={isDark ? "text-gray-300" : "text-gray-500"}>
                    If you have any questions about returns or exchanges, our
                    customer service team is here to help. Contact us at
                    support@stylehub.com or call +1 (555) 123-4567.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
