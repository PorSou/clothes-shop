import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container flex-1 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4 font-serif text-4xl font-bold text-center md:text-5xl">
            Contact Us
          </h1>
          <p className="mb-12 text-lg text-center text-gray-500">
            Have a question? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Left side - contact info */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-gray-500">support@stylehub.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">Address</h3>
                    <p className="text-gray-500">
                      123 Fashion Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* New item - business hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="mb-1 font-semibold">Business Hours</h3>
                    <p className="text-gray-500">
                      Monday – Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday: 10:00 AM – 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - contact form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 text-white transition bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
