'use client';

import { motion } from 'framer-motion';
import LogoContainer from '../components/Logo';
import BlinkingImage from '../components/BlinkingImage';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <BlinkingImage src="/10.png" alt="Descrição da imagem" />;

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <LogoContainer />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
