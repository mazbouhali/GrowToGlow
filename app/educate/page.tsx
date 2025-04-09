"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center relative">
      {/* Top Navbar */}
      <nav className="w-full h-16 bg-[#fd66c3] text-white fixed top-0 shadow-md z-10 flex items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
        <div className="relative w-12 h-12 min-w-[48px] min-h-[48px] rounded-full overflow-hidden">
          <Image 
            src="/icons/icon-192x192.png" 
            alt="Logo" 
            width={48} 
            height={48} 
            className="rounded-full object-cover"
            priority 
          />
        </div>

        <ul className="w-full flex justify-around items-center text-base">
        <li><Link href="/"className="flex items-center gap-[2px]">
          <Image src="/icons/home-icon.png" alt="Home" width={30} height={30}/>
          Glow</Link></li>
          <li><Link href="/beauty-tips">Beauty Tips & Tricks</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 pt-24 w-full">
        <h1 className="text-4xl font-bold text-pink-800">Welcome to Grow to Glow</h1>
        <p className="text-lg text-pink-700 mt-2">Explore tutorials, tips, and more!</p>

        <section className="w-full mt-8 px-4 text-center">
  <h2 className="text-2xl font-bold text-pink-700">Educate Yourself</h2>
  <p className="text-lg text-pink-600 mt-4">Learn the science, techniques, and secrets behind beauty and skincare.</p>
  <ul className="mt-6 text-pink-700 space-y-3 text-base">
    <li>📚 The basics of building a skincare routine</li>
    <li>🖌️ Makeup brush guide: What to use and when</li>
    <li>🌿 Clean beauty explained: Myths & facts</li>
    <li>💡 The history of iconic makeup looks</li>
  </ul>
  <br /><br /><br /><br /><br /><br />
</section>

      </main>

      {/* Glow Button */}
      <motion.div 
        className="fixed bottom-9 flex items-center justify-center z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="relative flex items-center justify-center text-white text-lg font-bold"
        aria-label="Glow Button">
          <FaHeart className="text-[90px] text-red-500 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]" />
          <span className="absolute text-base drop-shadow-md">Grow</span>
        </button>
      </motion.div>

      {/* Bottom Navbar */}
      <nav className="w-full bg-[#fd66c3] text-white p-4 fixed bottom-0 shadow-md flex justify-around items-center h-20 z-10">
        <ul className="flex justify-around w-full text-lg">
          <li><Link href="/investigate">Investigate</Link></li>
          <li><Link href="/educate">Educate</Link></li>
        </ul>
      </nav>
    </div>
  );
}
