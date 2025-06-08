import { dentalBlogs } from "../blog";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = dentalBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found - KIA Dental",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.name} - KIA Dental`,
    description: blog.description.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return dentalBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const blog = dentalBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/our-blogs"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Blogs
            </Link>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              404 Error
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Blog Not Found
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, we couldn&apos;t find the blog post you&apos;re looking
              for. It may have been moved or doesn&apos;t exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-blogs"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                View All Blogs
              </Link>

              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Get related blogs (excluding current blog)
  const relatedBlogs = dentalBlogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Header with back link */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/our-blogs"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Blogs
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Dental Health Guide
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.name}
            </h1>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                KIA Dental Team
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                5 min read
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 lg:h-80 mb-12 rounded-2xl overflow-hidden">
            <img
              src={`/images/blogs/${blog.slug}.webp`}
              alt={blog.name}
              className="w-full h-full object-cover"
            />

            {/* Reading Progress Indicator */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-gray-600">
                Blog Image: {blog.imageName}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            {/* Blog Body */}
            <div
              className="prose prose-lg prose-pink max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:text-pink-600 prose-h1:border-b prose-h1:border-pink-100 prose-h1:pb-4
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-gray-800 prose-h2:relative prose-h2:pl-6
                before:prose-h2:content-[''] before:prose-h2:absolute before:prose-h2:left-0 before:prose-h2:top-1 before:prose-h2:w-1 before:prose-h2:h-6 before:prose-h2:bg-gradient-to-b before:prose-h2:from-pink-500 before:prose-h2:to-purple-600 before:prose-h2:rounded-full
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-700 prose-h3:font-semibold
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-p:tracking-wide
                prose-strong:text-gray-900 prose-strong:font-semibold prose-strong:bg-pink-50 prose-strong:px-1 prose-strong:rounded
                prose-ul:space-y-3 prose-ul:my-6 prose-li:text-gray-700 prose-li:leading-relaxed prose-li:pl-2
                prose-ol:space-y-3 prose-ol:my-6 prose-ol:pl-6
                prose-li:marker:text-pink-500
                prose-blockquote:border-l-4 prose-blockquote:border-pink-400 prose-blockquote:bg-pink-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:my-6
                prose-blockquote:text-pink-800 prose-blockquote:italic
                prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6
                prose-a:text-pink-600 prose-a:no-underline prose-a:font-medium hover:prose-a:text-pink-700 hover:prose-a:underline
                first:prose-p:text-xl first:prose-p:text-gray-600 first:prose-p:font-medium first:prose-p:leading-relaxed first:prose-p:mb-8
                [&>article>h1]:text-4xl [&>article>h1]:mb-8 [&>article>h1]:mt-0 [&>article>h1]:text-pink-600 [&>article>h1]:border-b [&>article>h1]:border-pink-100 [&>article>h1]:pb-4
                [&>article>h2]:text-2xl [&>article>h2]:mb-6 [&>article>h2]:mt-10 [&>article>h2]:text-gray-800 [&>article>h2]:relative [&>article>h2]:pl-6
                [&>article>h2]:before:content-[''] [&>article>h2]:before:absolute [&>article>h2]:before:left-0 [&>article>h2]:before:top-1 [&>article>h2]:before:w-1 [&>article>h2]:before:h-6 [&>article>h2]:before:bg-gradient-to-b [&>article>h2]:before:from-pink-500 [&>article>h2]:before:to-purple-600 [&>article>h2]:before:rounded-full
                [&>article>h3]:text-xl [&>article>h3]:mb-4 [&>article>h3]:mt-8 [&>article>h3]:text-gray-700 [&>article>h3]:font-semibold
                [&>article>p]:text-gray-700 [&>article>p]:leading-relaxed [&>article>p]:mb-6 [&>article>p]:text-lg [&>article>p]:tracking-wide
                [&>article>p]:first-of-type:text-xl [&>article>p]:first-of-type:text-gray-600 [&>article>p]:first-of-type:font-medium [&>article>p]:first-of-type:leading-relaxed [&>article>p]:first-of-type:mb-8 [&>article>p]:first-of-type:border-l-4 [&>article>p]:first-of-type:border-pink-200 [&>article>p]:first-of-type:pl-6 [&>article>p]:first-of-type:bg-pink-50 [&>article>p]:first-of-type:py-4 [&>article>p]:first-of-type:rounded-r-lg
                [&>article>ul]:space-y-3 [&>article>ul]:my-6 [&>article>ul]:pl-6
                [&>article>ol]:space-y-3 [&>article>ol]:my-6 [&>article>ol]:pl-6
                [&>article>li]:text-gray-700 [&>article>li]:leading-relaxed [&>article>li]:mb-2 [&>article>li]:pl-2
                [&>article>li]:marker:text-pink-500
                [&>article>li]:before:content-['•'] [&>article>li]:before:text-pink-500 [&>article>li]:before:mr-3 [&>article>li]:before:font-bold
                "
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />

            {/* Key Takeaways Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Regular dental checkups are essential for maintaining
                      optimal oral health
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Early detection and treatment lead to better outcomes
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Consult with dental professionals for personalized advice
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Blog Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Written by KIA Dental Team
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our experienced dental professionals are committed to
                      providing you with accurate, up-to-date information to
                      help you maintain optimal oral health. For personalized
                      advice, schedule a consultation with our team.
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Reviewed by dental experts
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Updated regularly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Blogs
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`/images/blogs/${relatedBlog.slug}.webp`}
                      alt={relatedBlog.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-pink-600">
                      Dental Health
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                      {relatedBlog.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedBlog.description
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 120)}
                      ...
                    </p>

                    <Link
                      href={`/our-blogs/${relatedBlog.slug}`}
                      className="inline-flex items-center text-pink-600 font-semibold text-sm hover:text-pink-700 transition-colors duration-300 group"
                    >
                      Read Blog
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

            <div className="text-center mt-12">
              <Link
                href="/our-blogs"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                View All Blogs
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
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert dental team and take the
              first step towards optimal oral health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Book Consultation
              </button>
              <Link
                href="/our-blogs"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300"
              >
                Read More Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
