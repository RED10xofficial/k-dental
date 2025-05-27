import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/10.jpg"
            alt="KIA Dental Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get to Know <span className="text-pink-500">KIA Dental</span>
          </h1>
          <p className="text-xl mb-8">
            Providing exceptional dental care with compassion and expertise since 1999
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment" className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium">
              Schedule Now
            </Link>
            <Link href="/contact" className="border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[500px]">
            <Image
              src="/11.jpg"
              alt="KIA Dental Facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Kamala Dental Speciality Hospital®, one of the first few NABH accredited dental hospitals in India, NABH (National Accreditation Board for Hospitals and Healthcare Providers) stands for highest safety standards in medical and dental care. Founded in 1999, a premiere institution in Thiruvananthapuram, the capital city of Kerala state, India, made its hallmark signage in the field of dental and facial surgeries incorporating latest treatment protocols and digital technologies.
              </p>
              <p>
                It is a fully digitalized dental and surgical practice with its state of art facilities in more than 7000 square feet built up area with seven dental treatment units and a dedicated surgical operatory. All the operatories are well equipped with digital X- rays and connected to share the medical and dental treatment records and patient information.
              </p>
              <p>
                Advanced diagnostic equipment like digital OPG and CBCT (Cone Beam CT) make diagnosis accurate and reliable. Our facilities like digital impressions using intraoral scanner and in house CAD-CAM solutions providing faster delivery of dental prosthesis make us to stand apart from other practices.
              </p>
              <p>
                Strictly following sterilization and aseptic protocols and adhering to barrier principles, Kamala Dental® maintains highest standards in sterilization and asepsis. Here, under the leadership of Dr.Segin Chandran, a team of speciality doctors and general dentists, work round the clock, offering advanced dental and surgical treatments.
              </p>
              <p>
                Catering these services with utmost patient respect and hospitality, crossing 25 years from its starting, Kamala Dental® has become a sought after centre for the correction of complicated dental and maxillofacial deformities. Full mouth rehabilitation using multidisciplinary approach, smile makeovers and face correction jaw surgeries are frequently done here.
              </p>
              <p>
                Kamala Dental® is recognized as a regional training centre by Institute for Implants and Cosmetic Dentistry (IICD) offering training in various specialties of Dentistry like Oral Implantology, Laser Dentistry, Minor surgical procedures, Advanced Endodontics, Orthodontics for general practitioners, Digital Dentistry and Comprehensive General Dentistry training.
              </p>
              <p>
                Meticulous documentation and research activities of Kamala Dental® gained acceptance from world renowned organisations like MINEC (MegaGen International Network of Education and Clinical Research) and from many other Universities in India and abroad. Currently two research programmes are in progress in accordance with the guidelines of PhD programs of Santosh University Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Policy, Prayer Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values & Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              Our vision is to create highest standard of dental and surgical care, providing safest and fastest treatment options making it affordable to every class of population.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              Team Kamala Dental is committed to thrive for the best in providing fool proof diagnosis, safest and fastest treatment procedures, improving oral health and rehabilitation of mouth and face at large, ensuring reliable and enduring aesthetics and function. We build our relation with patient based on honesty, trust and mutual respect.
            </p>
          </div>
          
          {/* Policy */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Policy</h3>
            </div>
            <p className="text-gray-600">
              At Kamala Dental, we are committed to upholding the highest standards of dental care by strictly following all safety and hygiene protocols. We utilize modern equipment and infrastructure that meet international standards of care. Our quality management system ensures transparency in both information and pricing. Our policy focuses on developing and implementing a flawless operational system to enhance patient satisfaction.
            </p>
          </div>
          
          {/* Prayer */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Prayer</h3>
            </div>
            <p className="text-gray-600">
              Almighty Lord, thank you for this new day and opportunity to work together. Be with us as we work today and henceforth. Bless all those who are present here and all the members of Kamala Dental family. Bless all those who are working, and all who worked here before, in bringing success and prosperity to this hospital. Guide our doctors to use their best knowledge and wisdom to make the correct diagnosis and treat our patients with love and compassion. Let our successful treatments and patient satisfaction bring glory to you. Amen.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-12 py-16 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="text-xl mb-8">
            Schedule an appointment today and let our expert team take care of your dental health
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-pink-500 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
              Book an Appointment
            </Link>
            <Link href="/contact" className="border border-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 