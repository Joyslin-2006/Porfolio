import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  const tiltProps = isMobile
    ? { tiltMaxAngleX: 0, tiltMaxAngleY: 0, scale: 1, transitionSpeed: 0 }
    : { tiltMaxAngleX: 45, tiltMaxAngleY: 45, scale: 1, transitionSpeed: 450 };

  const motionVariants = isMobile ? {} : fadeIn("right", "spring", index * 0.5, 0.75);

  return (
    <Tilt
      className='xs:max-w-[90%] sm:w-[250px] w-full'
      {...tiltProps}
    >
      <motion.div
        variants={motionVariants}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-none sm:shadow-card'
      >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 max-w-full object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  const textVariants = isMobile ? {} : textVariant();
  const fadeVariants = isMobile ? {} : fadeIn("", "", 0.1, 1);

  return (
    <>
      <motion.div variants={textVariants}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeVariants}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Hi, I’m Joyslin Jenifer, a third-year Computer Science 
       and Engineering student and tech enthusiast. I build
        interactive web applications with clean, user-friendly interfaces, 
        specializing in JavaScript, React and Node.js. With hands-on experience 
        from a frontend development internship, 
        I’m passionate about creating efficient, 
        scalable software solutions that make a real-world 
        impact.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
