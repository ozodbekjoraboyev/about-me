import React from "react";
import { Check } from "lucide-react";
import { skills } from "@/data/scills";

const Skills: React.FC = () => {
  return (
    <section  id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={category.name}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all p-6 transform hover:-translate-y-1 duration-300 ${
                index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
              } animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-center mb-6">
                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 animate-rotateIn">
                  <category.icon
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className={`flex items-start animate-fadeIn animate-delay-${
                      (skillIndex + 1) * 100
                    }`}
                  >
                    <Check
                      size={18}
                      className="text-green-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
