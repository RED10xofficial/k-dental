import { ProblemsWeTreat } from "../models/problems-we-treat";
import BookNowButton from "./book-now-button";

const ProblemsWeTreatPage = ({ data }: { data: ProblemsWeTreat }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Enhanced Hero Section with Modern Design */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `url(${data.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-pink-900/70" />

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-md animate-bounce delay-2000" />
        </div>

        {/* Modern Content Container */}
        <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
          {/* Innovative Typography */}
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
              Specialized Treatment
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="font-light text-white/90">
                {data.headingLight}
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-pink-200 bg-clip-text text-transparent">
                {data.headingBold}
              </span>
            </h1>
          </div>

          {/* Call to Action with Modern Button */}
          <div className="pt-6">
            <BookNowButton variant="hero" size="large">
              Get Expert Consultation
            </BookNowButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Modern Content Sections */}
      <div className="relative">
        {data.sections.map((section, index) => (
          <section
            key={index}
            className={`relative py-16 md:py-20 overflow-hidden ${
              index % 2 === 0
                ? "bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30"
                : "bg-gradient-to-br from-gray-50 via-white to-pink-50/20"
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Floating Design Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {index % 2 === 0 ? (
                <>
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-pink-100/40 to-purple-100/40 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-2xl" />
                </>
              ) : (
                <>
                  <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full blur-2xl" />
                </>
              )}
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
              {/* Compact Magazine-Style Layout */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "lg:ml-0" : "lg:mr-0"
                }`}
              >
                {/* Main Content Container with Overlapping Design */}
                <div className="relative">
                  {/* Image Container - Positioned for Overlap */}
                  <div
                    className={`relative ${
                      index % 2 === 0
                        ? "float-right lg:w-2/5 ml-8 mb-8"
                        : "float-left lg:w-2/5 mr-8 mb-8"
                    } mt-16`}
                  >
                    <div className="relative group">
                      {/* Enhanced Image with Overlay Content */}
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-3 transform group-hover:scale-105 transition-transform duration-500">
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            src={section.image}
                            alt={`${section.headingBold} treatment`}
                            className="w-full h-64 lg:h-80 object-cover"
                          />
                          {/* Gradient Overlay with Information */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="text-sm font-semibold">
                              Expert Treatment Available
                            </div>
                            <div className="text-xs opacity-90">
                              Click to learn more
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Stats Badge */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="text-xs font-semibold">
                          ✨ Expert Care
                        </div>
                      </div>

                      {/* Side Info Card */}
                      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-pink-100 max-w-48 hidden lg:block">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
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
                          <div>
                            <div className="text-sm font-semibold text-gray-800">
                              Professional
                            </div>
                            <div className="text-xs text-gray-600">
                              Treatment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Flowing Around Image */}
                  <div className="relative space-y-6">
                    {/* Header Section */}
                    <div className="space-y-4">
                      {/* Section Badge */}
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-700">
                          Treatment Information
                        </span>
                      </div>

                      {/* Compact Typography */}
                      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                        <span className="text-gray-800 font-light">
                          {section.headingLight}
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                          {section.headingBold}
                        </span>
                      </h2>
                    </div>

                    {/* Main Content - Flows Around Image */}
                    <div className="space-y-6 text-justify">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed font-light">
                          {section.description.paragraph1}
                        </p>
                      </div>

                      {/* Compact Bullet Points - Horizontal Cards */}
                      {section.description.bulletPoints &&
                        section.description.bulletPoints.length > 0 && (
                          <div className="space-y-4">
                            {/* Horizontal Flowing Cards */}
                            <div className="flex flex-wrap gap-3">
                              {section.description.bulletPoints.map(
                                (point, i) => (
                                  <div
                                    key={i}
                                    className="group relative bg-gradient-to-r from-white via-pink-50/80 to-purple-50/60 backdrop-blur-sm rounded-full px-5 py-3 border border-pink-100/60 hover:border-pink-300/60 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center space-x-3 max-w-fit"
                                  >
                                    {/* Compact Icon */}
                                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                      {point.toLowerCase().includes("smile") ? (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm3-1a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm-3 4a3 3 0 01-2.83 2H6a1 1 0 110-2h1.17a1 1 0 001.2-.8A1 1 0 0110 11a1 1 0 011.2.8 1 1 0 001.2.8H14a1 1 0 110 2h-1.17A3 3 0 0110 13z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      ) : point
                                          .toLowerCase()
                                          .includes("teeth") ||
                                        point
                                          .toLowerCase()
                                          .includes("tooth") ? (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 2C8.5 2 7 3 7 5c0 1.5-1 2.5-2 3s-2 1.5-2 3c0 2 1.5 4 4 4s4-2 4-4c0-1.5-1-2-2-3s-2-1.5-2-3c0-2 1.5-3 3-3s3 1 3 3c0 1.5-1 2.5-2 3s-2 1.5-2 3c0 2 1.5 4 4 4s4-2 4-4c0-1.5-1-2-2-3s-2-1.5-2-3c0-2-1.5-3-3-3z" />
                                        </svg>
                                      ) : point
                                          .toLowerCase()
                                          .includes("gap") ? (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                      ) : point
                                          .toLowerCase()
                                          .includes("color") ||
                                        point
                                          .toLowerCase()
                                          .includes("discolor") ? (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h6M17 9V5a2 2 0 00-2-2h-2M17 9l4 4-4 4"
                                          />
                                        </svg>
                                      ) : point
                                          .toLowerCase()
                                          .includes("decay") ? (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                          />
                                        </svg>
                                      ) : (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      )}
                                    </div>

                                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                                      {point.length > 25
                                        ? `${point.substring(0, 25)}...`
                                        : point}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                      {/* Second Paragraph */}
                      {section.description.paragraph2 && (
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-600 leading-relaxed font-light">
                            {section.description.paragraph2}
                          </p>
                        </div>
                      )}

                      {/* Compact Action Section */}
                      <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
                        <BookNowButton variant="primary" size="middle">
                          Learn More
                        </BookNowButton>

                        {/* Quick Info Cards */}
                        {/* <div className="flex gap-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-pink-100/50 shadow-sm">
                            <div className="text-xs text-gray-600">
                              Treatment Time
                            </div>
                            <div className="text-sm font-semibold text-gray-800">
                              Varies
                            </div>
                          </div>
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-pink-100/50 shadow-sm">
                            <div className="text-xs text-gray-600">
                              Success Rate
                            </div>
                            <div className="text-sm font-semibold text-pink-600">
                              95%+
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    {/* Clear the float */}
                    <div className="clear-both"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Enhanced Link Cards Section */}
      {data.isLinkCards && (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
                <span className="text-sm font-medium text-gray-700">
                  Related Services
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Explore Related{" "}
                <span className="text-pink-600">Treatments</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.linkCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-pink-200/50 hover:-translate-y-2"
                >
                  {/* Card Content */}
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      {card.title}
                    </h3>

                    <div className="flex items-center text-pink-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
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
                    </div>
                  </div>

                  {/* Link Overlay */}
                  <a
                    href={card.link}
                    className="absolute inset-0 rounded-3xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Link Blocks Section */}
      {data.isLinkBlocks && (
        <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {data.linkBlocks.map((block, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-pink-200/50 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
                    <div className="flex-1 space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {block.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        {block.subTitle}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <a
                        href={block.link}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      >
                        <span>Explore More</span>
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProblemsWeTreatPage;
