import React from 'react'
import {

  Linkedin,
  Twitter,
  Youtube,
  
} from "lucide-react";
import logo from '../assets/fin-logo-3.jpg';


const Footer = () => {
  return (
    <div>
        <footer className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

          <div>
            <img
              src={logo}
              alt="FinQuest Logo"
              className="w-32 h-32 mb-6 drop-shadow-lg   border-white/30"
            />
          </div>
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FinQuest</h3>
            <p className="text-sm text-justify">
              FinQuest brings financial wisdom alive through personalized learning paths for students, turning money skills into lifelong confidence.
            </p>
            <div className="flex space-x-4 mt-4 text-white">
              <a href="#" aria-label="Github"><Youtube size={20} className="hover:text-green-400 transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} className="hover:text-green-400 transition-colors" /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} className="hover:text-green-400 transition-colors" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Learning Paths</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Simulations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FinFlux</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            {/* <p className="text-sm">123 Financial Way<br/>Wealthy City, 54321<br/>Financia</p> */}
            <p className="text-sm mt-2">Email: finquest@gmail.com<br /></p>

          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-700">
          <p className="italic">"Empowering financial literacy through gamification."</p>
          <p className="mt-2">&copy; 2025 FinQuest. All Rights Reserved.</p>

        </div>
      </footer>

    </div>
  )
}

export default Footer