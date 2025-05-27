import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Provide High Quality <span className="text-pink-500">Dental</span> Services
          </h1>
          <p className="text-gray-600 mb-8">
            Appointments, Affordable Arrangement Treatments via Tele-Dental Medicine.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/appointment" className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium">
              Get Started
            </Link>
            <Link href="/services" className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src="/banner.jpg"
            alt="Dentist showing toothbrush"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* How to get our service section */}
      <section className="bg-pink-500 text-white px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
        <h2 className="text-2xl font-semibold mb-2">How to get our service?</h2>
        <p className="mb-8">Just follow these simple steps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Call For Appointment</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Get Your Schedule</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Get Your Treatment</h3>
          </div>
        </div>
      </section>

      {/* Patient-Centered Care Section */}
      <section className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="w-full relative col-span-2 h-[600px]">
            <Image
              src="/kia-2.png"
              alt="Dentist examining patient"
              fill
              className="object-fill rounded-lg h-full"
            />
          </div>
          
          <div className="col-span-1 md:col-span-3 py-20 w-full md:w-2/3">
            <span className="text-pink-500 font-medium">About Us</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Patient-Centered Care</h2>
            <p className="text-gray-600 mb-6">
              We stay dedicated to providing comprehensive dental care that is safe, and delivering excellent results. Our team of professionals is here to ensure your dental experience is comfortable and stress-free.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide optimal oral health and exceptional service to our patients while maintaining the highest standards of dental care.
              </p>
            </div>
            <Link href="/about" className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors inline-block">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50 ">
        <h2 className="text-3xl font-bold mb-12 text-center">What Makes Us More Special</h2>
        
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Service 1 */}
          <div className="bg-yellow-100 p-6 rounded-lg relative pe-12 w-[350px] overflow-clip" >
            <h3 className="text-xl font-bold mb-2">Teeth Whitening</h3>
            <p className="text-gray-600 pe-14">Cosmetic treatment to enhance the whiteness of teeth</p>
            
            <div className=" bottom-6 left-6">
              <Link href="/services/teeth-whitening" className="text-pink-500 font-medium">
                Read More
              </Link>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-36">
              <Image
                src="/kia-3.png "
                alt="Teeth Whitening"
                fill
                className="object-fill"
              />
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-pink-100 p-6 rounded-lg relative pe-12 w-[350px]" >
            <h3 className="text-xl font-bold mb-2">Dental Implant</h3>
            <p className="text-gray-600 pe-14">Surgical placement of artificial tooth roots</p>
            
            <div className=" bottom-6 left-6">
              <Link href="/services/dental-implant" className="text-pink-500 font-medium">
                Read More
              </Link>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-36">
              <Image
                src="/kia-4.png"
                alt="Dental Implant"
                fill
                className="object-fill "
              />
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-teal-100 p-6 rounded-lg relative pr-12 w-[350px]" >
            <h3 className="text-xl font-bold mb-2">Teeth Fillings</h3>
            <p className="text-gray-600 pe-14">Restorative procedures to repair cavities and damaged teeth</p>
            
            <div className=" bottom-6 left-6">
              <Link href="/services/teeth-filling" className="text-pink-500 font-medium">
                Read More
              </Link>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-36">
              <Image
                src="/kia-5.png"
                alt="Teeth Filling"
                fill
                className="object-fill"
              />
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-orange-100 p-6 rounded-lg relative pr-12 w-[350px]" >
            <h3 className="text-xl font-bold mb-2">Oral Surgery</h3>
            <p className="text-gray-600 pe-14">Surgical procedures, including extractions and dental implants</p>
            
            <div className=" bottom-6 left-6">
              <Link href="/services/oral-surgery" className="text-pink-500 font-medium">
                Read More
              </Link>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-36">
              <Image
                src="/kia-6.png"
                alt="Oral Surgery"
                fill
                className="object-fill"
              />
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-green-100 p-6 rounded-lg relative pr-12 w-[350px]" >
            <h3 className="text-xl font-bold mb-2">Crown and Bridges</h3>
            <p className="text-gray-600 pe-14">Restoration options for damaged or missing teeth</p>
            
            <div className=" bottom-6 left-6">
              <Link href="/services/crown-bridges" className="text-pink-500 font-medium">
                Read More
              </Link>
            </div>
            
            <div className="absolute bottom-0 right-0 w-36 h-36">
              <Image
                src="/kia-7.png"
                alt="Crown and Bridges"
                fill
                className="object-fill"
              />
            </div>
          </div>
          
          {/* Service 6 */}
          <div className="bg-purple-100 p-6 rounded-lg relative pr-12 w-[350px]" >
            <h3 className="text-xl font-bold mb-2">Periodontal Care</h3>
            <p className="text-gray-600 pe-14">Services for gum health, including scaling and root planing</p>
            
            <div className=" bottom-6 left-6">
              <Link href="/services/periodontal-care" className="text-pink-500 font-medium">
                Read More
              </Link>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-36">
              <Image
                src="/kia-8.png"
                alt="Periodontal Care"
                fill
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-500 text-white px-6 md:px-12 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let Us Brighten <span className="font-normal">Your Smile!</span></h2>
        <p className="max-w-2xl mx-auto mb-8">
          Regular dental checkups and professional cleanings are essential for maintaining good oral health. Schedule an appointment today to keep your smile healthy and bright!
        </p>
        <Link href="/appointment" className="bg-white text-pink-500 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block font-medium">
          Make An Appointment
        </Link>
      </section>

      {/* Doctors Section */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Doctors</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Doctor 1 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/kia-3.png"
                alt="Dr. James Holt"
                fill
                className="object-cover rounded-full border-4 border-gray-200"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. James Holt</h3>
            <p className="text-gray-600 mb-4">Dental Surgeon</p>
            <Link href="/doctors/james-holt" className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition-colors inline-block">
              Appointment
            </Link>
          </div>
          
          {/* Doctor 2 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/kia-4.png"
                alt="Dr. Laura Phillips"
                fill
                className="object-cover rounded-full border-4 border-gray-200"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Laura Phillips</h3>
            <p className="text-gray-600 mb-4">Orthodontist</p>
            <Link href="/doctors/laura-phillips" className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition-colors inline-block">
              Appointment
            </Link>
          </div>
          
          {/* Doctor 3 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/kia-5.png"
                alt="Dr. James Evans"
                fill
                className="object-cover rounded-full border-4 border-gray-200"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. James Evans</h3>
            <p className="text-gray-600 mb-4">Periodontist</p>
            <Link href="/doctors/james-evans" className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition-colors inline-block">
              Appointment
            </Link>
          </div>
          
          {/* Doctor 4 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/kia-6.png"
                alt="Dr. Jasper Aurora"
                fill
                className="object-cover rounded-full border-4 border-gray-200"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Jasper Aurora</h3>
            <p className="text-gray-600 mb-4">Endodontist</p>
            <Link href="/doctors/jasper-aurora" className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition-colors inline-block">
              Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-12 py-16 bg-pink-50">
        <h2 className="text-3xl font-bold mb-12 text-center">What People Say About Us</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="/kia-7.png"
                alt="Testimonial"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mb-6 text-lg italic">
              "I'm very impressed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."
            </p>
            <h3 className="font-bold">David Graham</h3>
            <p className="text-gray-500">Detroit, Michigan</p>
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 relative h-[400px]">
            <Image
              src="/kia-8.png"
              alt="Dentist examining patient"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Choose Service</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="">Select a service</option>
                  <option value="teeth-whitening">Teeth Whitening</option>
                  <option value="dental-implant">Dental Implant</option>
                  <option value="teeth-filling">Teeth Filling</option>
                  <option value="oral-surgery">Oral Surgery</option>
                  <option value="crown-bridges">Crown and Bridges</option>
                  <option value="periodontal-care">Periodontal Care</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  You agree to our Privacy Policy
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 transition-colors"
              >
                Submit Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
