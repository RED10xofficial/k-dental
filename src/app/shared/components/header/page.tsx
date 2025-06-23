"use client";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import BookNowButton from "../book-now-button";

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

const specialityMenus: MenuItem[] = [
  {
    name: "dental-implants",
    displayText: "Dental Implants",
    link: "/implants",
    childMenus: [],
  },
  {
    name: "aligners",
    displayText: "Aligners",
    link: "/aligners",
    childMenus: [],
  },
  {
    name: "smile-design",
    displayText: "Smile Makeover",
    link: "/smile-makeover",
    childMenus: [],
  },
];

const aboutChildMenus: MenuItem[] = [
  {
    name: "our-story",
    displayText: "Our Story",
    link: "/our-story",
    childMenus: [],
  },
  {
    name: "chief-surgeon",
    displayText: "Our Chief Surgeon",
    link: "/our-chief-surgeon",
    childMenus: [],
  },
  {
    name: "our-team",
    displayText: "Our Team",
    link: "/our-team",
    childMenus: [],
  },
  // {
  //   name: "gallery",
  //   displayText: "Our Gallery",
  //   link: "/gallery",
  //   childMenus: [],
  // },
  {
    name: "blog",
    displayText: "Our Blog",
    link: "/our-blogs",
    childMenus: [],
  },
];

const problemsWeTreatChildMenus: MenuItem[] = [
  {
    name: "imperfections-in-smile",
    displayText: "Imperfections in Smile",
    link: "/imperfections-in-smile",
    childMenus: [],
  },
  {
    name: "jaw-length-discrepancies",
    displayText: "Jaw Length Discrepancies",
    link: "/jaw-length-descrepancies",
    childMenus: [],
  },
  {
    name: "missing-teeth",
    displayText: "Missing Teeth",
    link: "/missing-teeth",
    childMenus: [],
  },
  {
    name: "gaps-in-teeth",
    displayText: "Gaps in Teeth",
    link: "/gaps-in-teeth",
    childMenus: [],
  },
  {
    name: "crooked-teeth",
    displayText: "Crooked Teeth",
    link: "/crooked-teeth",
    childMenus: [],
  },
  {
    name: "stained-teeth",
    displayText: "Stained Teeth",
    link: "/stained-teeth",
    childMenus: [],
  },
  {
    name: "chipped-cracked-tooth",
    displayText: "Chipped / Cracked Tooth",
    link: "/chipped-cracked-tooth",
    childMenus: [],
  },
  {
    name: "dental-pain",
    displayText: "Dental Pain",
    link: "/dental-pain",
    childMenus: [],
  },
  {
    name: "tm-joint-diseases",
    displayText: "TM Joint Diseases",
    link: "/tm-joint-diseases",
    childMenus: [],
  },
  {
    name: "gum-diseases",
    displayText: "Gum Diseases",
    link: "/gum-disease",
    childMenus: [],
  },
  {
    name: "bad-breath",
    displayText: "Bad Breath / Halitosis",
    link: "/bad-breath",
    childMenus: [],
  },
  {
    name: "sensitivity",
    displayText: "Sensitivity",
    link: "/sensitivity",
    childMenus: [],
  },
  {
    name: "dental-problems-in-kids",
    displayText: "Dental Problems in Kids",
    link: "/dental-problems-in-kids",
    childMenus: [],
  },
  {
    name: "teeth-grinding",
    displayText: "Teeth Grinding",
    link: "/teeth-grinding",
    childMenus: [],
  },
  {
    name: "habits-in-children",
    displayText: "Habits in Children",
    link: "/habits-in-children",
    childMenus: [],
  },
  {
    name: "dental-anxiety",
    displayText: "Dental Anxiety",
    link: "/dental-anxiety",
    childMenus: [],
  },
  {
    name: "oral-cancer",
    displayText: "Oral Cancer",
    link: "/oral-cancer",
    childMenus: [],
  },
  {
    name: "jaw-fracture",
    displayText: "Jaw Fracture",
    link: "/jaw-fracture",
    childMenus: [],
  },
  {
    name: "crooked-painful-wisdom-tooth",
    displayText: "Crooked/Painful Wisdom Tooth",
    link: "/crooked-painful-wisdom-tooth",
    childMenus: [],
  },
];

