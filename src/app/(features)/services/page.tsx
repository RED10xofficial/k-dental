import Link from "next/link";
import { BookNowButton } from "../../shared/components";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Cosmetic Services",
      description: "Transform your smile with our advanced cosmetic treatments",
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      services: [
        {
          name: "Digital Smile Designing",
          description:
            "Preview your new smile before treatment begins using advanced 3D technology and computer modeling for the perfect aesthetic outcome.",
          duration: "1-2 hours",
          complexity: "Advanced",
        },
        {
          name: "Laser Teeth Whitening",
          description:
            "Professional teeth whitening using laser technology for immediate, dramatic results that can lighten teeth up to 8 shades.",
          duration: "60-90 minutes",
          complexity: "Simple",
        },
        {
          name: "Veneers, Crowns and Bridges",
          description:
            "Custom-crafted porcelain restorations that provide natural-looking, durable solutions for damaged or aesthetically compromised teeth.",
          duration: "2-3 visits",
          complexity: "Moderate",
        },
        {
          name: "Tooth Coloured Fillings",
          description:
            "Mercury-free, aesthetic composite fillings that match your natural tooth color while providing excellent durability and strength.",
          duration: "30-60 minutes",
          complexity: "Simple",
        },
        {
          name: "Gummy Smile Correction",
          description:
            "Laser gum contouring to reduce excess gum tissue and create a balanced, beautiful smile proportion.",
          duration: "1-2 hours",
          complexity: "Moderate",
        },
        {
          name: "Tooth Jewellery",
          description:
            "Safe, removable dental gems and jewelry application for a unique, sparkling smile enhancement.",
          duration: "30 minutes",
          complexity: "Simple",
        },
      ],
    },
    {
      title: "Restorative Services",
      description: "Restore function and health to damaged or missing teeth",
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      services: [
        {
          name: "Dental Implants",
          description:
            "Titanium implants that serve as artificial tooth roots, providing permanent, natural-looking tooth replacement solutions.",
          duration: "3-6 months",
          complexity: "Advanced",
        },
        {
          name: "One Day Dentistry",
          description:
            "Complete dental restorations including crowns, bridges, and veneers designed and created in a single appointment using CEREC technology.",
          duration: "2-4 hours",
          complexity: "Moderate",
        },
        {
          name: "Full Mouth Rehabilitation",
          description:
            "Comprehensive treatment to restore all teeth, improving function, health, and aesthetics for patients with extensive dental problems.",
          duration: "3-6 months",
          complexity: "Complex",
        },
        {
          name: "Advanced Root Canal Treatment",
          description:
            "Microscopic endodontic therapy to save infected teeth using the latest rotary instruments and biocompatible materials.",
          duration: "1-3 visits",
          complexity: "Advanced",
        },
      ],
    },
    {
      title: "Surgical Services",
      description:
        "Specialized surgical procedures for complex dental conditions",
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      services: [
        {
          name: "Maxillo Facial Surgery",
          description:
            "Comprehensive surgical treatment for facial trauma, jaw deformities, TMJ disorders, and complex oral pathology.",
          duration: "2-4 hours",
          complexity: "Complex",
        },
        {
          name: "Cosmetic Jaw Surgery",
          description:
            "Orthognathic surgery to correct jaw alignment, improve facial aesthetics, and enhance both function and appearance.",
          duration: "3-5 hours",
          complexity: "Complex",
        },
        {
          name: "Tooth Extraction",
          description:
            "Gentle tooth removal procedures including simple extractions and complex surgical extractions with sedation options.",
          duration: "30-90 minutes",
          complexity: "Moderate",
        },
        {
          name: "TM Joint Treatments",
          description:
            "Comprehensive TMJ therapy including splints, physical therapy, and surgical interventions for jaw joint disorders.",
          duration: "Varies",
          complexity: "Advanced",
        },
      ],
    },
    {
      title: "Preventive & General Care",
      description: "Essential treatments to maintain optimal oral health",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      services: [
        {
          name: "Teeth Cleaning",
          description:
            "Professional dental hygiene including scaling, polishing, and fluoride treatment to prevent cavities and gum disease.",
          duration: "45-60 minutes",
          complexity: "Simple",
        },
        {
          name: "Gum Care",
          description:
            "Comprehensive periodontal therapy including deep cleaning, gum disease treatment, and maintenance programs.",
          duration: "1-2 hours",
          complexity: "Moderate",
        },
        {
          name: "Laser Dentistry",
          description:
            "Minimally invasive laser treatments for gum disease, cavity preparation, and soft tissue procedures with faster healing.",
          duration: "30-90 minutes",
          complexity: "Moderate",
        },
      ],
    },
    {
      title: "Orthodontic Services",
      description: "Straighten teeth and correct bite problems for all ages",
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
      services: [
        {
          name: "Clear Aligners",
          description:
            "Invisible orthodontic treatment using custom-made clear aligners to gradually straighten teeth without metal braces.",
          duration: "6-18 months",
          complexity: "Moderate",
        },
        {
          name: "Orthodontic Treatments",
          description:
            "Comprehensive orthodontic care including traditional braces, ceramic braces, and advanced alignment systems.",
          duration: "12-24 months",
          complexity: "Advanced",
        },
      ],
    },
    {
      title: "Specialized Care",
      description:
        "Targeted treatments for specific patient groups and conditions",
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
      services: [
        {
          name: "Pediatric Dental Care",
          description:
            "Specialized dental care for children including preventive treatments, behavior management, and early orthodontic intervention.",
          duration: "30-60 minutes",
          complexity: "Moderate",
        },
        {
          name: "Dental Care for Elderly",
          description:
            "Comprehensive dental care tailored for seniors including denture care, dry mouth management, and mobility accommodations.",
          duration: "45-90 minutes",
          complexity: "Moderate",
        },
      ],
    },
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Simple":
        return "bg-green-100 text-green-700";
      case "Moderate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-orange-100 text-orange-700";
      case "Complex":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Complete Dental Care
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Dental
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {" "}
              Services
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of dental services designed to keep
            your smile healthy, beautiful, and confident. From routine care to
            advanced procedures, we&apos;ve got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton variant="hero" size="large">
              Book Consultation
            </BookNowButton>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl text-pink-600 mb-4">
                  {category.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="group relative">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <div className="flex space-x-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(
                              service.complexity
                            )}`}
                          >
                            {service.complexity}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="w-4 h-4 mr-2"
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
                          {service.duration}
                        </div>
                        <BookNowButton
                          variant="minimal"
                          showIcon={false}
                          style={{ padding: "4px 0", height: "auto" }}
                        >
                          Book Now →
                        </BookNowButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">21+</div>
              <div className="text-pink-100">Services Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-pink-100">Happy Patients</div>
            </div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-pink-100">Success Rate</div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-pink-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation today and let our experts create a
            personalized treatment plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton variant="primary" size="large">
              Schedule Appointment
            </BookNowButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-pink-600 font-semibold rounded-full border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
            >
              Contact Us
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
