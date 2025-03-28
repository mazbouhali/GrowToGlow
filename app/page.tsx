"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

export default function LandingPage() {
  // Example trending Irish makeup video IDs (replace with real trending videos)
  const trendingVideos = [
    "9zZ02kkoBnk", // Replace with actual video IDs
    "ay3OCW4eITM",
    "2Vv-BfVoq4g",
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center relative">
      {/* Top Navbar */}
      <nav className="w-full h-16 bg-gradient-to-r from-pink-600 via-pink-500 to-purple-500 text-white fixed top-0 shadow-md z-10 flex items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
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

  <ul className="w-full flex justify-around text-base">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/beauty-tips">Beauty Tips & Tricks</Link></li>
  </ul>
</nav>


      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 pt-24 w-full">
        <h1 className="text-4xl font-bold text-pink-800">Welcome to Grow to Glow</h1>
        <p className="text-lg text-pink-700 mt-2">Explore tutorials, tips, and more!</p>

        {/* Trending Irish Makeup Videos */}
        <section className="w-full mt-8 px-4">
          <h2 className="text-2xl font-bold text-pink-700">Viral Trending Irish Makeup Videos</h2>
          <div className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide">
            {trendingVideos.map((videoId) => (
              <iframe
                key={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                allowFullScreen
                aria-hidden="true" // Hide iframe content from screen readers
                className="w-[300px] h-[180px] sm:w-[400px] sm:h-[225px] rounded-lg shadow-md flex-shrink-0"
              ></iframe>
            ))}
          </div>
        </section>

        {/* What's Popular */}
        <section className="w-full mt-8 px-4">

          <h2 className="text-2xl font-bold text-pink-700">What&apos;s Popular in Irish Makeup</h2>
          <ul className="mt-4 text-lg text-pink-600 space-y-2">
            <li>✨ Dewy Skin & Natural Glow</li>
            <li>🔥 Bold, Colorful Eye Looks</li>
            <li>💖 Irish Influencer-Approved Products</li>
            <li>📈 Viral TikTok Beauty Hacks</li>
          </ul>
        </section>
      </main>

      {/* Glow Button */}
      <motion.div 
        className="fixed bottom-10 flex items-center justify-center z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="relative flex items-center justify-center text-white text-lg font-bold"
        aria-label="Glow Button">
          <FaHeart className="text-[90px] text-red-500 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]" />
          <span className="absolute text-base drop-shadow-md">Glow</span>
        </button>
      </motion.div>

      {/* Bottom Navbar */}
      <nav className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 text-white p-4 fixed bottom-0 shadow-md flex justify-around items-center h-20 z-10">
        <ul className="flex justify-around w-full text-lg">
          <li><Link href="/investigate">Investigate</Link></li>
          <li><Link href="/educate">Educate</Link></li>
        </ul>
      </nav>
    </div>
  );
}
