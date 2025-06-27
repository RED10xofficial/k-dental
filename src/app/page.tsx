import Link from "next/link";
import { BookNowButton } from "./shared/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Modern Design */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Award Winning Dental Care
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight ">
                Your Perfect
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {" "}
                  Smile
                </span>
                <br />
                Starts Here
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience world-class dental care with our state-of-the-art
                technology and compassionate team. Transform your smile and
                boost your confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BookNowButton variant="hero" size="large">
                  Book Consultation
                </BookNowButton>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
                >
                  Explore Services
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start mt-12 space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">15K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src="/images/hero.webp"
                    alt="Modern Dental Office"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        24/7 Emergency Care
                      </div>
                      <div className="text-xs text-gray-600">
                        Always here for you
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KIA Dental?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with personalized care to
              deliver exceptional dental experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                title: "Award-Winning Care",
                description:
                  "Recognized for excellence in dental care and patient satisfaction",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
                title: "Advanced Technology",
                description:
                  "State-of-the-art equipment including 3D imaging and laser dentistry",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                title: "Expert Specialists",
                description:
                  "Board-certified dentists with decades of combined experience",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Same-Day Treatment",
                description:
                  "Emergency care and many procedures completed in a single visit",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                ),
                title: "Affordable Plans",
                description:
                  "Flexible payment options and insurance coverage accepted",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
                title: "5-Star Experience",
                description:
                  "Luxurious amenities and personalized attention for every patient",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-pink-50 border-2 border-pink-200 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:border-pink-400 group-hover:bg-pink-100 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-pink-25 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Our Services
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Dental
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                  {" "}
                  Services
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                From routine care to complex procedures, we offer a complete
                range of dental services designed to keep your smile healthy and
                beautiful.
              </p>

              <div className="grid gap-6">
                {[
                  {
                    title: "Dental Implants",
                    description:
                      "Permanent tooth replacement solutions with natural look and feel",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Digital Smile Designing",
                    description:
                      "Advanced technology to preview and design your perfect smile",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Laser Dentistry",
                    description:
                      "Minimally invasive treatments with faster healing and less discomfort",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Clear Aligners",
                    description:
                      "Invisible orthodontic treatment for straight teeth without metal braces",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                ].map((service, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="w-14 h-14 bg-pink-50 border-2 border-pink-200 rounded-xl flex items-center justify-center flex-shrink-0 text-pink-600 group-hover:scale-110 group-hover:border-pink-400 group-hover:bg-pink-100 transition-all duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-pink-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-10">
                <Link
                  href="/services"
                  className="group inline-flex items-center px-6 py-3 text-pink-600 font-semibold rounded-full border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
                >
                  View All Services
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Services Dashboard - Pink & White Theme */}
            <div className="relative order-1 lg:order-2">
              <div className="space-y-6">
                {/* Top Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="relative">
                      <div className="text-3xl font-bold">21+</div>
                      <div className="text-pink-100 text-sm">Services</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-pink-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 bg-pink-50 rounded-full"></div>
                    <div className="relative">
                      <div className="text-3xl font-bold text-pink-600">
                        98%
                      </div>
                      <div className="text-gray-600 text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Main Services Dashboard */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Service Categories
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        All Available
                      </span>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-pink-50 rounded-xl border border-pink-100 group hover:bg-pink-100 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs text-pink-600 font-semibold">
                          POPULAR
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Cosmetic Care
                      </div>
                      <div className="text-xs text-gray-600">7 Services</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs text-gray-600 font-semibold">
                          ESSENTIAL
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Restorative
                      </div>
                      <div className="text-xs text-gray-600">8 Services</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs text-gray-600 font-semibold">
                          ROUTINE
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Preventive
                      </div>
                      <div className="text-xs text-gray-600">4 Services</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs text-gray-600 font-semibold">
                          SPECIAL
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Specialized
                      </div>
                      <div className="text-xs text-gray-600">2 Services</div>
                    </div>
                  </div>

                  {/* Patient Metrics */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Patient Satisfaction
                        </span>
                        <span className="text-sm text-gray-600">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-2 rounded-full w-[98%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Treatment Success
                        </span>
                        <span className="text-sm text-gray-600">96%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-300 to-pink-400 h-2 rounded-full w-[96%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex space-x-3">
                    <Link
                      href="/services"
                      className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300"
                    >
                      Browse Services
                    </Link>
                    <BookNowButton
                      variant="outline"
                      size="large"
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Bottom Summary Card */}
                <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold">
                          Complete Dental Care
                        </h4>
                        <p className="text-pink-100 text-sm">
                          One-stop solution for all your dental needs
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-xl font-bold">15K+</div>
                        <div className="text-xs text-pink-100">
                          Happy Patients
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">20+</div>
                        <div className="text-xs text-pink-100">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">21</div>
                        <div className="text-xs text-pink-100">Services</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of dental professionals is dedicated to
              providing you with the highest quality care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sunny Sancheti",
                specialization: "Digital Expert & Implantologist",
                image: "/images/doctors/sunny.jpeg",
                description:
                  "Implantologist & Smilemakeover / Prosthetic Expert",
              },
              {
                name: "Dr. Radhika Jadhav",
                specialization: "Endodontist & Implantologist",
                image: "/images/doctors/radhika.jpg",
                description: "ROOT CANAL & Smile Expert",
              },
              {
                name: "Dr. Abdul Hameed",
                specialization: "Maxillofacial Surgeon",
                image: "/images/doctors/abdul_hameed.jpeg",
                description:
                  "Dental & Craniofacial Reconstruction | TMJ & Orthognathic Surgery Expert",
              },
              {
                name: "Dr. Rachna Darak",
                specialization: "MDS Orthodontics",
                image: "/images/doctors/rachna.jpeg",
                description: "Specialized in aligners",
              },
            ].map((doctor, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">
                      <div className="text-sm opacity-90">
                        {doctor.description}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All Team Button */}
          <div className="text-center mt-12">
            <Link
              href="/our-team"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Show All Team
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who have transformed their smiles
              with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Martinez",
                location: "Detroit, MI",
                rating: 5,
                text: "Absolutely incredible experience! Dr. Johnson and her team made me feel so comfortable during my smile makeover. The results exceeded my expectations!",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
              },
              {
                name: "Robert Thompson",
                location: "Birmingham, MI",
                rating: 5,
                text: "I was terrified of dentists, but KIA Dental completely changed my perspective. Professional, gentle, and the technology they use is amazing!",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
              },
              {
                name: "Maria Garcia",
                location: "Royal Oak, MI",
                rating: 5,
                text: "Got my dental implants here and couldn't be happier. The process was smooth, painless, and the staff was incredibly supportive throughout.",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied patients who have discovered the
            difference exceptional dental care can make. Your perfect smile is
            just one appointment away.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <BookNowButton
              variant="rounded"
              size="large"
              className="!bg-white !text-black"
            />

            <div className="flex items-center text-white">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-lg font-semibold">
                Call Now: (313) 555-SMILE
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold">24/7 Emergency</div>
              <div className="text-white/80">
                Always available when you need us
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold">Insurance Accepted</div>
              <div className="text-white/80">Most major plans welcome</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold">Convenient Location</div>
              <div className="text-white/80">Easy parking & accessibility</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
