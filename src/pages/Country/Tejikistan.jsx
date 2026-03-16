// import React, { useState } from "react";
// import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
// import Russianflag2 from "../../Images/country flag png/Tajikistan.svg";
// import MARISTATEUNIVERSITY from "../../Images/tajikistan/Khatlon-State-Medical-University-Tajikistan.jpg";

// const Tejikistan = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={RussiaFlag}
//             alt="Kremlin Bridge City"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN TEJIKISTAN
//             </h1>
//           </div>
//         </div>

//         {/* You can duplicate more slides like this or use carousel library */}
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src={Russianflag2}
//               alt="Russia flag"
//               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in TEJIKISTAN 2025–2026
//             </h2>
//           </div>
//         </div>

//         {/* About Russia + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About TEJIKISTAN
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Russia has become popular among medical students, who are looking
//               for a safe option internationally, as it has a strong academic
//               environment for MBBS abroad. With a duration of approximately{" "}
//               <strong>6 years</strong>, Russia has a well-balanced combination
//               of quality education and practical clinical exposure.
//             </p>

//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               One of the biggest reasons to choose Russia is affordability.
//               Compared to other countries.<strong> Russian universities</strong>{" "}
//               provide high-quality education at cost-effective prices. Russian
//               universities are recognised globally and ranked among the top
//               institutions internationally. Well known for a strong academic
//               background, experienced faculty, and modern infrastructure. In
//               russia students receive theoretical and hands on clincal training,
//               helping them develop the skills needed to become medical experts.
//               The learning environment, combined with diverse cultural
//               experiences, also helps students grow personally and
//               professionally.
//             </p>

//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 While Russia remains a popular destination, other countries like
//                 China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and
//                 Kyrgyzstan also offer affordable medical education.
//                 International students are often exempted from the one-year
//                 preparatory course.
//               </p>
//             ) : null}

//             <button
//               onClick={() => setShowMoreAbout(!showMoreAbout)}
//               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
//             >
//               {showMoreAbout ? "Show Less" : "Read More"}
//             </button>
//           </div>

//           <div>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/63/Tajik_Parliament_House%2C_Dushanbe%2C_Tajikistan.JPG"
//               alt="Kremlin"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Left – Quick Info Table */}
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in TEJIKISTAN
//             </h3>

//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-300 text-left">
//                 <tbody>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Recognition</td>
//                     <td className="p-4">NMC & WHO approved</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Eligibility</td>
//                     <td className="p-4">50% in PCB aggregate</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">NEET</td>
//                     <td className="p-4">Compulsory</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
//                     <td className="p-4">Not Required</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Medium of Teaching</td>
//                     <td className="p-4">English</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right – About MBBS */}
//           <div>
//             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
//               About MBBS in TEJIKISTAN
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Russia is notably straightforward 
//             </p>

//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 — no entrance
//               exam (apart from NEET for Indian students). The Russian government
//               subsidizes education, keeping fees relatively low...
//               </p>
//             ) : null}

//             <button
//               onClick={() => setShowMoreClimate(!showMoreClimate)}
//               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
//             >
//               {showMoreClimate ? "Show Less" : "Read More"}
//             </button>
//           </div>
//         </div>

