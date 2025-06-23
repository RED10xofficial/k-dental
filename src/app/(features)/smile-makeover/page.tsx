"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import { BookNowButton } from "../../shared/components";

// Video type definition
interface Video {
  id: number;
  videoUrl: string;
  title: string;
}

// Sample video data - replace with actual video URLs
const videoGallery: Video[] = [
  {
    id: 1,
    videoUrl: "/videos/1.mp4",
    title: "Complete Smile Transformation",
  },
  {
    id: 2,
    videoUrl: "/videos/2.mp4",
    title: "Veneer Smile Makeover",
  },
  {
    id: 3,
    videoUrl: "/videos/3.mp4",
    title: "Teeth Whitening Results",
  },
  {
    id: 4,
    videoUrl: "/videos/4.mp4",
    title: "Crown and Bridge Work",
  },
  {
    id: 5,
    videoUrl: "/videos/5.mp4",
    title: "Orthodontic Transformation",
  },
  {
    id: 6,
    videoUrl: "/videos/6.mp4",
    title: "Full Mouth Rehabilitation",
  },
  {
    id: 7,
    videoUrl: "/videos/7.mp4",
    title: "Cosmetic Dental Bonding",
  },
  {
    id: 8,
    videoUrl: "/videos/8.mp4",
    title: "Gum Contouring Results",
  },
  {
    id: 9,
    videoUrl: "/videos/9.mp4",
    title: "Digital Smile Design",
  },
];

export default function SmileMakeoverPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    // Pause the video and reset to beginning
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Also handle video cleanup when modal closes via ESC or outside click
  useEffect(() => {
    if (!isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  }, [isModalOpen]);

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
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Expert Cosmetic Dentistry
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Life with a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  {" "}
                  Perfect Smile
                </span>
                <br />
                Makeover
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Boost your self-esteem and reclaim your oral health with our
                customized smile makeover treatments at KIA Dental. Give your
                natural teeth a stunning new look.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BookNowButton variant="hero" size="large">
                  Free Consultation
                </BookNowButton>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
                >
                  Learn More
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
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src="/smile-makeover.jpg"
                    alt="Smile Makeover at KIA Dental"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Smile Makeover */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is a Smile Makeover?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                A smile makeover is a comprehensive cosmetic dental procedure
                that aims to transform the appearance of your teeth, smile, and
                bite. It&rsquo;s not just about aesthetics - we focus on
                optimizing and restoring your dental function too.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                At KIA Dental, our smile makeover treatments are customized to
                your unique needs, considering your facial features, lip line,
                smile line, symmetry, and gum tissue condition to ensure you
                achieve a natural-looking, beautiful smile.
              </p>

              <div className="space-y-4">
                {[
                  "Comprehensive assessment of your dental health",
                  "Customized treatment plan for your unique needs",
                  "Advanced cosmetic dentistry techniques",
                  "Focus on both aesthetics and function",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mt-1">
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
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Smile Makeover Process"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of a Smile Makeover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A smile makeover is a potentially life-changing investment that
              can transform both your appearance and confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5H9V10z"
                    />
                  </svg>
                ),
                title: "Outstanding First Impression",
                description:
                  "A bright, healthy smile is associated with positive attributes like trustworthiness and success",
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Boost Confidence",
                description:
                  "Feel like a new person with increased self-confidence and decreased anxiety in social situations",
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Improve Overall Oral Health",
                description:
                  "Straight teeth are easier to clean, reducing the risk of gum disease and tooth decay",
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
                title: "Enhance Dental Function",
                description:
                  "Properly aligned teeth improve chewing efficiency and overall oral function",
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

      {/* Procedures Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Procedures Involved in Your Smile Makeover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive smile makeover treatments can include multiple
              procedures, custom-selected for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Veneers & Crowns",
                description:
                  "Porcelain veneers and ceramic crowns to cover imperfections and create a perfect smile",
                icon: "🦷",
              },
              {
                title: "Teeth Whitening",
                description:
                  "Professional whitening treatments to brighten your smile and remove stains",
                icon: "✨",
              },
              {
                title: "Dental Implants",
                description:
                  "Replace missing teeth with natural-looking, permanent implants",
                icon: "🔧",
              },
              {
                title: "Orthodontic Treatment",
                description:
                  "Straighten misaligned teeth with braces or clear aligners",
                icon: "📐",
              },
              {
                title: "Gum Contouring",
                description:
                  "Reshape your gum line for a more balanced and attractive smile",
                icon: "🎨",
              },
              {
                title: "Composite Bonding",
                description:
                  "Repair chips, cracks, and gaps with tooth-colored composite resin",
                icon: "🔗",
              },
            ].map((procedure, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{procedure.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {procedure.title}
                </h3>
                <p className="text-gray-600">{procedure.description}</p>
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
              What Issues Can a Smile Makeover Fix?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive smile makeover treatments can address a wide
              range of dental concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Chipped or cracked teeth",
              "Discolored teeth",
              "Misaligned teeth",
              "Uneven teeth",
              "Missing teeth",
              "Teeth proportion issues",
              "Tooth length problems",
              "Gaps between teeth",
              "Worn down teeth",
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

      {/* Video Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Amazing Smile Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible results our patients have achieved with their
              smile makeovers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoGallery.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <video
                    className="w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-pink-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {video.title}
                  </h3>
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
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how a smile
            makeover can boost your confidence and transform your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton variant="ghost" size="large">
              Free Consultation
            </BookNowButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
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

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-pink-100">Smile Makeovers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-pink-100">Patient Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-pink-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        open={isModalOpen}
        onCancel={closeVideoModal}
        footer={null}
        width="90%"
        style={{ maxWidth: "600px" }}
        centered
        destroyOnClose={true}
      >
        {selectedVideo && (
          <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
            <video
              ref={modalVideoRef}
              key={selectedVideo.id}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
            >
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </Modal>
    </main>
  );
}
