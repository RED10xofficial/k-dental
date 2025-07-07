"use client";

import { BookNowButton } from "../../shared/components";

export default function InvisalignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.05'%3E%3Cpath d='M30 0c16.568 0 30 13.432 30 30s-13.432 30-30 30S0 46.568 0 30 13.432 0 30 0zm0 54c13.255 0 24-10.745 24-24S43.255 6 30 6 6 16.745 6 30s10.745 24 24 24z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                <span className="text-xl mr-2">🦷</span>
                Invisalign® – The Future of Smile Correction
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Straighten Your Teeth
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {" "}
                  Without Anyone Noticing
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Welcome to a new era in orthodontics. With Invisalign, you can
                achieve the confident smile you&apos;ve always wanted — without
                metal braces, pain, or social discomfort. It’s safe, precise,
                and tailored entirely to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BookNowButton variant="hero" size="large">
                  Book My Scan & Consultation
                </BookNowButton>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src="/aligners.jpg"
                    alt="Invisalign Aligners"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Invisalign? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is Invisalign?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Invisalign is a revolutionary clear aligner system that gently
                moves your teeth into alignment using a series of custom-made,
                virtually invisible trays.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Designed for maximum comfort and control, it’s the discreet
                choice trusted by over 15 million smiles globally.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform -rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="/invisalign1.webp"
                  alt="3D render of clear aligners"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Invisalign Over Braces? */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Invisalign Over Braces?
            </h2>
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                ),
                title: "Invisible in Social & Professional Settings",
                description:
                  "No wires. No brackets. Just clear aligners that blend with your smile.",
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
                      d="M21.5,11.5c0,4.418-4.03,8-9,8s-9-3.582-9-8s4.03-8,9-8S21.5,7.082,21.5,11.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 16.5c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1"
                    />
                  </svg>
                ),
                title: "Eat Anything You Like",
                description:
                  "Pop them out at mealtime — enjoy all your favorite foods, unlike with traditional braces.",
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
                      d="M5 3v18h14V3M5 3h14M3 21h18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7v10"
                    />
                  </svg>
                ),
                title: "Brush & Floss Like Normal",
                description:
                  "No special tools, no restrictions — just better oral health.",
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
                      d="M9 3H5a2 2 0 00-2 2v4m6-6h6m-6 0V1m6 2v4M9 15v6m6-6v6m-6-2h6m-6-4h6"
                    />
                  </svg>
                ),
                title: "SmartTrack® Technology",
                description:
                  "Patented material ensures faster, more predictable tooth movement.",
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
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                ),
                title: "No Irritation or Emergencies",
                description:
                  "Smooth, plastic trays mean no poking wires or surprise visits.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Journey With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Journey with Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "1",
                title: "Digital Smile Assessment",
                description:
                  "We start with a 3D scan to visualize your future smile before treatment begins.",
              },
              {
                icon: "2",
                title: "Custom Aligner Creation",
                description:
                  "Your treatment plan is created using cutting-edge AI and dental software for maximum accuracy.",
              },
              {
                icon: "3",
                title: "Weekly Aligner Swaps",
                description:
                  "Every 1–2 weeks, you’ll switch to the next set in your series — gradually guiding your teeth into place.",
              },
              {
                icon: "4",
                title: "Progress Check-ins",
                description:
                  "We’ll monitor your progress every 6–8 weeks and adjust as needed to ensure optimal results.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Issues We Can Fix */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ideal For…
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invisalign is a versatile solution for a wide range of alignment
              issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Mild to severe crowding or spacing",
              "Overbites, underbites, and crossbites",
              "Gapped teeth",
              "Teens and adults looking for a discreet solution",
              "Anyone looking to straighten their smile without sacrificing lifestyle",
            ].map((issue, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">{issue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Transformation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Real Transformation, Real Confidence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether it’s for a special event, your dream job interview, or
            simply to feel better when you smile in the mirror — Invisalign is
            an investment in self-confidence.
          </p>
          <div className="">
            <img
              src="/invisalign2.webp"
              alt="Before Invisalign"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
          <p className="mt-8 text-lg text-gray-500">
            Typical duration: 6 to 18 months. Early results often visible in
            just a few weeks.
            <br />
            Most patients say: “I wish I started sooner.”
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book Your Invisalign Consultation Today
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let our experts assess your smile, show you your future results, and
            customize a treatment plan just for you. Limited consultations
            available each month.
          </p>
          <p className="text-pink-200 mb-8">
            100% personalized. No pressure. No obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton variant="ghost" size="large">
              Ready to begin? Book My Scan & Consultation
            </BookNowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
