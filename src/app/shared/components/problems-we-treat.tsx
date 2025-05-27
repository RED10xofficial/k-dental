import { ProblemsWeTreat } from "../models/problems-we-treat";
import Link from "next/link";

const ProblemsWeTreatPage = ({ data }: { data: ProblemsWeTreat }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${data.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            <span className="font-light">{data.headingLight}</span>{" "}
            <span className="font-bold">{data.headingBold}</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {/* {data.callToActions.map((cta, index) => (
              <Link
                href={cta.link}
                key={index}
                className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {cta.name}
              </Link>
            ))} */}
            <Link
              href=""
              className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {data.sections.map((section, index) => (
        <section
          key={index}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={section.image}
                    alt={`${section.headingBold} image`}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl mb-6">
                  <span className="font-light">{section.headingLight}</span>{" "}
                  <span className="font-bold">{section.headingBold}</span>
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="leading-relaxed">
                    {section.description.paragraph1}
                  </p>

                  {section.description.bulletPoints &&
                    section.description.bulletPoints.length > 0 && (
                      <ul className="space-y-3">
                        {section.description.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-pink-500 mr-2 mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  {section.description.paragraph2 && (
                    <p className="leading-relaxed">
                      {section.description.paragraph2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Link Cards Section */}
      {/* {data.isLinkCards && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {data.linkCards.map((card, index) => (
                <Link 
                  href={card.link} 
                  key={index} 
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center p-6">
                    <h3 className="text-xl font-bold text-white text-center">{card.title}</h3>
                  </div>
                  <div className="p-6 bg-white flex justify-center">
                    <span className="inline-flex items-center text-pink-500 font-medium">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Link Blocks Section */}
      {/* {data.isLinkBlocks && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {data.linkBlocks.map((block, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{block.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{block.subTitle}</p>
                    <Link 
                      href={block.link} 
                      className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300 font-medium"
                    >
                      Show more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
};

export default ProblemsWeTreatPage;
