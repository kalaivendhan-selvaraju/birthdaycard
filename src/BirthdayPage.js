import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './BirthdayPage.css';

export default function BirthdayPage() {
  const [flipped, setFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleClick = () => {
    setFlipped(!flipped);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="page-container">
      {/* Birthday Card Section */}
      <div className="section">
        {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}
        <motion.div
          className="card"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-front">
            <motion.h1 className="card-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>HAPPY 💞</motion.h1>
            <motion.h2 className="card-subtitle" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>BIRTHDAY 🎉</motion.h2>

            <div className="cake-center">
              <motion.div className="cake" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} whileHover={{ scale: 1.05 }}>
                <motion.div className="cake-base" />
                <motion.div className="cake-top" />
                <motion.div className="candle" />
                <motion.div className="flame" animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}></motion.div>
              </motion.div>
            </div>

            <motion.p className="card-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Click to open your card ✨ 😄</motion.p>
          </div>
          <motion.div className="card-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.h3 className="card-back-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>Made with ❤️ 😍</motion.h3>
            <motion.p className="card-back-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              Wishing you a day filled with love, joy, and all your favorite things 😁. May this year bring you new adventures, sweet memories, and endless reasons to smile 😎.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Memories Section */}
      <div className="section">
        <h2 className="section-title">Memories 😊</h2>
        <div className="memories-container">
          <motion.div className="memory-card" whileHover={{ scale: 1.05 }}>
            <img src="https://via.placeholder.com/150" alt="memory1" className="memory-image" />
            <p className="memory-text">Fun times with friends 🎉 😄</p>
          </motion.div>
          <motion.div className="memory-card" whileHover={{ scale: 1.05 }}>
            <img src="https://via.placeholder.com/150" alt="memory2" className="memory-image" />
            <p className="memory-text">Birthday cake moments 🍰 😍</p>
          </motion.div>
          <motion.div className="memory-card" whileHover={{ scale: 1.05 }}>
            <img src="https://via.placeholder.com/150" alt="memory3" className="memory-image" />
            <p className="memory-text">Amazing memories ❤️ 😁</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}