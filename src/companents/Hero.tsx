import React from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="  transition   relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-600 dark:text-blue-400">Ozodbek</span>{" "}
            Jo'raboyev
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            Frontend Developer
          </h2>
          <div className="animate-bounce text-blue-700 text-xl">
            <a href="https://docs.google.com/document/d/1BKZmN9UpA34kUmJgxZ8BaXgqDIDbZqsm-E13PNf96HM/edit?tab=t.0">
              Resume
            </a>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Creating beautiful, responsive, and user-friendly web experiences
            with modern frontend technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={scrollToSkills}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>
            <a
              href="#contact"
              className="bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToSkills} aria-label="Scroll down">
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default React.memo(Hero);

// import React from 'react';
// import { ChevronDown } from 'lucide-react';
// import Image from 'next/image'; // Next.js rasmi uchun Image ishlatamiz
// import ozodbek from "../../public/ozodbek.jpg"
// const Hero: React.FC = () => {
//   const scrollToSkills = () => {
//     const skillsSection = document.getElementById('skills');
//     if (skillsSection) {
//       skillsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//           {/* Text section */}
//           <div className="text-center md:text-left flex-1 animate-fadeIn">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               <span className="text-blue-600 dark:text-blue-400">Ozodbek</span> Jo'raboyev
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
//               Frontend Developer
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-8">
//               Creating beautiful, responsive, and user-friendly web experiences with modern frontend technologies.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 onClick={scrollToSkills}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
//               >
//                 Explore My Work
//               </button>
//               <a
//                 href="#contact"
//                 className="bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-lg transition-colors duration-300"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </div>

//           {/* Image section */}
//           <div className="flex-1 flex justify-center animate-fadeIn">
//             <Image
//               src={ozodbek}
//               alt="Ozodbek Photo"
//               width={400}
//               height={400}
//               className="rounded-2xl object-cover shadow-lg"
//             />
//           </div>

//         </div>
//       </div>

//       {/* Bottom arrow */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <button onClick={scrollToSkills} aria-label="Scroll down">
//           <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default React.memo(Hero);
