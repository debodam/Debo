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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

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
    <div key={card.id} className="card">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card-image"></div>
      <div className="card-text">
        <p className="card-title">{card.title}</p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: StudentUnion,
    title: "Title 1",
    id: 1,
  },
  {
    url: ACRobotics,
    title: "Title 2",
    id: 2,
  },
  {
    url: ESS,
    title: "Title 3",
    id: 3,
  },
  {
    url: WEC,
    title: "Title 4",
    id: 4,
  },
  {
    url: pic,
    title: "Title 5",
    id: 5,
  },
  //   {
  //     url: pic,
  //     title: "Title 6",
  //     id: 6,
  //   },
  //   {
  //     url: pic,
  //     title: "Title 7",
  //     id: 7,
  //   },
];
