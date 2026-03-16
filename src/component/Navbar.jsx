

// components/Navbar.jsx
import React from 'react';
import Eduhawk from "../assets/Eduhawk.png"; // Make sure path is correct

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-5 gap-5 md:gap-0">

          {/* Logo + Brand Name Area */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative flex items-center">
              {/* Optional subtle background orb / glow effect behind logo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>

              <img
                src={Eduhawk}
                alt="Eduhawk Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>

            
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-8 lg:gap-10 text-sm md:text-base font-medium">
            <a
              href="/"
              className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/about"
              className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

        <div className="relative group">
  <a
    href="/medical-colleges"
    className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative whitespace-nowrap flex items-center gap-1"
  >
    Medical Colleges
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
  </a>

  {/* Level 1: Main Dropdown - Vertical stacking */}
  <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 min-w-[300px]">
    
    {/* MBBS India - with nested hover */}
    <div className="relative group/sub">
  <div className="px-4 py-2 text-[#F48C06] font-semibold text-base flex justify-between items-center hover:bg-orange-50 cursor-pointer">
    MBBS India
    <svg className="w-4 h-4 transition-transform group-hover/sub:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>

  {/* Level 2: Mega Sub-dropdown - opens to right, wide grid */}
  <div className="absolute left-full top-0 ml-1 bg-white rounded-md shadow-2xl py-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 border border-gray-200 w-[950px] max-h-[85vh] overflow-y-auto grid grid-cols-3 gap-5 divide-x divide-gray-100 px-3">
    
    {/* Header Note */}
    <div className="col-span-3 px-4 py-2 bg-orange-50 text-center text-sm text-gray-700 border-b border-orange-200 mb-2">
      India Zonal Councils (Official Divisions) – Explore Top Medical Colleges Zone-wise (NIRF 2025)
    </div>

    {/* Northern Zone */}
    <div className="px-3">
      <h4 className="text-[#F48C06] font-bold text-base mb-3 border-b border-orange-200 pb-2">Northern Zone</h4>
      <p className="text-xs text-gray-500 mb-2">States/UTs: Haryana, Himachal Pradesh, Punjab, Rajasthan, Chandigarh, Delhi, J&K, Ladakh</p>
      
      <a href="/mbbs-india/northern/delhi/aiims-delhi" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        AIIMS New Delhi (NIRF Rank 1)
      </a>
      <a href="/mbbs-india/northern/delhi/vmmc-safdarjung" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        VMMC & Safdarjung Hospital, Delhi (Rank ~22)
      </a>
      <a href="/mbbs-india/northern/punjab/pgimer-chandigarh" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        PGIMER Chandigarh (Rank 2)
      </a>
      <a href="/mbbs-india/northern/rajasthan/aiims-jodhpur" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        AIIMS Jodhpur (Rank ~19)
      </a>
      <a href="/mbbs-india/northern/delhi/all" className="block px-2 py-1.5 text-sm text-[#F48C06] font-medium hover:bg-orange-100 mt-2">
        All Northern Zone Colleges →
      </a>
    </div>

    {/* Central Zone */}
    <div className="px-3">
      <h4 className="text-[#F48C06] font-bold text-base mb-3 border-b border-orange-200 pb-2">Central Zone</h4>
      <p className="text-xs text-gray-500 mb-2">States: Chhattisgarh, Madhya Pradesh, Uttar Pradesh, Uttarakhand</p>
      
      <a href="/mbbs-india/central/uttar-pradesh/sgpgims-lucknow" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        SGPGIMS Lucknow (Rank 5)
      </a>
      <a href="/mbbs-india/central/uttar-pradesh/bhu-varanasi" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        BHU Varanasi (Rank 6)
      </a>
      <a href="/mbbs-india/central/uttar-pradesh/kgmu-lucknow" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        KGMU Lucknow (Rank 8)
      </a>
      <a href="/mbbs-india/central/madhya-pradesh/aiims-bhopal" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        AIIMS Bhopal (Rank ~25)
      </a>
      <a href="/mbbs-india/central/uttar-pradesh/all" className="block px-2 py-1.5 text-sm text-[#F48C06] font-medium hover:bg-orange-100 mt-2">
        All Central Zone Colleges →
      </a>
    </div>

    {/* Eastern Zone */}
    <div className="px-3">
      <h4 className="text-[#F48C06] font-bold text-base mb-3 border-b border-orange-200 pb-2">Eastern Zone</h4>
      <p className="text-xs text-gray-500 mb-2">States: Bihar, Jharkhand, Odisha, West Bengal</p>
      
      <a href="/mbbs-india/eastern/odisha/aiims-bhubaneswar" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        AIIMS Bhubaneswar (Rank ~14)
      </a>
      <a href="/mbbs-india/eastern/west-bengal/ipgmer-kolkata" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        IPGMER & SSKM Kolkata (Rank ~23)
      </a>
      <a href="/mbbs-india/eastern/bihar/aiims-patna" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        AIIMS Patna
      </a>
      <a href="/mbbs-india/eastern/west-bengal/all" className="block px-2 py-1.5 text-sm text-[#F48C06] font-medium hover:bg-orange-100 mt-2">
        All Eastern Zone Colleges →
      </a>
    </div>

    {/* Western Zone */}
    <div className="px-3">
      <h4 className="text-[#F48C06] font-bold text-base mb-3 border-b border-orange-200 pb-2">Western Zone</h4>
      <p className="text-xs text-gray-500 mb-2">States/UTs: Goa, Gujarat, Maharashtra, Dadra & Nagar Haveli and Daman & Diu</p>
      
      <a href="/mbbs-india/western/maharashtra/grant-medical-college" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        Grant Medical College, Mumbai
      </a>
      <a href="/mbbs-india/western/gujarat/bj-medical-ahmedabad" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        B.J. Medical College, Ahmedabad
      </a>
      <a href="/mbbs-india/western/maharashtra/all" className="block px-2 py-1.5 text-sm text-[#F48C06] font-medium hover:bg-orange-100 mt-2">
        All Western Zone Colleges →
      </a>
    </div>

    {/* Southern Zone */}
    <div className="px-3">
      <h4 className="text-[#F48C06] font-bold text-base mb-3 border-b border-orange-200 pb-2">Southern Zone</h4>
      <p className="text-xs text-gray-500 mb-2">States/UTs: Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana, Puducherry</p>
      
      <a href="/mbbs-india/southern/tamil-nadu/cmc-vellore" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        CMC Vellore (NIRF Rank 3)
      </a>
      <a href="/mbbs-india/southern/puducherry/jipmer" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        JIPMER Puducherry (Rank 4)
      </a>
      <a href="/mbbs-india/southern/karnataka/nimhans-bangalore" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        NIMHANS Bengaluru (Rank 7)
      </a>
      <a href="/mbbs-india/southern/karnataka/kasturba-manipal" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        Kasturba Medical College, Manipal (Rank ~10)
      </a>
      <a href="/mbbs-india/southern/tamil-nadu/all" className="block px-2 py-1.5 text-sm text-[#F48C06] font-medium hover:bg-orange-100 mt-2">
        All Southern Zone Colleges →
      </a>
    </div>

    {/* North-Eastern Zone */}
    <div className="px-3">
      <h4 className="text-[#F48C06] font-bold text-base mb-3 border-b border-orange-200 pb-2">North-Eastern Zone</h4>
      <p className="text-xs text-gray-500 mb-2">States: Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura</p>
      
      <a href="/mbbs-india/north-eastern/assam/gmch-guwahati" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        Gauhati Medical College, Assam
      </a>
      <a href="/mbbs-india/north-eastern/meghalaya/neigrihms-shillong" className="block px-2 py-1.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
        NEIGRIHMS Shillong
      </a>
      <a href="/mbbs-india/north-eastern/all" className="block px-2 py-1.5 text-sm text-[#F48C06] font-medium hover:bg-orange-100 mt-2">
        All North-Eastern Zone Colleges →
      </a>
    </div>

    {/* Full Width View All */}
    <div className="col-span-3 px-4 py-3 bg-orange-50 border-t border-orange-200 mt-3">
      <a href="/mbbs-india/all-top-colleges-nirf-2025" className="block text-center text-base font-semibold text-[#F48C06] hover:underline">
        View All Top Medical Colleges in India (NIRF 2025) →
      </a>
    </div>
  </div>
</div>

    {/* Divider */}
    <div className="border-t border-gray-100 my-1"></div>

    {/* MBBS Abroad - with nested hover */}
    <div className="relative group/sub">
      <div className="px-4 py-2 text-[#F48C06] font-semibold text-base flex justify-between items-center hover:bg-orange-50 cursor-pointer">
        MBBS Abroad
        <svg className="w-4 h-4 transition-transform group-hover/sub:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      {/* Level 2: Sub-dropdown for MBBS Abroad - opens to right */}
      <div className="absolute left-full top-0 ml-1 bg-white rounded-md shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 border border-gray-200 w-64 max-h-96 overflow-y-auto">
        <a href="/mbbs-abroad/russia" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          RUSSIA
        </a>
        <a href="/mbbs-abroad/bangladesh" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          BANGLADESH
        </a>
        <a href="/mbbs-abroad/nepal" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
         NEPAL
        </a>
        <a href="/mbbs-abroad/kazakhstan" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
         Kazakhstan
        </a>

         <a href="/mbbs-abroad/kyrgyzstan" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
         KYRGYZSTAN
        </a>
      
        <a href="/mbbs-abroad/uzbekistan" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          UZBEKISTAN
        </a>

         <a href="/mbbs-abroad/tajikisatin" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          TAJIKISATN
        </a>

    

          <a href="/mbbs-abroad/egypt" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          EGYPT
        </a>


       

         <a href="/mbbs-abroad/georgia" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          GEORGIA
        </a>

        
 <a href="/mbbs-abroad/vintnam" className="block px-4 py-2 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
          VINTNAM
        </a>

       
     
      </div>
    </div>
  </div>
</div>
          <div className="relative group">
  <a
    href="/blog"
    className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 flex items-center gap-1"
  >
    Our Blog
   
  </a>

 
</div>

            <a
              href="/services"
              className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/contact"
              className="text-[#2F327D] hover:text-[#F48C06] transition-colors duration-200 relative group whitespace-nowrap"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;