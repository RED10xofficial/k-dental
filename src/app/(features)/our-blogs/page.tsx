import { dentalBlogs } from "./blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blogs - KIA Dental | Expert Dental Health Blogs",
  description:
    "Stay informed with our latest dental health blogs, tips, and expert insights from KIA Dental's professional team.",
};

export default function BlogsPage() {
  // Featured blog (first one)
  const featuredBlog = dentalBlogs[0];
  const regularBlogs = dentalBlogs.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10H4C2.9 10 2 9.1 2 8V4C2 2.9 2.9 2 4 2H12ZM4 12C2.9 12 2 12.9 2 14V18C2 19.1 2.9 20 4 20H8C9.1 20 10 19.1 10 18V14C10 12.9 9.1 12 8 12H4ZM14 12C12.9 12 12 12.9 12 14V18C12 19.1 12.9 20 14 20H18C19.1 20 20 19.1 20 18V14C20 12.9 19.1 12 18 12H14Z"
                clipRule="evenodd"
              />
            </svg>
            Expert Dental Insights
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {" "}
              Dental{" "}
            </span>
            Blog
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay informed with the latest dental health insights, expert tips,
            and comprehensive guides from our experienced dental professionals.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {dentalBlogs.length} Blogs
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Updated Weekly
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Blog
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={`/images/blogs/${featuredBlog.slug}.webp`}
                  alt={featuredBlog.name}
                  className="w-full h-full object-cover"
                />

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-pink-600">
                  Featured
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium mb-4 w-fit">
                  Featured
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredBlog.name}
                </h3>

                <div className="text-gray-600 mb-6 line-clamp-3">
                  {featuredBlog.description
                    .replace(/<[^>]*>/g, "")
                    .substring(0, 150)}
                  ...
                </div>

                <Link
                  href={`/our-blogs/${featuredBlog.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 w-fit group"
                >
                  Read Blog
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </section>

      {/* All Blogs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Blogs</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`/images/blogs/${blog.slug}.webp`}
                    alt={blog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-pink-600">
                    Dental Health
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                    {blog.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.description.replace(/<[^>]*>/g, "").substring(0, 120)}
                    ...
                  </p>

                  <Link
                    href={`/our-blogs/${blog.slug}`}
                    className="inline-flex items-center text-pink-600 font-semibold text-sm hover:text-pink-700 transition-colors duration-300 group"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest dental health tips and insights delivered straight
              to your inbox. Join our community of health-conscious readers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-pink-100 text-xs mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
