import Link from "next/link";
import { BookNowButton } from "../../shared/components";

export default function OurStoryPage() {
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
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            About Kia Dental
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {" "}
              Story
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the passion, dedication, and values that drive our
            commitment to exceptional dental care
          </p>
        </div>
      </section>

      {/* About Kia Dental Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                About Kia Dental
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Excellence in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {" "}
                  Dental Care
                </span>
              </h2>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-6">
                  At Kia Dental, we believe that every smile tells a story. For
                  over two decades, we have been dedicated to creating
                  beautiful, healthy smiles while providing compassionate,
                  personalized care to our patients.
                </p>
                <p className="mb-6">
                  Our practice was founded on the principle that exceptional
                  dental care should be accessible, comfortable, and tailored to
                  each individual&apos;s unique needs. We combine
                  state-of-the-art technology with time-tested techniques to
                  deliver results that exceed expectations.
                </p>
                <p>
                  What sets us apart is our commitment to building lasting
                  relationships with our patients, understanding their concerns,
                  and working together to achieve optimal oral health and
                  aesthetic goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookNowButton variant="primary" size="large">
                  Schedule Consultation
                </BookNowButton>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-2 text-pink-600 font-semibold rounded-lg border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
                >
                  Our Services
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

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Kia Dental Team"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-pink-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">20+</div>
                    <div className="text-sm text-gray-600">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Prayer, Policy Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Kia Dental
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional, personalized dental care that transforms
                lives and creates confident smiles. We are committed to using
                the latest technology and techniques while maintaining the
                highest standards of safety, comfort, and patient satisfaction.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading dental practice recognized for innovation,
                compassion, and excellence. We envision a future where every
                patient receives world-class dental care in a comfortable,
                welcoming environment that feels like home.
              </p>
            </div>

            {/* Prayer */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl font-bold text-gray-900">Our Prayer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We pray for wisdom and skill in our hands as we care for each
                patient. May we be instruments of healing, comfort, and hope. We
                seek guidance to make decisions that honor the trust placed in
                us and to serve with humility, compassion, and integrity.
              </p>
            </div>

            {/* Policy */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Policy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of professional ethics,
                patient confidentiality, and clinical excellence. Our policies
                ensure transparent communication, fair pricing, and adherence to
                all safety protocols and regulations while fostering a
                respectful and inclusive environment for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-pink-600">15K+</div>
              </div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-purple-600">20+</div>
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-pink-600">98%</div>
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold text-purple-600">24/7</div>
              </div>
              <div className="text-gray-600 font-medium">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience the Kia Dental Difference
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied patients and discover why we&apos;re
            the trusted choice for comprehensive dental care
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton variant="ghost" size="large">
              Book Your Consultation
            </BookNowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
