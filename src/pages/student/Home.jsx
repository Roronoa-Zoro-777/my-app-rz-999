import React, { useState, useEffect, useRef } from 'react';
import kl1 from '../../assets/kl1.gif';

import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import Testimonialssection from '../../components/student/Testimonialssection';
import CallToAction from '../../components/student/CallToAction';
import Footer from '../../components/student/Footer';

const UNLOCK_KEY = 'unlockedSession';

const HomeWithRoleplayUnlock = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'npc', text: "👤: ZORO! What's the password to enter the ONEPIECE?" },
  ]);
  const [animateUnlock, setAnimateUnlock] = useState(false);
  const chatEndRef = useRef(null);

  // On mount, read unlock state from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem(UNLOCK_KEY);
    if (stored === 'true') {
      setUnlocked(true);
    }
  }, []);

  // Scroll chat to bottom when chatHistory changes
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  // Save unlock state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem(UNLOCK_KEY, unlocked.toString());
  }, [unlocked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: `🧑: ${input}` };
    const lowerInput = input.trim().toLowerCase();

    const isCorrect = lowerInput === 'king of hell';

    const npcReply = isCorrect
      ? { sender: 'npc', text: '👤: Zoro, you may proceed. Welcome to the One Piece!' }
      : { sender: 'npc', text: "👤: That’s not it. Try again, Zoro." };

    setChatHistory((prev) => [...prev, userMessage, npcReply]);

    if (isCorrect) {
      setAnimateUnlock(true);
      setTimeout(() => {
        setUnlocked(true);
        setAnimateUnlock(false);
      }, 1500);
    }

    setInput('');
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-black">
      {!unlocked && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-center px-4 bg-black/80"
          style={{
            backgroundImage: `url(${kl1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="w-full max-w-md mx-auto backdrop-blur-md bg-white/10 rounded-xl p-6 space-y-4 shadow-xl border border-white/20 flex flex-col h-[70vh]">
            {/* Chat Box */}
            <div className="flex-grow mb-4 space-y-3 overflow-y-auto">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-md max-w-xs transition-opacity duration-700 ${
                    msg.sender === 'npc'
                      ? 'bg-blue-600/80 text-left'
                      : 'bg-green-600/80 text-right ml-auto'
                  }`}
                  style={{ animation: `fadeIn 0.5s ease forwards`, animationDelay: `${i * 0.2}s`, opacity: 0 }}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input fixed at bottom */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center space-x-2"
              style={{ flexShrink: 0 }}
            >
              <input
                type="text"
                className="flex-grow px-4 py-2 text-black transition bg-white border border-gray-300 rounded-md outline-none placeholder-black-500 bg-opacity-30 focus:ring-2 focus:ring-blue-400"
                placeholder="Type the password..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={animateUnlock}
              />
              <button
                type="submit"
                disabled={animateUnlock}
                className={`px-4 py-2 text-white rounded ${
                  animateUnlock
                    ? 'bg-green-500 animate-pulse cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {animateUnlock ? 'Unlocking...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-700 ${
          unlocked ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <main className="flex flex-col items-center min-h-screen text-center space-y-7">
          <Hero />
          <Companies />
          <CoursesSection />
          <Testimonialssection />
          <CallToAction />
          <Footer />
        </main>
      </div>

      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeWithRoleplayUnlock;
