import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import DriveAwake from "../../Assets/DriveAwake.jpg";
import pythonImage from "../../Assets/Python.png"; // Import the image with a constant variable name
import TinyThreads from "../../Assets/TinyThreads.jpg";
import "./style.css";

export const HoverLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="container">
        <Link
          heading="Facial Recognition System"
          subheading="Learn what we do here"
          imgSrc={pythonImage} // Use the imported image variable
          href="#"
        />
        <Link
          heading="TinyThreads"
          subheading="We work with great people"
          imgSrc={TinyThreads}
          href="#"
        />
        <Link
          heading="DriveAwake"
          subheading="Our work speaks for itself"
          imgSrc={DriveAwake}
          href="#"
        />
        <Link
          heading="DidiPop"
          subheading="We want cool people"
          imgSrc="/imgs/random/5.jpg"
          href="#"
        />
        {/* <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/imgs/random/10.jpg"
          href="#"
        /> */}
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="link group">
      <div className="link-content">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="heading relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}>
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="subheading relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="link-img absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="icon-wrapper relative z-10 p-4">
        <FiArrowRight className="icon text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
