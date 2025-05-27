'use client';
import { useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';

// Define the menu item interface
interface MenuItem {
  name: string;
  displayText: string;
  link: string;
  childMenus: MenuItem[];
}

// Props interface for the Header component
interface HeaderProps {
  menuItems?: MenuItem[];
}
const aboutChildMenus: MenuItem[] = [
  { name: 'our-story', displayText: 'Our Story', link: '/our-story', childMenus: [] },
  { name: 'chief-surgeon', displayText: 'Our Chief Surgeon', link: '/chief-surgeon', childMenus: [] },
  { name: 'our-team', displayText: 'Our Team', link: '/our-team', childMenus: [] },
  { name: 'gallery', displayText: 'Our Gallery', link: '/gallery', childMenus: [] },
  { name: 'blog', displayText: 'Our Blog', link: '/blog', childMenus: [] }
];
const problemsWeTreatChildMenus: MenuItem[] = [
  { name: 'imperfections-in-smile', displayText: 'Imperfections in Smile', link: '/imperfections-in-smile', childMenus: [] },
  { name: 'jaw-length-discrepancies', displayText: 'Jaw Length Discrepancies', link: '/jaw-length-descrepancies', childMenus: [] },
  { name: 'missing-teeth', displayText: 'Missing Teeth', link: '/missing-teeth', childMenus: [] },
  { name: 'gaps-in-teeth', displayText: 'Gaps in Teeth', link: '/gaps-in-teeth', childMenus: [] },
  { name: 'crooked-teeth', displayText: 'Crooked Teeth', link: '/crooked-teeth', childMenus: [] },
  { name: 'stained-teeth', displayText: 'Stained Teeth', link: '/stained-teeth', childMenus: [] },
  { name: 'chipped-cracked-tooth', displayText: 'Chipped / Cracked Tooth', link: '/chipped-cracked-tooth', childMenus: [] },
  { name: 'dental-pain', displayText: 'Dental Pain', link: '/dental-pain', childMenus: [] },
  { name: 'tm-joint-diseases', displayText: 'TM Joint Diseases', link: '/tm-joint-diseases', childMenus: [] },
  { name: 'gum-diseases', displayText: 'Gum Diseases', link: '/gum-diseases', childMenus: [] },
  { name: 'bad-breath', displayText: 'Bad Breath / Halitosis', link: '/bad-breath', childMenus: [] },
  { name: 'sensitivity', displayText: 'Sensitivity', link: '/sensitivity', childMenus: [] },
  { name: 'dental-problems-in-kids', displayText: 'Dental Problems in Kids', link: '/dental-problems-in-kids', childMenus: [] },
  { name: 'teeth-grinding', displayText: 'Teeth Grinding', link: '/teeth-grinding', childMenus: [] },
  { name: 'habits-in-children', displayText: 'Habits in Children', link: '/habits-in-children', childMenus: [] },
  { name: 'dental-anxiety', displayText: 'Dental Anxiety', link: '/dental-anxiety', childMenus: [] },
  { name: 'oral-cancer', displayText: 'Oral Cancer', link: '/oral-cancer', childMenus: [] },
  { name: 'jaw-fracture', displayText: 'Jaw Fracture', link: '/jaw-fracture', childMenus: [] },
  { name: 'crooked-painful-wisdom-tooth', displayText: 'Crooked/Painful Wisdom Tooth', link: '/crooked-painful-wisdom-tooth', childMenus: [] },
];
const servicesChildMenus: MenuItem[] = [
  { name: 'maxillo-facial-surgery', displayText: 'Maxillo Facial Surgery', link: '/maxillo-facial-surgery', childMenus: [] },
  { name: 'cosmetic-jaw-surgery', displayText: 'Cosmetic Jaw Surgery', link: '/cosmetic-jaw-surgery', childMenus: [] },
  { name: 'dental-implants', displayText: 'Dental Implants', link: '/dental-implants', childMenus: [] },
  { name: 'one-day-dentistry', displayText: 'One Day Dentistry', link: '/one-day-dentistry', childMenus: [] },
  { name: 'digital-smile-designing', displayText: 'Digital Smile Designing', link: '/digital-smile-designing', childMenus: [] },
  { name: 'full-mouth-rehabilitation', displayText: 'Full Mouth Rehabilitation', link: '/full-mouth-rehabilitation', childMenus: [] },
  { name: 'tooth-extraction', displayText: 'Tooth Extraction', link: '/tooth-extraction', childMenus: [] },
  { name: 'laser-dentistry', displayText: 'Laser Dentistry', link: '/laser-dentistry', childMenus: [] },
  { name: 'laser-teeth-whitening', displayText: 'Laser Teeth Whitening', link: '/laser-teeth-whitening', childMenus: [] },
  { name: 'advanced-root-canal-treatment', displayText: 'Advanced Root Canal Treatment', link: '/advanced-root-canal-treatment', childMenus: [] },
  { name: 'gum-care', displayText: 'Gum Care', link: '/gum-care', childMenus: [] },
  { name: 'gummy-smile-correction', displayText: 'Gummy Smile Correction', link: '/gummy-smile-correction', childMenus: [] },
  { name: 'clear-aligners', displayText: 'Clear Aligners', link: '/clear-aligners', childMenus: [] },
  { name: 'teeth-cleaning', displayText: 'Teeth Cleaning', link: '/teeth-cleaning', childMenus: [] },
  { name: 'orthodontic-treatments', displayText: 'Orthodontic Treatments', link: '/orthodontic-treatments', childMenus: [] },
  { name: 'tm-joint-treatments', displayText: 'TM Joint Treatments', link: '/tm-joint-treatments', childMenus: [] },
  { name: 'pediatric-dental-care', displayText: 'Pediatric Dental Care', link: '/pediatric-dental-care', childMenus: [] },
  { name: 'dental-care-for-elderly', displayText: 'Dental Care for Elderly', link: '/dental-care-for-elderly', childMenus: [] },
  { name: 'tooth-jewellery', displayText: 'Tooth Jewellery', link: '/tooth-jewellery', childMenus: [] },
  { name: 'tooth-coloured-fillings', displayText: 'Tooth Coloured Fillings', link: '/tooth-coloured-fillings', childMenus: [] },
  { name: 'veneers-crowns-bridges', displayText: 'Veneers, Crowns and Bridges', link: '/veneers-crowns-bridges', childMenus: [] },
];
const facilitiesChildMenus: MenuItem[] = [
  { name: 'one-day-dentistry-cerec', displayText: 'One Day Dentistry – CEREC', link: '/one-day-dentistry-cerec', childMenus: [] },
  { name: 'cbct-3d-scan', displayText: 'CBCT - 3D Scan', link: '/cbct-3d-scan', childMenus: [] },
  { name: 'digital-treatment-planning', displayText: 'Digital Treatment Planning', link: '/digital-treatment-planning', childMenus: [] },
  { name: 'high-end-dental-operatories', displayText: 'High-End Dental Operatories', link: '/high-end-dental-operatories', childMenus: [] },
  { name: 'surgical-operatory', displayText: 'Surgical Operatory', link: '/surgical-operatory', childMenus: [] },
  { name: 'conscious-sedation', displayText: 'Conscious Sedation', link: '/conscious-sedation', childMenus: [] },
  { name: 'digital-records', displayText: 'Digital Records', link: '/digital-records', childMenus: [] },
  { name: 'digital-radiographs', displayText: 'Digital Radiographs', link: '/digital-radiographs', childMenus: [] },
  { name: 'intra-oral-scanners', displayText: 'Intra Oral Scanners', link: '/intra-oral-scanners', childMenus: [] },
  { name: 'surgical-microscope', displayText: 'Surgical Microscope', link: '/surgical-microscope', childMenus: [] },
  { name: '3d-printer', displayText: '3D Printer', link: '/3d-printer', childMenus: [] },
  { name: 'pharmacy', displayText: 'Pharmacy', link: '/pharmacy', childMenus: [] },
  { name: 'medical-team', displayText: 'Medical Team', link: '/medical-team', childMenus: [] },
  { name: 'library', displayText: 'Library', link: '/library', childMenus: [] },
  { name: 'conference-hall', displayText: 'Conference Hall', link: '/conference-hall', childMenus: [] },
  { name: 'green-dentistry', displayText: 'Green Dentistry', link: '/green-dentistry', childMenus: [] },
];


export default function Header({ 
  menuItems = [
    { name: 'about', displayText: 'About us', link: '', childMenus: aboutChildMenus },
    { name: 'problemsWeTreat', displayText: 'Problems We Treat', link: '', childMenus: problemsWeTreatChildMenus },
    { name: 'services', displayText: 'Services', link: '', childMenus: servicesChildMenus },
    { name: 'facilities', displayText: 'Facilities', link: '', childMenus: facilitiesChildMenus },
    { name: 'register', displayText: 'Register', link: '/register', childMenus: [] },
  ]
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleChildMenuClick = () => {
    // Close the hover menu for desktop
    setHoveredMenu(null);
    // Close the mobile menu
    setMobileMenuOpen(false);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to get popover position based on index
  const getPopoverPosition = (index: number, totalItems: number) => {
    // For first and second items, align left
    if (index <= 1) {
      return "left-0 origin-top-left";
    }
    // For last items, align right to prevent viewport overflow
    return "right-0 origin-top-right";
  };

  // Function to get arrow position based on index
  const getArrowPosition = (index: number, totalItems: number) => {
    // For first and second items, arrow at left
    if (index <= 1) {
      return "left-12 sm:left-16";
    }
    // For last items, arrow at right
    return "right-12 sm:right-16";
  };

  // Calculate number of columns based on menu length
  const calculateColumns = (menuLength: number) => {
    // Fewer columns to prevent wide menus
    if (menuLength <= 5) {
      return 1;
    } else if (menuLength <= 10) {
      return 2; 
    } else if (menuLength <= 21) {
      return 3;
    } else {
      return 4; // Max 4 columns
    }
  };

  // Position the popover and adjust width based on menu length
  const getPopoverStyle = (menuLength: number, index: number) => {
    // Set width based on columns - more compact for larger menus
    const columns = calculateColumns(menuLength);
    const baseWidth = menuLength > 15 ? 160 : 180; // Smaller width for larger menus
    const width = columns * baseWidth;
    
    return {
      width: `${width}px`,
      maxWidth: 'min(calc(100vw - 40px), 600px)', // More restrictive max-width
      maxHeight: '70vh',
      overflowY: 'auto' as const,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    };
  };

  return (
    <>
      <header className={`py-4 px-6 md:px-12 flex items-center justify-between ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 bg-white/70 shadow-md backdrop-blur-md transition-all duration-500 ease-in-out' 
          : 'relative bg-white'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="KIA Dental Logo" 
              width={150} 
              height={40} 
              className="mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {item.childMenus.length > 0 ? (
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`text-base hover:text-pink-500 transition-colors flex items-center py-2 whitespace-nowrap focus:outline-none ${
                          hoveredMenu === item.name ? 'text-pink-500' : ''
                        }`}
                        aria-expanded={hoveredMenu === item.name}
                      >
                        {item.displayText}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 ml-1 transition-transform ${hoveredMenu === item.name ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        show={hoveredMenu === item.name}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel 
                          className={`absolute ${getPopoverPosition(index, menuItems.length)} z-50 mt-3 bg-white shadow-xl rounded-md p-3 overflow-hidden`}
                          style={getPopoverStyle(item.childMenus.length, index)}
                          static
                        >
                          {/* Triangle arrow pointing to parent menu */}
                          <div 
                            className={`absolute top-0 ${getArrowPosition(index, menuItems.length)} transform -translate-y-1/2 rotate-45 w-4 h-4 bg-white`}
                            style={{ boxShadow: '-3px -3px 5px rgba(0, 0, 0, 0.04)' }}
                          ></div>
                          
                          <div 
                            className="grid relative z-10" 
                            style={{ 
                              gridTemplateColumns: `repeat(${calculateColumns(item.childMenus.length)}, 1fr)`,
                              gap: '0.25rem',
                              columnGap: '0.75rem'
                            }}
                          >
                            {item.childMenus.map((child, childIndex) => (
                              <Link 
                                key={child.name}
                                href={child.link}
                                className="p-1.5 hover:text-pink-500 transition-colors duration-200 border-b border-gray-100 text-sm break-words"
                                onClick={handleChildMenuClick}
                              >
                                {child.displayText}
                              </Link>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <Link 
                  href={item.link}
                  className="text-base hover:text-pink-500 transition-colors py-2 whitespace-nowrap"
                >
                  {item.displayText}
                </Link>
              )}
            </div>
          ))}
          <Link 
            href="/appointment" 
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="KIA Dental Logo" 
                  width={100} 
                  height={32} 
                  className="mr-2"
                />
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 focus:outline-none"
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Popover key={item.name} className="relative">
                  {({ open }) => (
                    <>
                      {item.childMenus.length > 0 ? (
                        <>
                          <Popover.Button 
                            className="flex items-center justify-between text-base hover:text-pink-500 transition-colors cursor-pointer w-full focus:outline-none"
                          >
                            <span className="py-1">{item.displayText}</span>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </Popover.Button>
                          
                          <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Popover.Panel static className="ml-4 mt-1 pl-2 border-l border-gray-200 flex flex-col space-y-1 max-h-64 overflow-y-auto">
                              {item.childMenus.map((child) => (
                                <Link 
                                  key={child.name}
                                  href={child.link}
                                  className="text-sm py-1 hover:text-pink-500 transition-colors duration-200 break-words"
                                  onClick={handleChildMenuClick}
                                >
                                  {child.displayText}
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      ) : (
                        <Link 
                          href={item.link}
                          className="py-1 block w-full text-base hover:text-pink-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.displayText}
                        </Link>
                      )}
                    </>
                  )}
                </Popover>
              ))}
              <Link 
                href="/appointment" 
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors text-center mt-4"
                onClick={toggleMobileMenu}
              >
                Appointment
              </Link>
            </nav>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </header>
      
      {/* Placeholder to prevent content jump when header is fixed */}
      {isScrolled && <div className="h-[72px] md:h-[76px]"></div>}
    </>
  );
}