// const servicesChildMenus: MenuItem[] = [
//   {
//     name: "maxillo-facial-surgery",
//     displayText: "Maxillo Facial Surgery",
//     link: "/maxillo-facial-surgery",
//     childMenus: [],
//   },
//   {
//     name: "cosmetic-jaw-surgery",
//     displayText: "Cosmetic Jaw Surgery",
//     link: "/cosmetic-jaw-surgery",
//     childMenus: [],
//   },
//   {
//     name: "dental-implants",
//     displayText: "Dental Implants",
//     link: "/dental-implants",
//     childMenus: [],
//   },
//   {
//     name: "one-day-dentistry",
//     displayText: "One Day Dentistry",
//     link: "/one-day-dentistry",
//     childMenus: [],
//   },
//   {
//     name: "digital-smile-designing",
//     displayText: "Digital Smile Designing",
//     link: "/digital-smile-designing",
//     childMenus: [],
//   },
//   {
//     name: "full-mouth-rehabilitation",
//     displayText: "Full Mouth Rehabilitation",
//     link: "/full-mouth-rehabilitation",
//     childMenus: [],
//   },
//   {
//     name: "tooth-extraction",
//     displayText: "Tooth Extraction",
//     link: "/tooth-extraction",
//     childMenus: [],
//   },
//   {
//     name: "laser-dentistry",
//     displayText: "Laser Dentistry",
//     link: "/laser-dentistry",
//     childMenus: [],
//   },
//   {
//     name: "laser-teeth-whitening",
//     displayText: "Laser Teeth Whitening",
//     link: "/laser-teeth-whitening",
//     childMenus: [],
//   },
//   {
//     name: "advanced-root-canal-treatment",
//     displayText: "Advanced Root Canal Treatment",
//     link: "/advanced-root-canal-treatment",
//     childMenus: [],
//   },
//   {
//     name: "gum-care",
//     displayText: "Gum Care",
//     link: "/gum-care",
//     childMenus: [],
//   },
//   {
//     name: "gummy-smile-correction",
//     displayText: "Gummy Smile Correction",
//     link: "/gummy-smile-correction",
//     childMenus: [],
//   },
//   {
//     name: "clear-aligners",
//     displayText: "Clear Aligners",
//     link: "/clear-aligners",
//     childMenus: [],
//   },
//   {
//     name: "teeth-cleaning",
//     displayText: "Teeth Cleaning",
//     link: "/teeth-cleaning",
//     childMenus: [],
//   },
//   {
//     name: "orthodontic-treatments",
//     displayText: "Orthodontic Treatments",
//     link: "/orthodontic-treatments",
//     childMenus: [],
//   },
//   {
//     name: "tm-joint-treatments",
//     displayText: "TM Joint Treatments",
//     link: "/tm-joint-treatments",
//     childMenus: [],
//   },
//   {
//     name: "pediatric-dental-care",
//     displayText: "Pediatric Dental Care",
//     link: "/pediatric-dental-care",
//     childMenus: [],
//   },
//   {
//     name: "dental-care-for-elderly",
//     displayText: "Dental Care for Elderly",
//     link: "/dental-care-for-elderly",
//     childMenus: [],
//   },
//   {
//     name: "tooth-jewellery",
//     displayText: "Tooth Jewellery",
//     link: "/tooth-jewellery",
//     childMenus: [],
//   },
//   {
//     name: "tooth-coloured-fillings",
//     displayText: "Tooth Coloured Fillings",
//     link: "/tooth-coloured-fillings",
//     childMenus: [],
//   },
//   {
//     name: "veneers-crowns-bridges",
//     displayText: "Veneers, Crowns and Bridges",
//     link: "/veneers-crowns-bridges",
//     childMenus: [],
//   },
// ];

