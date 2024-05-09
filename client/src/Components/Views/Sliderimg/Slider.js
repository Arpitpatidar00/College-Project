// Slider.js
import * as React from "react";
import "./style.css"; // Import CSS styles

import video1 from "./Videos/5127768-uhd_3840_2160_24fps.mp4";
import video2 from "./Videos/3207708-hd_1280_720_25fps.mp4";
import video3 from "./Videos/854107-hd_1920_1080_25fps.mp4";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const videos = [video1, video2, video3];

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const videoIndex = wrap(0, videos.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div id="Slider" className="example-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.video
          key={page}
          src={videos[videoIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};
export default Slider;