//         {/* ==================== UNIVERSITIES GRID ==================== */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
//             Top Medical Universities in TEJIKISTAN
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Avicenna Tajik State Med. Uni.",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Donishgohi_davlatii_tibbii_Tojikiston_ba_nomi_A_Sino.JPG",
//               },
//               {
//                 name: "Khatlon-State-Medical University",
//                 img:MARISTATEUNIVERSITY,
//               },
//               {
//                 name: "Tajik National University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Tajik_National_University_%28Main_Building%29.jpg",
//               }
//             ].map((uni, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img
//                   src={uni.img}
//                   alt={uni.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h4 className="text-xl font-bold text-blue-900">
//                     {uni.name}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ==================== ADVANTAGES + COST ==================== */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//               Advantages of Studying MBBS in Russia 2025–2026
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   1. High-Quality Education
//                 </h5>
//                 <p className="text-gray-700">
//                   Globally recognized universities with strong academic
//                   standards.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   2. Affordable Tuition Fees
//                 </h5>
//                 <p className="text-gray-700">
//                   Significantly lower than many Western countries.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   3. No Additional Entrance Exams
//                 </h5>
//                 <p className="text-gray-700">
//                   (NEET required for Indian students only)
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   4. English-Medium Programs
//                 </h5>
//                 <p className="text-gray-700">
//                   No language barrier for most international students.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Russia
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               The cost of the <strong> MBBS course in Russia</strong> is very
//               low for Indian students who want to pursue their{" "}
//               <strong>MBBS</strong> course in Russia. Russia is a very demanding
//               country for Indian students who want to pursue their MBBS course.
//               The government of Russia has funded the fee structure for the MBBS
//               course. Studying MBBS in Russia is an easy task for Indian
//               students compared to other countries. Studying MBBS in Russia is
//               very cheap. The universities in Russia provide a smooth platform
//               for <strong>international students</strong> so that they don't
//               need to pay the high tuition fees. Apart from this, there is no
//               need to pay any donations.
//             </p>
//           </div>
//         </div>

//         {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
//       </div>

//       {/* Floating Enroll Button */}
//       <button
//         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//         onClick={() => alert("Open Admission Modal / Redirect to form")}
//       >
//         <span className="font-bold text-lg">ENROLL NOW!</span>
//       </button>

//       {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
//       <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//             Food and Accommodation Cost – MBBS in Russia
//           </h2>

//           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//             <p>
//               Most Russian medical universities provide comfortable hostel
//               accommodation specially designed for international students. Rooms
//               are usually shared (2–3 students per room) and come fully
//               furnished with:
//             </p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>Beds, mattresses, bedsheets, blankets, pillows</li>
//               <li>Study tables, chairs, wardrobes/cupboards</li>
//               <li>Central heating (very important in Russian winters)</li>
//             </ul>

//             <p className="mt-6">Hostels typically include:</p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>
//                 Common kitchen where students can cook their own food (very
//                 popular among Indian students to prepare Indian meals)
//               </li>
//               <li>Common washing machines / laundry rooms</li>
//               <li>
//                 Indian mess / canteen facilities in many universities (or
//                 nearby)
//               </li>
//               <li>
//                 Indian restaurants and grocery stores often within walking
//                 distance
//               </li>
//             </ul>

//             <p className="mt-6">
//               <strong>Approximate monthly living expenses (2025–2026):</strong>
//             </p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
//               <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
//               <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
//               <li>
//                 <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
//               </li>
//             </ul>

//             <p className="mt-6 italic text-gray-600">
//               Many universities also offer Indian food in their mess/canteen,
//               helping students maintain a familiar diet without much extra cost.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ==================== ADMISSION PROCESS ==================== */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//             Admission Process for MBBS in Russia 2025–2026
//           </h2>

//           <div className="max-w-4xl mx-auto">
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               The admission process for{" "}
//               <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
//               courses in Russia varies slightly among different universities,
//               but the general process is as follows:
//             </p>

//             <div className="space-y-10">
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   1. Research and Select a University:
//                 </h4>
//                 <p className="text-gray-700">
//                   Research the <strong>Russian universities</strong> that offer
//                   MBBS courses. Some of the best universities for MBBS courses
//                   in Russia are
//                   <strong>
//                     {" "}
//                     Moscow State Medical University, Saint Petersburg State
//                     Medical University, Kazan Federal University, etc.
//                   </strong>
//                 </p>
//                 <p className="mt-2 text-gray-600">
//                   Check: NMC/WHO recognition, English medium availability,
//                   tuition fees, hostel quality.
//                 </p>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   2. Check Eligibility
//                 </h4>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Completed 10+2 with Physics, Chemistry, Biology</li>
//                   <li>
//                     Minimum 50% aggregate in PCB (40% for reserved categories)
//                   </li>
//                   <li>NEET qualified (mandatory for Indian students)</li>
//                   <li>Age: 17 years completed by 31st Dec of admission year</li>
//                 </ul>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   3. Apply Online
//                 </h4>
//                 <p className="text-gray-700">
//                   Fill university application form → Submit scanned documents →
//                   Receive admission/invitation letter (usually within 2–4
//                   weeks).
//                 </p>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   4. Visa & Travel
//                 </h4>
//                 <p className="text-gray-700">
//                   Use invitation letter to apply for student visa at Russian
//                   Embassy/Consulate → Book tickets → Arrive in Russia → Complete
//                   university registration & medical check-up.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
//       <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Left - Required Documents */}
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//                 Required Documents for MBBS in Russia 2025–2026
//               </h2>

