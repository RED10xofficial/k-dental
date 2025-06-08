import Link from "next/link";
import { BookNowButton } from "../../shared/components";

export default function FacilitiesPage() {
  const facilities = [
    {
      name: "One Day Dentistry – CEREC",
      description:
        "State-of-the-art CEREC technology allows us to design, mill, and place ceramic restorations in a single visit, eliminating the need for multiple appointments and temporary crowns.",
      category: "Advanced Technology",
      features: [
        "Same-day crowns",
        "3D design",
        "Ceramic milling",
        "No temporaries",
      ],
      icon: "⚡",
      highlight: true,
    },
    {
      name: "CBCT - 3D Scan",
      description:
        "Cone Beam Computed Tomography provides detailed 3D images of teeth, bones, and soft tissues, enabling precise diagnosis and treatment planning for complex procedures.",
      category: "Diagnostic Technology",
      features: [
        "3D imaging",
        "Low radiation",
        "Precise diagnosis",
        "Implant planning",
      ],
      icon: "🔬",
      highlight: true,
    },
    {
      name: "Digital Treatment Planning",
      description:
        "Advanced software systems for comprehensive treatment planning, allowing patients to visualize results before treatment begins and ensuring predictable outcomes.",
      category: "Digital Solutions",
      features: [
        "Treatment simulation",
        "Patient education",
        "Predictable results",
        "Enhanced communication",
      ],
      icon: "💻",
      highlight: false,
    },
    {
      name: "High-End Dental Operatories",
      description:
        "Luxurious, modern treatment rooms equipped with the latest technology, designed for patient comfort and optimal clinical outcomes in a relaxing environment.",
      category: "Patient Comfort",
      features: [
        "Luxury design",
        "Latest equipment",
        "Patient comfort",
        "Optimal lighting",
      ],
      icon: "🏥",
      highlight: false,
    },
    {
      name: "Surgical Operatory",
      description:
        "Dedicated sterile surgical suite with advanced equipment for complex oral and maxillofacial procedures, ensuring the highest standards of surgical care.",
      category: "Surgical Excellence",
      features: [
        "Sterile environment",
        "Advanced equipment",
        "Complex procedures",
        "Safety protocols",
      ],
      icon: "⚕️",
      highlight: true,
    },
    {
      name: "Conscious Sedation",
      description:
        "Safe, comfortable sedation options including nitrous oxide and IV sedation to help anxious patients relax and have a positive dental experience.",
      category: "Patient Comfort",
      features: [
        "Multiple options",
        "Safe procedures",
        "Anxiety relief",
        "Comfortable experience",
      ],
      icon: "😌",
      highlight: false,
    },
    {
      name: "Digital Records",
      description:
        "Comprehensive electronic health records system for secure storage, easy access, and seamless sharing of patient information across our healthcare team.",
      category: "Digital Solutions",
      features: [
        "Secure storage",
        "Easy access",
        "Team collaboration",
        "Privacy protection",
      ],
      icon: "📋",
      highlight: false,
    },
    {
      name: "Digital Radiographs",
      description:
        "Advanced digital X-ray technology with significantly reduced radiation exposure, instant image processing, and enhanced diagnostic capabilities.",
      category: "Diagnostic Technology",
      features: [
        "Reduced radiation",
        "Instant results",
        "Enhanced quality",
        "Environmental friendly",
      ],
      icon: "📸",
      highlight: false,
    },
    {
      name: "Intra Oral Scanners",
      description:
        "Cutting-edge 3D intraoral scanners that eliminate the need for messy impressions while providing precise digital models for restorations and orthodontics.",
      category: "Advanced Technology",
      features: [
        "No impressions",
        "3D precision",
        "Patient comfort",
        "Accurate models",
      ],
      icon: "🦷",
      highlight: true,
    },
    {
      name: "Surgical Microscope",
      description:
        "High-powered surgical microscope for enhanced precision during endodontic and surgical procedures, ensuring optimal clinical outcomes with minimal tissue trauma.",
      category: "Surgical Excellence",
      features: [
        "Enhanced precision",
        "Minimal trauma",
        "Better outcomes",
        "Detailed visualization",
      ],
      icon: "🔍",
      highlight: false,
    },
    {
      name: "3D Printer",
      description:
        "In-house 3D printing capabilities for creating surgical guides, models, and temporary restorations, enhancing treatment precision and reducing wait times.",
      category: "Advanced Technology",
      features: [
        "In-house production",
        "Surgical guides",
        "Reduced wait times",
        "Enhanced precision",
      ],
      icon: "🖨️",
      highlight: false,
    },
    {
      name: "Pharmacy",
      description:
        "On-site pharmacy providing convenient access to prescribed medications, ensuring patients receive proper post-treatment care without additional trips.",
      category: "Patient Convenience",
      features: [
        "On-site access",
        "Convenient service",
        "Proper medications",
        "No additional trips",
      ],
      icon: "💊",
      highlight: false,
    },
    {
      name: "Medical Team",
      description:
        "Highly trained, experienced dental professionals including specialists, hygienists, and support staff committed to providing exceptional patient care.",
      category: "Professional Excellence",
      features: [
        "Experienced specialists",
        "Continuous training",
        "Team approach",
        "Exceptional care",
      ],
      icon: "👥",
      highlight: false,
    },
    {
      name: "Library",
      description:
        "Comprehensive dental library with latest research, journals, and educational materials supporting continuous learning and evidence-based treatment approaches.",
      category: "Professional Excellence",
      features: [
        "Latest research",
        "Educational materials",
        "Evidence-based care",
        "Continuous learning",
      ],
      icon: "📚",
      highlight: false,
    },
    {
      name: "Conference Hall",
      description:
        "Modern conference facility for patient education, team meetings, and continuing education programs, fostering communication and professional development.",
      category: "Education & Communication",
      features: [
        "Patient education",
        "Team meetings",
        "Professional development",
        "Modern facility",
      ],
      icon: "🎯",
      highlight: false,
    },
    {
      name: "Green Dentistry",
      description:
        "Environmentally conscious practices including digital records, energy-efficient equipment, and sustainable materials, reducing our environmental footprint.",
      category: "Environmental Responsibility",
      features: [
        "Eco-friendly practices",
        "Energy efficient",
        "Sustainable materials",
        "Reduced footprint",
      ],
      icon: "🌱",
      highlight: false,
    },
  ];

  const categories = [
    "Advanced Technology",
    "Diagnostic Technology",
    "Digital Solutions",
    "Patient Comfort",
    "Surgical Excellence",
    "Patient Convenience",
    "Professional Excellence",
    "Education & Communication",
    "Environmental Responsibility",
  ];

  const highlightedFacilities = facilities.filter(
    (facility) => facility.highlight
  );
  const regularFacilities = facilities.filter(
    (facility) => !facility.highlight
  );

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
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            State-of-the-Art Technology
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {" "}
              Facilities
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience dental care in our cutting-edge facility equipped with
            the latest technology, designed for your comfort, safety, and
            optimal treatment outcomes.
          </p>

          <BookNowButton variant="hero" size="large">
            Schedule a Tour
          </BookNowButton>
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technology Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most advanced technologies that set us apart in providing
              exceptional dental care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {highlightedFacilities.map((facility, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {facility.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                          {facility.name}
                        </h3>
                        <span className="px-3 py-1 bg-pink-200 text-pink-700 text-xs font-semibold rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {facility.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-white text-gray-700 text-xs rounded-lg border border-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Facilities Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Facility Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure designed to provide the highest
              quality dental care in a comfortable environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularFacilities.map((facility, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {facility.icon}
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {facility.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-pink-600 transition-colors duration-300">
                    {facility.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="space-y-1">
                    {facility.features
                      .slice(0, 2)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-gray-500"
                        >
                          <svg
                            className="w-3 h-3 text-pink-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Facility Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive infrastructure spans multiple categories to
              ensure complete patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryFacilities = facilities.filter(
                (f) => f.category === category
              );
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {category}
                  </h3>
                  <div className="text-sm text-gray-600 mb-3">
                    {categoryFacilities.length}{" "}
                    {categoryFacilities.length === 1
                      ? "facility"
                      : "facilities"}
                  </div>
                  <div className="space-y-2">
                    {categoryFacilities.map((facility, facilityIndex) => (
                      <div
                        key={facilityIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="mr-2">{facility.icon}</span>
                        {facility.name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience Our Facility
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Take a virtual tour or schedule an in-person visit to see our
              state-of-the-art facilities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link
              href="/virtual-tour"
              className="inline-flex items-center justify-center px-8 py-4 text-pink-600 font-semibold rounded-full bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Virtual Tour
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2-14l4 4-4 4M5 8l4-4-4-4"
                />
              </svg>
            </Link> */}
            <BookNowButton variant="ghost">Schedule Visit</BookNowButton>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">16</div>
              <div className="text-pink-100 text-sm">Advanced Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-pink-100 text-sm">Digital Records</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-pink-100 text-sm">Available Care</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Green</div>
              <div className="text-pink-100 text-sm">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
