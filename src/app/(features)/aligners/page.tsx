"use client";

import Link from "next/link";
import { useState } from "react";
import { BookNowButton } from "../../shared/components";

export default function AlignersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do clear aligners work?",
      answer:
        "Clear aligners work by applying gentle, consistent pressure on your teeth to gradually move them into the desired position. You'll wear a series of custom-made aligner trays, with each set bringing you one step closer to your new smile.",
    },
    {
      question: "Are clear aligners better than braces?",
      answer:
        "Aligners offer several advantages over traditional braces. They are nearly invisible, removable for eating and cleaning, and generally more comfortable. While braces are still effective, many patients prefer the convenience and aesthetics of clear aligners.",
    },
    {
      question: "How long does the treatment take?",
      answer:
        "The duration of treatment varies depending on the complexity of your case. On average, treatment with KIA Clear Aligners takes between 6 to 18 months, which is often faster than traditional braces.",
    },
    {
      question: "Are clear aligners painful?",
      answer:
        "You may experience some mild discomfort or pressure for the first few days of wearing a new set of aligners, which is a normal sign that your teeth are moving. This discomfort is typically less than what is experienced with traditional braces.",
    },
    {
      question: "Who is a candidate for clear aligners?",
      answer:
        "Clear aligners are a great option for teens and adults with mild to moderate orthodontic issues like crooked teeth, gaps, and some bite problems. A consultation with our orthodontic experts will determine if clear aligners are right for you.",
    },
  ];

  const beforeAfterData = [
    {
      before: "/aligners/before1.jpg",
      after: "/aligners/after1.jpg",
      case: "Crowding",
      duration: "11 Months",
    },
    {
      before: "/aligners/before2.jpg",
      after: "/aligners/after2.jpg",
      case: "Spacing",
      duration: "7 Months",
    },
    {
      before: "/aligners/before3.jpg",
      after: "/aligners/after3.jpg",
      case: "Crossbite",
      duration: "14 Months",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.09 4.09a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM13.85 13.85a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 10zM15.5 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM4.09 15.91a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM13.85 6.15a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z" />
                  <path
                    fillRule="evenodd"
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zM8.5 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM11.5 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z"
                    clipRule="evenodd"
                  />
                </svg>
                Invisible & Effective Teeth Straightening
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Achieve Your Dream Smile with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {" "}
                  KIA Clear Aligners
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Discreet, comfortable, and effective. Our custom clear aligners
                are designed by experts to give you the straight, beautiful
                smile you&rsquo;ve always wanted, without the hassle of
                traditional braces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BookNowButton variant="hero" size="large">
                  Free Aligner Scan
                </BookNowButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src="/aligners.jpg"
                    alt="Woman smiling with clear aligners"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues we can fix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dental Alignment Issues We Can Fix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KIA Clear Aligners can effectively treat a wide range of common
              orthodontic concerns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {[
              { name: "Teeth Gap", icon: "gap" },
              { name: "Crowding", icon: "crowding" },
              { name: "Crossbite", icon: "crossbite" },
              { name: "Open Bite", icon: "openbite" },
              { name: "Deep Bite", icon: "deepbite" },
            ].map((issue) => (
              <div key={issue.name} className="flex flex-col items-center">
                <div className="w-32 h-32 p-2 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center mb-4">
                  <img
                    src={`images/aligners/issues/${issue.icon}.webp`}
                    alt={issue.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {issue.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aligners vs Braces */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Clear Aligners vs. Traditional Braces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how modern clear aligners stack up against conventional metal
              braces.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-6 text-lg font-bold text-gray-800">
                      Feature
                    </th>
                    <th className="p-6 text-lg font-bold text-pink-600">
                      KIA Clear Aligners
                    </th>
                    <th className="p-6 text-lg font-bold text-gray-500">
                      Traditional Braces
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: "Appearance",
                      aligners: "Nearly Invisible",
                      braces: "Visible Metal/Ceramic",
                    },
                    {
                      feature: "Comfort",
                      aligners: "Smooth, comfortable plastic",
                      braces: "Brackets can cause irritation",
                    },
                    {
                      feature: "Removability",
                      aligners: "Yes, for eating and cleaning",
                      braces: "No, fixed to teeth",
                    },
                    {
                      feature: "Diet",
                      aligners: "No restrictions",
                      braces: "Avoid hard, sticky foods",
                    },
                    {
                      feature: "Oral Hygiene",
                      aligners: "Easy to brush and floss",
                      braces: "More difficult to clean",
                    },
                    {
                      feature: "Treatment Time",
                      aligners: "Often faster (6-18 months)",
                      braces: "Can be longer (18-24+ months)",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-6 font-semibold text-gray-700">
                        {item.feature}
                      </td>
                      <td className="p-6 text-green-600 font-semibold">
                        <span className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.aligners}
                        </span>
                      </td>
                      <td className="p-6 text-red-500">
                        <span className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.braces}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to a Perfect Smile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 3-step process makes getting your dream smile
              simple and convenient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            {/* Dashed line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5">
              <svg
                width="100%"
                height="100%"
                className="overflow-visible"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  strokeWidth="2"
                  strokeDasharray="8, 8"
                  className="stroke-gray-300"
                />
              </svg>
            </div>

            {[
              {
                step: "01",
                title: "Consultation & 3D Scan",
                description:
                  "We start with a comprehensive consultation and a precise 3D scan of your teeth. No messy impressions!",
              },
              {
                step: "02",
                title: "Custom Treatment Plan",
                description:
                  "Our experts design a personalized treatment plan that maps out the gradual movement of your teeth.",
              },
              {
                step: "03",
                title: "Wear Your Aligners",
                description:
                  "You'll receive your custom aligners to wear daily. We'll monitor your progress to ensure a perfect result.",
              },
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 z-10 relative shadow-lg">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      {/* <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Patients, Real Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the life-changing results achieved with KIA Clear Aligners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="grid grid-cols-2">
                  <div>
                    <img
                      src={item.before}
                      alt="Before treatment"
                      className="w-full h-full object-cover"
                    />
                    <div className="text-center py-2 bg-gray-100 font-semibold text-gray-600">
                      Before
                    </div>
                  </div>
                  <div>
                    <img
                      src={item.after}
                      alt="After treatment"
                      className="w-full h-full object-cover"
                    />
                    <div className="text-center py-2 bg-green-100 font-semibold text-green-700">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.case} Correction
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-semibold">Treatment time:</span>{" "}
                    {item.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We have answers.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="p-5 pt-0 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Your Dream Smile?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Your journey to a confident, straight smile starts here. Schedule
            your free, no-obligation consultation with our aligner experts
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton variant="ghost" size="large">
              Book Your Free Scan
            </BookNowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