//               <div className="space-y-6">
//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <h5 className="text-lg font-semibold text-blue-800">
//                     Educational Documents
//                   </h5>
//                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                     <li>10th & 12th marksheets + certificates</li>
//                     <li>NEET scorecard & admit card</li>
//                     <li>Passport (valid for minimum 18–24 months)</li>
//                   </ul>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <h5 className="text-lg font-semibold text-blue-800">
//                     Other Important Documents
//                   </h5>
//                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                     <li>Passport size photos (white background)</li>
//                     <li>HIV & medical fitness certificate</li>
//                     <li>
//                       Invitation letter from university (issued after admission)
//                     </li>
//                     <li>Visa application form & fee receipt</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Eligibility + Scholarships */}
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//                 Eligibility Criteria & Scholarships
//               </h2>

//               <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
//                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
//                   Basic Eligibility
//                 </h4>
//                 <ul className="list-decimal pl-5 space-y-2 text-gray-700">
//                   <li>Age 17+ by 31st Dec of admission year</li>
//                   <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
//                   <li>NEET qualified (mandatory for Indians)</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border">
//                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
//                   Popular Scholarships
//                 </h4>
//                 <ul className="space-y-4">
//                   <li>
//                     <strong>
//                       Russian Government Scholarship (Open Doors / Quota)
//                     </strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Covers tuition + sometimes hostel. Very competitive —
//                       apply via education-in-russia.com
//                     </span>
//                   </li>
//                   <li>
//                     <strong>University-specific Merit Scholarships</strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Offered by many universities for good NEET/academic scores
//                     </span>
//                   </li>
//                   <li>
//                     <strong>Other options</strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Education Future, Inlaks, etc. (limited for MBBS)
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== COMPARISON TABLE ==================== */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//             MBBS in Russia vs MBBS in India – Quick Comparison (2025–2026)
//           </h2>

//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border border-gray-300 text-left">
//               <thead>
//                 <tr className="bg-blue-900 text-white">
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     Criteria
//                   </th>
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     MBBS in Russia
//                   </th>
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     MBBS in India
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">
//                     Tuition Fees (per year)
//                   </td>
//                   <td className="p-4 border">₹2 – 5 Lakhs</td>
//                   <td className="p-4 border">
//                     Govt: ₹40k – ₹2 Lakhs
//                     <br />
//                     Private: ₹10 – 25+ Lakhs
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">
//                     Donation / Capitation
//                   </td>
//                   <td className="p-4 border text-green-700">No Donation</td>
//                   <td className="p-4 border text-red-700">
//                     Often ₹30–80 Lakhs in private colleges
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">Course Duration</td>
//                   <td className="p-4 border">6 years (including internship)</td>
//                   <td className="p-4 border">5.5 years + 1 year internship</td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">Class Strength</td>
//                   <td className="p-4 border">20–40 students</td>
//                   <td className="p-4 border">
//                     100–150+ students (especially private)
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">Global Recognition</td>
//                   <td className="p-4 border">
//                     NMC, WHO, WFME approved universities
//                   </td>
//                   <td className="p-4 border">
//                     NMC approved, but private colleges vary
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">
//                     Medium of Instruction
//                   </td>
//                   <td className="p-4 border">English</td>
//                   <td className="p-4 border">English</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tejikistan;


import React, { useState } from "react";
import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import Russianflag2 from "../../Images/country flag png/Tajikistan.svg";
import MARISTATEUNIVERSITY from "../../Images/tajikistan/Khatlon-State-Medical-University-Tajikistan.jpg";