// const facilitiesChildMenus: MenuItem[] = [
//   {
//     name: "one-day-dentistry-cerec",
//     displayText: "One Day Dentistry – CEREC",
//     link: "/one-day-dentistry-cerec",
//     childMenus: [],
//   },
//   {
//     name: "cbct-3d-scan",
//     displayText: "CBCT - 3D Scan",
//     link: "/cbct-3d-scan",
//     childMenus: [],
//   },
//   {
//     name: "digital-treatment-planning",
//     displayText: "Digital Treatment Planning",
//     link: "/digital-treatment-planning",
//     childMenus: [],
//   },
//   {
//     name: "high-end-dental-operatories",
//     displayText: "High-End Dental Operatories",
//     link: "/high-end-dental-operatories",
//     childMenus: [],
//   },
//   {
//     name: "surgical-operatory",
//     displayText: "Surgical Operatory",
//     link: "/surgical-operatory",
//     childMenus: [],
//   },
//   {
//     name: "conscious-sedation",
//     displayText: "Conscious Sedation",
//     link: "/conscious-sedation",
//     childMenus: [],
//   },
//   {
//     name: "digital-records",
//     displayText: "Digital Records",
//     link: "/digital-records",
//     childMenus: [],
//   },
//   {
//     name: "digital-radiographs",
//     displayText: "Digital Radiographs",
//     link: "/digital-radiographs",
//     childMenus: [],
//   },
//   {
//     name: "intra-oral-scanners",
//     displayText: "Intra Oral Scanners",
//     link: "/intra-oral-scanners",
//     childMenus: [],
//   },
//   {
//     name: "surgical-microscope",
//     displayText: "Surgical Microscope",
//     link: "/surgical-microscope",
//     childMenus: [],
//   },
//   {
//     name: "3d-printer",
//     displayText: "3D Printer",
//     link: "/3d-printer",
//     childMenus: [],
//   },
//   {
//     name: "pharmacy",
//     displayText: "Pharmacy",
//     link: "/pharmacy",
//     childMenus: [],
//   },
//   {
//     name: "medical-team",
//     displayText: "Medical Team",
//     link: "/medical-team",
//     childMenus: [],
//   },
//   { name: "library", displayText: "Library", link: "/library", childMenus: [] },
//   {
//     name: "conference-hall",
//     displayText: "Conference Hall",
//     link: "/conference-hall",
//     childMenus: [],
//   },
//   {
//     name: "green-dentistry",
//     displayText: "Green Dentistry",
//     link: "/green-dentistry",
//     childMenus: [],
//   },
// ];

