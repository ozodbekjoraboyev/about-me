import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 pt-15 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">OzodbekDev</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-end">
              &copy; {currentYear} Ozodbek Jo{"'"}raboyev. Made with 
              <Heart size={16} className="text-red-500 mx-1" />
              using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;