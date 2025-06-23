import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sunny Sancheti",
    specialization: "Digital Expert & Implantologist",
    image: "/images/doctors/sunny.jpeg",
    description: "Implantologist & Smilemakeover / Prosthetic Expert",
  },
  {
    name: "Dr. Radhika Jadhav",
    specialization: "Endodontist & Implantologist",
    image: "/images/doctors/radhika.jpg",
    description: "ROOT CANAL & Smile Expert",
  },
  {
    name: "Dr. Abdul Hameed",
    specialization: "Maxillofacial Surgeon",
    image: "/images/doctors/abdul_hameed.jpeg",
    description:
      "Dental & Craniofacial Reconstruction | TMJ & Orthognathic Surgery Expert",
  },
  {
    name: "Dr. Rachna Darak",
    specialization: "MDS Orthodontics",
    image: "/images/doctors/rachna.jpeg",
    description: "Specialized in aligners",
  },
  {
    name: "Dr. Satyajit Wadje",
    specialization: "Oral & Maxillofacial Surgeon",
    image: "/images/doctors/satyajit.jpeg",
    description: "Facial Trauma | Dental Implant | Oral Cancer",
  },
  {
    name: "Dr. Prasanna Bhandare",
    specialization: "Implantologist & Endodontist",
    image: "/images/doctors/prasanna.jpeg",
    description: "25+ Years Experience",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header Section */}
      <div className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-rose-100/30"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-pink-600">Expert</span> Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet our dedicated team of dental professionals committed to
            providing exceptional care with the latest technology and
            techniques.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-pink-100"
            >
              {/* Doctor Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {doctor.name}
                </h3>

                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
                    {doctor.specialization}
                  </span>
                </div>

                {doctor.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctor.description}
                  </p>
                )}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-400 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your consultation today and experience exceptional dental
            care.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
