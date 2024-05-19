import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./style.css";

const Cursor = ({ cursorVariant, setCursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mousePosition]);

  const cursorSize = 32;

  const variants = {
    default: {
      x: mousePosition.x - cursorSize / 2,
      y: mousePosition.y - cursorSize / 2,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 150 / 2,
      y: mousePosition.y - 150 / 2,
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default Cursor;