export default function Header({
  menuItems = [
    {
      name: "home",
      displayText: "Home",
      link: "/",
      childMenus: [],
    },
    {
      name: "about",
      displayText: "About us",
      link: "",
      childMenus: aboutChildMenus,
    },
    {
      name: "our-specilizations",
      displayText: "Speclializations",
      link: "",
      childMenus: specialityMenus,
    },
    {
      name: "problemsWeTreat",
      displayText: "Problems We Treat",
      link: "",
      childMenus: problemsWeTreatChildMenus,
    },
    {
      name: "services",
      displayText: "Services",
      link: "/services",
      childMenus: [],
    },
    {
      name: "facilities",
      displayText: "Facilities",
      link: "/facilities",
      childMenus: [],
    },
    {
      name: "international-clients",
      displayText: "International Clients",
      link: "/international-clients",
      childMenus: [],
    },
  ],
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleChildMenuClick = () => {
    // Close the hover menu for desktop
    setHoveredMenu(null);
    // Close the mobile menu
    setMobileMenuOpen(false);
  };

  // Helper function to check if a menu item is active
  const isMenuItemActive = (item: MenuItem): boolean => {
    // Check if the main menu link matches
    if (item.link && pathname === item.link) {
      return true;
    }

    // Check if any child menu link matches
    return item.childMenus.some((child) => pathname === child.link);
  };

  // Helper function to check if a child menu item is active
  const isChildMenuActive = (childLink: string): boolean => {
    return pathname === childLink;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to get popover position based on index
  const getPopoverPosition = (index: number) => {
    // For first and second items, align left
    if (index <= 1) {
      return "left-0 origin-top-left";
    }
    // For last items, align right to prevent viewport overflow
    return "right-0 origin-top-right";
  };

  // Function to get arrow position based on index
  const getArrowPosition = (index: number) => {
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
  const getPopoverStyle = (menuLength: number) => {
    // Set width based on columns - more compact for larger menus
    const columns = calculateColumns(menuLength);
    const baseWidth = menuLength > 15 ? 160 : 180; // Smaller width for larger menus
    const width = columns * baseWidth;

    return {
      width: `${width}px`,
      maxWidth: "min(calc(100vw - 40px), 600px)", // More restrictive max-width
      maxHeight: "70vh",
      overflowY: "auto" as const,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    };
  };

  return (
    <>
      <header
        className={`transition-all duration-500 ease-in-out z-50 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "relative bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="KIA Dental Logo"
                    width={150}
                    height={50}
                    className=""
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const isActive = isMenuItemActive(item);

                return (
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
                              className={`group inline-flex items-center px-2 py-2 text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none ${
                                isActive
                                  ? "text-pink-600 "
                                  : hoveredMenu === item.name || open
                                  ? "text-pink-600 "
                                  : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                              }`}
                              aria-expanded={hoveredMenu === item.name}
                            >
                              {item.displayText}
                              <svg
                                className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                                  hoveredMenu === item.name
                                    ? "rotate-180 text-pink-600"
                                    : isActive
                                    ? "text-pink-600"
                                    : "text-gray-400 group-hover:text-pink-500"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              show={hoveredMenu === item.name}
                              enter="transition ease-out duration-300"
                              enterFrom="opacity-0 translate-y-4 scale-95"
                              enterTo="opacity-100 translate-y-0 scale-100"
                              leave="transition ease-in duration-200"
                              leaveFrom="opacity-100 translate-y-0 scale-100"
                              leaveTo="opacity-0 translate-y-4 scale-95"
                            >
                              <Popover.Panel
                                className={`absolute ${getPopoverPosition(
                                  index
                                )} z-50 mt-4 bg-white rounded-2xl border border-gray-100 overflow-hidden`}
                                style={getPopoverStyle(item.childMenus.length)}
                                static
                              >
                                {/* Modern gradient border effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50"></div>

                                {/* Triangle arrow */}
                                <div
                                  className={`absolute top-0 ${getArrowPosition(
                                    index
                                  )} transform -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-gray-100`}
                                ></div>

                                <div className="relative bg-white/95 backdrop-blur-sm">
                                  <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                                      {item.displayText}
                                    </h3>
                                    <div
                                      className="grid gap-1"
                                      style={{
                                        gridTemplateColumns: `repeat(${calculateColumns(
                                          item.childMenus.length
                                        )}, 1fr)`,
                                      }}
                                    >
                                      {item.childMenus.map((child) => {
                                        const isChildActive = isChildMenuActive(
                                          child.link
                                        );

                                        return (
                                          <Link
                                            key={child.name}
                                            href={child.link}
                                            className={`group flex items-center p-3 rounded-xl transition-all duration-300 border ${
                                              isChildActive
                                                ? "bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200 text-pink-700"
                                                : "border-transparent hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-pink-100"
                                            }`}
                                            onClick={handleChildMenuClick}
                                          >
                                            <div className="flex-1">
                                              <div
                                                className={`text-sm font-medium transition-colors duration-300 ${
                                                  isChildActive
                                                    ? "text-pink-700"
                                                    : "text-gray-900 group-hover:text-pink-600"
                                                }`}
                                              >
                                                {child.displayText}
                                              </div>
                                            </div>
                                            <svg
                                              className={`w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300 ${
                                                isChildActive
                                                  ? "text-pink-600"
                                                  : "text-gray-400 group-hover:text-pink-500"
                                              }`}
                                              fill="none"
                                              stroke="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                              />
                                            </svg>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ) : (
                      <Link
                        href={item.link}
                        className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-pink-600 "
                            : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.displayText}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* CTA Button */}
              <div className="ml-6 pl-6 border-l border-gray-200">
                <BookNowButton variant="hero" size="small" className="!py-2">
                  Book now
                </BookNowButton>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={mobileMenuOpen}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-full"
        >
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = isMenuItemActive(item);

                  return (
                    <Popover key={item.name} className="relative">
                      {({ open }) => (
                        <>
                          {item.childMenus.length > 0 ? (
                            <>
                              <Popover.Button
                                className={`w-full flex items-center justify-between p-4 text-left font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
                                  isActive
                                    ? " text-pink-700 border "
                                    : open
                                    ? " text-pink-600"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                <span>{item.displayText}</span>
                                <svg
                                  className={`h-5 w-5 transition-transform duration-300 ${
                                    open
                                      ? "rotate-180 text-pink-600"
                                      : isActive
                                      ? "text-pink-600"
                                      : "text-gray-400"
                                  }`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </Popover.Button>

                              <Transition
                                show={open}
                                enter="transition duration-300 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-200 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              >
                                <Popover.Panel
                                  static
                                  className="mt-2 ml-4 space-y-1 border-l-2 border-pink-100 pl-4"
                                >
                                  {item.childMenus.map((child) => {
                                    const isChildActive = isChildMenuActive(
                                      child.link
                                    );

                                    return (
                                      <Link
                                        key={child.name}
                                        href={child.link}
                                        className={`block p-3 text-sm rounded-lg transition-all duration-300 ${
                                          isChildActive
                                            ? "text-pink-700 font-medium"
                                            : "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                                        }`}
                                        onClick={handleChildMenuClick}
                                      >
                                        {child.displayText}
                                      </Link>
                                    );
                                  })}
                                </Popover.Panel>
                              </Transition>
                            </>
                          ) : (
                            <Link
                              href={item.link}
                              className={`block p-4 font-semibold rounded-xl transition-all duration-300 ${
                                isActive
                                  ? "text-pink-700 "
                                  : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              {item.displayText}
                            </Link>
                          )}
                        </>
                      )}
                    </Popover>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link
                    href="/appointment"
                    className="block w-full text-center px-6 py-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    onClick={toggleMobileMenu}
                  >
                    Book Appointment
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </Transition>
      </header>

      {/* Spacer for fixed header */}
      {isScrolled && <div className="h-20"></div>}
    </>
  );
}
