import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-pink-500 text-white px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
                <div>
                    <h2 className="text-2xl font-bold mb-4">KIADental</h2>
                    <p className="mb-4">
                        Dental is a full-service dental clinic providing high-quality dental care to patients of all ages.
                    </p>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Want to visit our clinic?</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">Services</Link>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +1-800-123-4567
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@kiadental.com
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            123 Dental Street, Suite 100, Detroit, MI 48226
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                    <ul className="space-y-2">
                        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                        <li>Saturday: 9:00 AM - 4:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center max-w-screen-2xl mx-auto">
                <p>&copy; {new Date().getFullYear()} KIADental. All rights reserved.</p>
            </div>
        </footer>
    );
}