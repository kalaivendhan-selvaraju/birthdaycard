import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "./BirthdayPage.css";

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
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        <motion.div
          className="card"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-front">
            <motion.h1
              className="card-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HAPPY 💞
            </motion.h1>
            <motion.h2
              className="card-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              BIRTHDAY 🎉
            </motion.h2>

            <div className="cake-center">
              <motion.div
                className="cake"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div className="cake-base" />
                <motion.div className="cake-top" />
                <motion.div className="candle" />
                <motion.div
                  className="flame"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                ></motion.div>
              </motion.div>
            </div>

            <motion.p
              className="card-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              En idhaya kootilae Un idhayam korkka vaa✨
            </motion.p>
          </div>
          <motion.div
            className="card-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h3
              className="card-back-title"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Made with ❤️ 😍
            </motion.h3>
            <motion.p
              className="card-back-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              🎉😘 Happy Birthday, my love! 😘🎉
              <br></br>
              Today is all about celebrating you — the most amazing, beautiful,
              and inspiring person in my life. Every moment with you is a gift,
              every smile you give lights up my world, and every laugh makes my
              heart melt. I hope this year brings you endless joy, sweet
              adventures, and memories that make your heart dance. You deserve
              all the love, happiness, and magic in the world. Thank you for
              being my partner, my best friend, and my everything. Here’s to
              more late-night talks, silly jokes, cozy hugs, and dreams coming
              true — together. I love you more than words can ever express.
              ❤️🥰💖 Happy Birthday, my darling! Let’s make today unforgettable!
              🎂🎁✨{" "}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="section">
        <h2 className="section-title">Nama 🫶</h2>
        <div className="memories-container">
          <motion.div className="memory-card" whileHover={{ scale: 1.05 }}>
            <img
              src="https://cdn.sanity.io/images/kts928pd/production/54debd4a7375ab35b2ebdcbbc3d67090127da4c2-1140x620.png"
              alt="memory1"
              className="memory-image"
            />
            <p className="memory-text">Nama kadai 🎉 😄</p>
          </motion.div>
          <motion.div className="memory-card" whileHover={{ scale: 1.05 }}>
            <img
              src="https://external-preview.redd.it/66_2MkX4TyTk6X5dMGsuHEJWWrZqW3djwT6Tl1594wY.jpg?width=640&crop=smart&auto=webp&s=7d92ede67d7b145e97e3034286b6e285cf41d632"
              alt="memory2"
              className="memory-image"
            />
            <p className="memory-text">Nama bomma kadai 🍰 😍</p>
          </motion.div>
          <motion.div className="memory-card" whileHover={{ scale: 1.05 }}>
            <img
              src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=4iLora6ZNxmcbMlTpTaLGg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=278.68158&pitch=0&thumbfov=100"
              alt="memory3"
              className="memory-image"
            />
            <p className="memory-text">Nama Kovil ❤️ 😁</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
