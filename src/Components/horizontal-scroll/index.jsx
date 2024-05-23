import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ACRobotics from "../../Assets/ACRobotics.jpg";
import ESS from "../../Assets/ESS.jpg";
import StudentUnion from "../../Assets/StudentUnion.jpg";
import WEC from "../../Assets/WEC.JPG";
import pic from "../../Assets/side_profile.png";
import "./style.css";

const Example = () => {
  return (
    <div className="background">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="sticky-container">
        <motion.div style={{ x }} className="card-container">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a href={card.link} key={card.id} className="card-link">
      <div className="card">
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="card-image"></div>
        <div className="card-text">
          <motion.p
            className="card-title"
            whileHover={{ scale: 1.5 }} // Apply spring effect when hovered
          >
            {card.title}
          </motion.p>
        </div>
      </div>
    </a>
  );
};

export default Example;

const cards = [
  {
    url: StudentUnion,
    title: "Title 1",
    link: "/url-for-card-1",
    id: 1,
  },
  {
    url: ACRobotics,
    title: "Title 2",
    link: "/url-for-card-2",
    id: 2,
  },
  {
    url: ESS,
    title: "Title 3",
    link: "/url-for-card-3",
    id: 3,
  },
  {
    url: WEC,
    title: "Title 4",
    link: "/url-for-card-4",
    id: 4,
  },
  {
    url: pic,
    title: "Title 5",
    link: "/url-for-card-5",
    id: 5,
  },
];