const Tajikistan = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={RussiaFlag}
            alt="Tajikistan Landscape"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN TAJIKISTAN
            </h1>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src={Russianflag2}
              alt="Tajikistan flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Tajikistan 2025–2026
            </h2>
          </div>
        </div>

        {/* About Tajikistan + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Tajikistan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Tajikistan is located in Central Asia. It shares borders with China, Afghanistan, Uzbekistan, and Kyrgyzstan. Officially known as the Republic of Tajikistan, with Dushanbe as its capital.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The country gained independence in 1991 after the dissolution of the Soviet Union. Tajik (a Persian dialect) is the official language, while Russian is widely used for interethnic communication. Islam is the predominant religion.
              Tajikistan is known for its stunning mountains, beautiful lakes, and rich cultural heritage. The national sport includes Gushtigiri (a form of wrestling). The currency is the Tajikistani Somoni.
              The climate is arid continental, with very cold winters and warm, sunny summers. Temperatures and rainfall vary significantly with altitude and terrain.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Tajikistan offers affordable, high-quality medical education with modern facilities, making it an emerging destination for international students, especially from India.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More"}
            </button>
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Tajik_Parliament_House%2C_Dushanbe%2C_Tajikistan.JPG"
              alt="Tajikistan Parliament House, Dushanbe"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Tajikistan
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC & WHO approved</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (5+1 internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory for Indian students</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Tajikistan for Indian Students
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Tajikistan's MBBS program is gaining popularity among Indian students due to its very low tuition fees and quality medical education at MCI/NMC-affiliated universities.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The affordable cost of living makes it attractive for middle-class families. Many Indian students choose Tajikistan for its reasonable fees (total package often ₹15–25 lakhs), modern facilities, experienced faculty, and safe learning environment.
                Degrees are recognized by WHO and NMC, allowing graduates to appear for FMGE/NEXT. English-medium programs eliminate language barriers.
                Tajikistan has a continental climate with cold winters and warm summers — hostels are well-heated for comfort.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* ==================== UNIVERSITIES GRID ==================== */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Tajikistan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Avicenna Tajik State Medical University",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Donishgohi_davlatii_tibbii_Tojikiston_ba_nomi_A_Sino.JPG",
              },
              {
                name: "Khatlon State Medical University",
                img: MARISTATEUNIVERSITY,
              },
              {
                name: "Tajik National University",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Tajik_National_University_%28Main_Building%29.jpg",
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">
                    {uni.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Tajikistan 2025–2026
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">1. Quality Education & Infrastructure</h5>
                <p className="text-gray-700">World-class facilities, experienced faculty, and modern medical training.</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">2. No Entrance Exams / Donations</h5>
                <p className="text-gray-700">Admission based on NEET + 50% in PCB — no capitation fees.</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">3. Very Affordable Fees & Living</h5>
                <p className="text-gray-700">Low tuition and cost of living — ideal for middle-class Indian families.</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">4. English-Medium Programs</h5>
                <p className="text-gray-700">No language barrier for international students.</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">5. Globally Recognized Degrees</h5>
                <p className="text-gray-700">Approved by NMC, WHO — eligible for FMGE/NEXT and practice worldwide.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Tajikistan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tajikistan offers one of the most budget-friendly MBBS programs for Indian students. Government subsidies and low living costs make it highly affordable.
              No donation or hidden fees. Total cost for the complete 6-year MBBS (tuition + hostel + food) typically ranges between ₹15 lakh to ₹25 lakh (varies by university).
              Many students complete the course comfortably within this budget.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Tajikistan
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Tajikistan provide comfortable, secure, and affordable hostel facilities tailored for international students.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">Hostel Facilities</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>On-campus hostels available in most universities</li>
                <li>Rooms usually shared by 2–3 students</li>
                <li>Safe, well-maintained environment with 24/7 security</li>
                <li>Students can stay in hostels for the full 6-year course duration</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">Room Facilities</h4>
              <p>Rooms are fully furnished with:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Comfortable beds, mattress, blankets, bedsheets</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
                <li>Heating system for cold winters</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">Kitchen and Food Facilities</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Common kitchens for self-cooking (popular for Indian meals)</li>
                <li>Indian mess / canteen facilities in many universities</li>
                <li>Indian restaurants and grocery stores nearby (walking distance in cities like Dushanbe)</li>
                <li>Local Tajik cuisine and international food options also available</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">Laundry and Daily Facilities</h4>
              <p>Most hostels have washing machine rooms. Daily needs are easily managed within the campus.</p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">Average Living Cost (2025–2026)</h4>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel: ₹8,000 – ₹15,000 per month</li>
                <li>Food (self-cooking + mess): ₹7,000 – ₹14,000 per month</li>
                <li>Miscellaneous: ₹3,000 – ₹7,000 per month</li>
                <li><strong>Total monthly:</strong> ≈ ₹18,000 – ₹35,000 (comfortable budget for most students)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Tajikistan 2025–2026
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">Stage 1</h4>
                <p>Research and select a recognized medical university in Tajikistan.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">Stage 2</h4>
                <p>Fill out the online university application form.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">Stage 3</h4>
                <p>Submit required academic and identification documents.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">Stage 4</h4>
                <p>Receive official admission / invitation letter.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">Stage 5</h4>
                <p>Apply for student visa at Tajikistan Embassy.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">Stage 6</h4>
                <p>Travel to Tajikistan, complete university registration and start MBBS.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== ELIGIBILITY & DOCUMENTS ==================== */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                  Eligibility Criteria for MBBS in Tajikistan
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Minimum 17 years old by 31st December of admission year</li>
                  <li>Minimum 50% in 12th (Physics, Chemistry, Biology)</li>
                  <li>NEET qualification mandatory for Indian students</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Documents Required
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Admission application form</li>
                  <li>10th & 12th marksheets + certificates</li>
                  <li>NEET scorecard / admit card</li>
                  <li>Valid passport copy</li>
                  <li>Passport-size photos (white background)</li>
                  <li>Identity proof (Aadhaar, PAN, Driving Licence)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Tajikistan vs MBBS in India – Quick Comparison (2025–2026)
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">Criteria</th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">MBBS in Tajikistan</th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">MBBS in India</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Entrance Exams</td>
                    <td className="p-4 border">Admission based on NEET qualification</td>
                    <td className="p-4 border">NEET + high competition</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Course Duration</td>
                    <td className="p-4 border">6 years (including internship)</td>
                    <td className="p-4 border">5.5 years + 1 year internship</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Total Cost</td>
                    <td className="p-4 border">₹15–25 lakhs</td>
                    <td className="p-4 border">Private: ₹20–80+ lakhs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Seats Availability</td>
                    <td className="p-4 border">More seats for international students</td>
                    <td className="p-4 border">Limited in government colleges</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Infrastructure</td>
                    <td className="p-4 border">Modern labs & facilities</td>
                    <td className="p-4 border">Varies between colleges</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ==================== FAQs ==================== */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Tajikistan 2025–2026 – FAQs
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  How to get MBBS admission in Tajikistan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Qualify NEET and have 50% marks in PCB in 12th. Apply online to the university, submit documents, receive invitation letter, and apply for student visa.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Tajikistan valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, if the university is approved by the National Medical Commission. Students must pass FMGE or NEXT to practice in India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the total cost of MBBS in Tajikistan?
                </summary>
                <p className="mt-4 text-gray-700">
                  The total cost usually ranges between ₹15 lakh to ₹25 lakh for the entire course (tuition + hostel + living expenses), depending on the university.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the duration of MBBS in Tajikistan?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS program generally takes 5 years of academic study plus 1 year internship, making it 6 years in total.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Why do students choose MBBS in Tajikistan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Very affordable fees, English-medium programs, simple admission process, low living costs, and recognized degrees — ideal for Indian students seeking quality education on a budget.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Floating Enroll Button */}
        <button
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
          onClick={() => alert("Open Admission Modal / Redirect to form")}
        >
          <span className="font-bold text-lg">ENROLL NOW!</span>
        </button>
      </div>
    </div>
  );
};

export default Tajikistan;