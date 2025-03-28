"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function LandingPage() {
  const trendingVideos = ["9zZ02kkoBnk", "ay3OCW4eITM"];
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [showAddToHomePrompt, setShowAddToHomePrompt] = useState(false);
  const [showSafariPrompt, setShowSafariPrompt] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /^((?!chrome|android|crios|fxios|opera|opios|edgios|duckduckgo|brave|vivaldi|samsungbrowser|fbav|instagram).)*safari/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isMobile = /mobile/.test(userAgent);


    if (isIOS) {
      if (isSafari) {
        setShowAddToHomePrompt(true);
      } else {
        setShowSafariPrompt(true);
      }
    } else if (isAndroid && isMobile) {
      // Android PWA Install Prompt
      const handler = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowInstall(true);
      };
      window.addEventListener("beforeinstallprompt", handler as EventListener);
    
      return () => window.removeEventListener("beforeinstallprompt", handler as EventListener);
    }
    
  }, []);

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User installed PWA");
      }
      setShowInstall(false);
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center relative">

      {/* Prompt: Open in Safari */}
      {showSafariPrompt && (
        <div className="fixed bottom-28 w-[90%] bg-white text-pink-700 text-center p-3 rounded-lg shadow-md border border-pink-300 z-30">
          📢 <strong>For the best experience, open this site in Safari on your iPhone.</strong>
        </div>
      )}

      {/* Prompt: Add to Home Screen (iOS Safari) */}
      {showAddToHomePrompt && (
        <div className="fixed bottom-28 w-[90%] bg-white text-pink-700 text-center p-3 rounded-lg shadow-md border border-pink-300 z-30">
          📲 <strong>Install Grow to Glow for a better experience!</strong>
          <p className="mt-2 text-sm flex items-center justify-center gap-1 flex-wrap">
            Tap
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fd66c3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              <span className="font-medium">Share</span>
            </span>
            then <strong>Add to Home Screen</strong>
          </p>
        </div>
      )}

      {/* Prompt: Android Install */}
      {showInstall && (
        <div className="fixed bottom-28 left-4 right-4 bg-white text-pink-700 p-4 shadow-lg rounded-lg flex flex-col items-center animate-fadeIn border border-pink-300 z-30">
          <p className="text-center text-sm">📲 Install <b>Grow to Glow</b> for a better experience!</p>
          <button
            onClick={installPWA}
            className="mt-2 px-4 py-2 bg-[#fd66c3] text-white rounded-lg shadow-md text-sm"
          >
            Install App
          </button>
        </div>
      )}

      {/* Top Navbar */}
      <nav className="w-full h-16 bg-[#fd66c3] text-white fixed top-0 shadow-md z-10 flex items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
        <div className="relative w-12 h-12 min-w-[48px] min-h-[48px] rounded-full overflow-hidden">
          <Image src="/icons/icon-192x192.png" alt="Logo" width={48} height={48} className="rounded-full object-cover" priority />
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
                aria-hidden="true"
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
          <span className="absolute text-base drop-shadow-md">Glow</span>
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
