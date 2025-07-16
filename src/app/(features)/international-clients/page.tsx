import { BookNowButton } from "../../shared/components";

export default function InternationalClientsPage() {
  const whyChooseReasons = [
    {
      title: "Exceptional Cost Savings",
      description:
        "Save up to 90% on dental treatments compared to US and European prices, with medicine costs significantly lower as well.",
      icon: "💰",
      highlight: "Up to 90% Savings",
    },
    {
      title: "Zero Waiting Time",
      description:
        "Hassle-free pre-booked appointments with our large team of specialists ensuring immediate treatment availability.",
      icon: "⏰",
      highlight: "Instant Availability",
    },
    {
      title: "Virtual Consultations",
      description:
        "Online meetings before your travel to discuss treatment plans and help you schedule your trip accordingly.",
      icon: "💻",
      highlight: "Pre-Travel Planning",
    },
    {
      title: "Comprehensive Care",
      description:
        "All dental specialists under one roof with advanced diagnostic tools and digital treatment modalities.",
      icon: "🏥",
      highlight: "Complete Solutions",
    },
    {
      title: "Global Communication",
      description:
        "All doctors are fluent in English with multilingual support available to ensure clear communication.",
      icon: "🌍",
      highlight: "Language Support",
    },
    {
      title: "International Standards",
      description:
        "Foolproof sterilization protocols and strict safety measures preventing any cross-contamination.",
      icon: "🛡️",
      highlight: "Safety Assured",
    },
  ];

  const treatments = [
    {
      name: "Same-Day Implants",
      duration: "Single Visit",
      savings: "85% Less",
    },
    {
      name: "Root Canal Treatment",
      duration: "1 Day",
      savings: "80% Less",
    },
    {
      name: "Crowns & Bridges",
      duration: "Same Day",
      savings: "90% Less",
    },
    {
      name: "Full Mouth Rehabilitation",
      duration: "1-2 Weeks",
      savings: "85% Less",
    },
  ];

  const accommodationFeatures = [
    "5-Star Hotel Partnerships",
    "Business & Luxury Stays",
    "Prime Location Access",
    "Pune's Cultural Capital",
    "World-Class Accommodation",
    "Airport & Transportation",
  ];

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                Dental Tourism Excellence
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Traveling Miles for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {" "}
                  Great Smiles
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class dental care in Pune, India&apos;s
                cultural capital and the Oxford of the East. Combine your dental
                treatment with an unforgettable cultural experience while saving
                up to 90% on treatment costs compared to US and European prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookNowButton variant="hero" size="large">
                  Schedule Virtual Consultation
                </BookNowButton>
                {/* <BookNowButton variant="secondary" size="large">
                  Get Treatment Plan
                </BookNowButton> */}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 border border-pink-200">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      25+
                    </div>
                    <div className="text-gray-600 text-sm">
                      Years Serving International Clients
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      90%
                    </div>
                    <div className="text-gray-600 text-sm">
                      Cost Savings Compared to US/EU
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600 text-sm">
                      International Patient Support
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600 text-sm">
                      International Standards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dental Tourism with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining exceptional dental care with the vibrant energy of Pune
              - experience premium treatment while exploring India&apos;s
              cultural capital and educational hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <span className="px-3 py-1 bg-pink-200 text-pink-700 text-xs font-semibold rounded-full">
                      {reason.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-pink-600 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-center">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Treatment Cost Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the same international quality treatments at a fraction
              of the cost. Use your savings for an amazing Pune experience!
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">
                      Treatment
                    </th>
                    <th className="text-center py-4 px-6 text-gray-900 font-semibold">
                      Duration
                    </th>
                    <th className="text-center py-4 px-6 text-gray-900 font-semibold">
                      Cost Savings
                    </th>
                    {/* <th className="text-center py-4 px-6 text-gray-900 font-semibold">
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {treatments.map((treatment, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-pink-25 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {treatment.name}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {treatment.duration}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                          {treatment.savings}
                        </span>
                      </td>
                      {/* <td className="py-4 px-6 text-center">
                        <Link
                          href={`/consultation?treatment=${encodeURIComponent(
                            treatment.name
                          )}`}
                          className="text-pink-600 hover:text-pink-700 font-medium text-sm"
                        >
                          Get Quote →
                        </Link>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold text-lg shadow-lg">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              Save Thousands of Dollars + Enjoy a Vacation!
            </div>
          </div>
        </div>
      </section>

      {/* Journey Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Dental Tourism Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless experience from consultation to recovery, designed
              specifically for international patients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Virtual Consultation",
                description:
                  "Online meeting to discuss your treatment needs and create a personalized plan.",
              },
              {
                step: "02",
                title: "Travel Planning",
                description:
                  "We help coordinate your travel dates, accommodation, and treatment schedule.",
              },
              {
                step: "03",
                title: "Treatment & Tourism",
                description:
                  "Receive world-class treatment while exploring the vibrant attractions of Pune.",
              },
              {
                step: "04",
                title: "Follow-up Care",
                description:
                  "Continued support and follow-up consultations even after you return home.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation & Tourism */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Stay & Explore Pune
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Pune, India&apos;s cultural capital and the Oxford of the East,
                offers world-class educational institutions, shopping, and
                dining experiences alongside premium accommodation options for
                your comfortable stay.
              </p>

              <div className="space-y-4 mb-8">
                {accommodationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-pink-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* <Link
                href="/accommodation"
                className="inline-flex items-center px-6 py-3 text-pink-600 font-semibold rounded-full border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
              >
                View Accommodation Options
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
              </Link> */}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Treatment + Vacation Package
                </h3>
                <p className="text-gray-600">
                  All-inclusive experience for international patients
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Dental Treatment</span>
                  <span className="font-semibold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Hotel Accommodation</span>
                  <span className="font-semibold text-gray-900">
                    5-Star Options
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Airport Transfers</span>
                  <span className="font-semibold text-gray-900">
                    Complimentary
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Tourism Support</span>
                  <span className="font-semibold text-gray-900">Available</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">24/7 Patient Care</span>
                  <span className="font-semibold text-pink-600">
                    Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              International Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest international standards with cutting-edge
              technology and partnerships with leading dental equipment
              manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dentsply Sirona",
                type: "Technology Partner",
                icon: "🔬",
              },
              { name: "Megagen", type: "Implant Systems", icon: "🦷" },
              {
                name: "International Standards",
                type: "Quality Assured",
                icon: "🏆",
              },
              {
                name: "Sterilization Protocols",
                type: "Safety First",
                icon: "🛡️",
              },
            ].map((standard, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 border border-pink-200 group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {standard.name}
                </h3>
                <p className="text-gray-600 text-sm">{standard.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Dental Tourism Journey?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Schedule a virtual consultation today and discover how you can
              save thousands while experiencing the rich culture of Pune, India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <BookNowButton variant="ghost" size="large">
              Book Virtual Consultation
            </BookNowButton>
            <BookNowButton variant="ghost" size="large">
              Get Treatment Quote
            </BookNowButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="text-pink-100 text-sm">Virtual Consultation</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">90%</div>
              <div className="text-pink-100 text-sm">Cost Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">25+</div>
              <div className="text-pink-100 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
