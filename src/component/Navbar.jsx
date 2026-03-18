// // components/Navbar.jsx
// import React from "react";
// import Eduhawk from "../assets/Eduhawk.png"; // Make sure path is correct

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-5 gap-5 md:gap-0">
//           {/* Logo + Brand Name Area */}
//           <div className="flex items-center gap-3 md:gap-4">
//             <div className="relative flex items-center">
//               {/* Optional subtle background orb / glow effect behind logo */}
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>

//               <img
//                 src={Eduhawk}
//                 alt="Eduhawk Logo"
//                 className="h-10 md:h-12 w-auto object-contain"
//               />
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-8 lg:gap-10 text-sm md:text-base font-medium">
//             <a
//               href="/"
//               className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group"
//             >
//               Home
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <a
//               href="/about"
//               className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group"
//             >
//               About
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <div className="relative group">
//               <a className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative whitespace-nowrap flex items-center gap-1">
//                 Medical Colleges
//                 <svg
//                   className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//               </a>

//               {/* Level 1: Main Dropdown - Vertical stacking */}
//               <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 min-w-[300px]">
//                 {/* MBBS India - with nested hover */}
//                 <div className="relative group/sub">
//                   <div className="px-4 py-2 text-[#F48C06] font-semibold text-base flex justify-between items-center hover:bg-orange-50 cursor-pointer">
//                     <a
//                       href="/allcollege"
//                       className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       MBBS India
//                     </a>
//                     <svg
//                       className="w-4 h-4 transition-transform group-hover/sub:rotate-180"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     ></svg>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-gray-100 my-1"></div>

//                 {/* MBBS Abroad - with nested hover */}
//                 <div className="relative group/sub">
//                   <div className="px-4 py-2 text-[#F48C06] font-semibold text-base flex justify-between items-center hover:bg-orange-50 cursor-pointer">
//                     MBBS Abroad
//                     <svg
//                       className="w-4 h-4 transition-transform group-hover/sub:rotate-180"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                   {/* Level 2: Sub-dropdown for MBBS Abroad - opens to right */}
//                   <div className="absolute left-full top-0 ml-1 bg-white rounded-md shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 border border-gray-200 w-64 max-h-96 overflow-y-auto">
//                     <a
//                       href="/mbbs-abroad/russia"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       RUSSIA
//                     </a>
//                     <a
//                       href="/mbbs-abroad/bangladesh"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       BANGLADESH
//                     </a>
//                     <a
//                       href="/mbbs-abroad/nepal"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       NEPAL
//                     </a>
//                     <a
//                       href="/mbbs-abroad/kazakhstan"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       Kazakhstan
//                     </a>

//                     <a
//                       href="/mbbs-abroad/kyrgyzstan"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       KYRGYZSTAN
//                     </a>

//                     <a
//                       href="/mbbs-abroad/uzbekistan"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       UZBEKISTAN
//                     </a>

//                     <a
//                       href="/mbbs-abroad/tajikisatin"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       TAJIKISATN
//                     </a>

//                     <a
//                       href="/mbbs-abroad/egypt"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       EGYPT
//                     </a>

//                     <a
//                       href="/mbbs-abroad/georgia"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       GEORGIA
//                     </a>

//                     <a
//                       href="/mbbs-abroad/vintnam"
//                       className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                     >
//                       VINTNAM
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative group">
//               <a
//                 href="/blog"
//                 className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 flex items-center gap-1"
//               >
//                 Our Blog
//               </a>
//             </div>

//             <a
//               href="/services"
//               className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group"
//             >
//               Services
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <a
//               href="/contact"
//               className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group whitespace-nowrap"
//             >
//               Contact Us
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// components/Navbar.jsx
import React, { useState } from "react";
import Eduhawk from "../assets/Eduhawk.png"; // Adjust path if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const abroadCountries = [
    { name: "Russia",       path: "russia" },
    { name: "Bangladesh",   path: "bangladesh" },
    { name: "Nepal",        path: "nepal" },
    { name: "Kazakhstan",   path: "kazakhstan" },
    { name: "Kyrgyzstan",   path: "kyrgyzstan" },
    { name: "Uzbekistan",   path: "uzbekistan" },
    { name: "Tajikistan",   path: "tajikistan" },
    { name: "Egypt",        path: "egypt" },
    { name: "Georgia",      path: "georgia" },
    { name: "Vietnam",      path: "vietnam" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>
              <img
                src={Eduhawk}
                alt="Eduhawk Logo"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-sm lg:text-base font-medium">
            <a href="/" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/about" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <div className="relative group">
              <button className="text-[#2F327D] hover:text-[#F48C06] transition-colors flex items-center gap-1">
                Medical Colleges
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
                <a href="/allcollege" className="block px-5 py-2.5 text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
                  MBBS India
                </a>

                <div className="border-t border-gray-100 my-1"></div>

                <div className="relative group/sub">
                  <div className="px-5 py-2.5 text-[#F48C06] font-semibold flex justify-between items-center hover:bg-orange-50 cursor-pointer">
                    <span>MBBS Abroad</span>
                    <svg className="w-4 h-4 transition-transform group-hover/sub:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-200 max-h-[70vh] overflow-y-auto z-50">
                    {abroadCountries.map(country => (
                      <a
                        key={country.path}
                        href={`/mbbs-abroad/${country.path}`}
                        className="block px-5 py-2.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                      >
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="/blog" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              Our Blog
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/services" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/contact" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group whitespace-nowrap">
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#2F327D] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2 text-base font-medium">
              <a href="/" className="block py-3 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors">Home</a>
              <a href="/about" className="block py-3 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors">About</a>

              <div>
                <button
                  className="w-full text-left flex justify-between items-center py-3 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors"
                  onClick={() => toggleDropdown("medical")}
                >
                  <span>Medical Colleges</span>
                  <svg className={`w-5 h-5 transition-transform ${openDropdown === "medical" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === "medical" && (
                  <div className="pl-6 flex flex-col gap-1 py-2">
                    <a href="/allcollege" className="block py-2.5 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors">MBBS India</a>

                    <button
                      className="flex justify-between items-center py-2.5 px-4 text-[#F48C06] font-medium hover:bg-orange-50 rounded transition-colors"
                      onClick={() => toggleDropdown("abroad")}
                    >
                      <span>MBBS Abroad</span>
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === "abroad" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === "abroad" && (
                      <div className="pl-6 flex flex-col gap-1">
                        {abroadCountries.map(country => (
                          <a
                            key={country.path}
                            href={`/mbbs-abroad/${country.path}`}
                            className="block py-2.5 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors"
                          >
                            {country.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <a href="/blog" className="block py-3 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors">Our Blog</a>
              <a href="/services" className="block py-3 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors">Services</a>
              <a href="/contact" className="block py-3 px-4 text-[#2F327D] hover:text-[#F48C06] hover:bg-orange-50 rounded transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;