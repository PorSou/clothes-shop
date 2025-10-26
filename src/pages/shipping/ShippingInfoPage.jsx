import React from "react";
import { Truck, Package, Globe, Clock } from "lucide-react";

export default function ShippingInfoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container flex-1 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4 font-serif text-4xl font-bold text-center md:text-5xl">
            Shipping Information
          </h1>
          <p className="mb-12 text-lg text-center text-gray-500">
            Fast, reliable shipping to get your fashion finds to you quickly.
          </p>

          <div className="space-y-12">
            {/* Shipping Methods */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-6 border rounded-lg">
                <Truck className="w-10 h-10 mb-4 text-blue-600" />
                <h2 className="mb-3 font-serif text-2xl font-bold">
                  Standard Shipping
                </h2>
                <p className="mb-4 text-gray-500">
                  Delivery in 5-7 business days
                </p>
                <p className="font-semibold">
                  $5.99 or FREE on orders over $100
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <Package className="w-10 h-10 mb-4 text-blue-600" />
                <h2 className="mb-3 font-serif text-2xl font-bold">
                  Express Shipping
                </h2>
                <p className="mb-4 text-gray-500">
                  Delivery in 2-3 business days
                </p>
                <p className="font-semibold">$14.99</p>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="pt-8 border-t">
              <h2 className="mb-6 font-serif text-2xl font-bold">
                Shipping Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Globe className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-2 font-semibold">
                      International Shipping
                    </h3>
                    <p className="text-gray-500">
                      We ship to over 100 countries worldwide. International
                      shipping times vary by location, typically 7-14 business
                      days. Customs fees may apply.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-2 font-semibold">Processing Time</h3>
                    <p className="text-gray-500">
                      Orders are processed within 1-2 business days. You'll
                      receive a tracking number via email once your order ships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Package className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-2 font-semibold">Order Tracking</h3>
                    <p className="text-gray-500">
                      Track your order anytime using the tracking number
                      provided in your shipping confirmation email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
