import React from "react";
import { useSelector } from "react-redux";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";

export default function CareersPage() {
  const theme = useSelector((state) => state.theme.mode);
  const isDark = theme === "dark";

  const openings = [
    {
      title: "Senior Fashion Buyer",
      department: "Merchandising",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "E-commerce Manager",
      department: "Digital",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Service Representative",
      department: "Support",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "Social Media Coordinator",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-50" : "bg-white text-gray-900"
      }`}
    >
      <main className="flex-1">
        {/* Hero Section */}
        <div
          className={`py-20 ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          } transition-colors duration-300`}
        >
          <div className="container px-4 mx-auto text-center">
            <h1
              className={`mb-4 font-serif text-4xl md:text-5xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Join Our Team
            </h1>
            <p
              className={`max-w-2xl mx-auto text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Help us shape the future of fashion retail. We're looking for
              passionate, creative individuals to join our growing team.
            </p>
          </div>
        </div>

        {/* Why Work Section */}
        <div className="container px-4 py-20 mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2
                className={`mb-8 font-serif text-3xl font-bold text-center ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Why Work at StyleHub?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: (
                      <TrendingUp className="w-10 h-10 mb-4 text-blue-500" />
                    ),
                    title: "Growth Opportunities",
                    desc: "We invest in our team's development with training programs, mentorship, and clear career paths.",
                  },
                  {
                    icon: <Heart className="w-10 h-10 mb-4 text-blue-500" />,
                    title: "Great Benefits",
                    desc: "Competitive salary, health insurance, employee discounts, and flexible work arrangements.",
                  },
                  {
                    icon: <Users className="w-10 h-10 mb-4 text-blue-500" />,
                    title: "Collaborative Culture",
                    desc: "Work with a diverse, talented team that values creativity, innovation, and mutual respect.",
                  },
                  {
                    icon: (
                      <Briefcase className="w-10 h-10 mb-4 text-blue-500" />
                    ),
                    title: "Work-Life Balance",
                    desc: "We believe in sustainable work practices with flexible schedules and generous time off.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-6 border rounded-lg transition-colors duration-300 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {item.icon}
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div>
              <h2
                className={`mb-8 font-serif text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Open Positions
              </h2>
              <div className="space-y-4">
                {openings.map((job, index) => (
                  <div
                    key={index}
                    className={`p-6 transition-colors border rounded-lg hover:border-blue-600 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {job.title}
                        </h3>
                        <div
                          className={`flex flex-wrap gap-3 text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded cursor-pointer hover:bg-blue-700">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Section */}
            <div
              className={`p-8 text-center rounded-lg transition-colors duration-300 ${
                isDark ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <h2
                className={`mb-4 font-serif text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Don't See the Right Role?
              </h2>
              <p
                className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                We're always looking for talented individuals. Send us your
                resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="px-6 py-3 text-white transition-colors bg-blue-600 rounded cursor-pointer hover:bg-blue-700">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
