"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import telegram from "../../public/telegram.svg";
import axios from "axios";
import { toast } from "sonner";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring ❗");
      return;
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      toast.error("Telegram sozlamalari topilmadi ❌");
      return;
    }

    const telegramMessage = `
📩 Yangi xabar!
👤 Ism: ${name}
📧 Email: ${email}
📝 Xabar: ${message}
    `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }
      );

      toast.success("Xabar muvaffaqiyatli yuborildi ✅");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Xabar yuborishda xato:", error);
      toast.error("Xabar yuborilmadi ❌");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start animate-fadeIn animate-delay-100">
                <Mail size={20} className="text-blue-600 dark:text-blue-400 mt-1 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:ozodbekjoraboyev@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    ozodbekjoraboyev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start animate-fadeIn animate-delay-200">
                <Phone size={20} className="text-blue-600 dark:text-blue-400 mt-1 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+998970567985" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +998 97 056 79 85
                  </a>
                </div>
              </div>

              <div className="flex items-start animate-fadeIn animate-delay-300">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400 mt-1 mr-4" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 animate-fadeIn animate-delay-400">
              <h4 className="font-medium mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all transform hover:scale-110">
                  <Github size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all transform hover:scale-110">
                  <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://t.me/Ozodbek_devolopr" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all transform hover:scale-110">
                  <Image width={20} height={20} src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-4" onSubmit={sendMessage}>
              <div className="animate-fadeIn animate-delay-100">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="animate-fadeIn animate-delay-200">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="animate-fadeIn animate-delay-300">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 animate-fadeIn animate-delay-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
