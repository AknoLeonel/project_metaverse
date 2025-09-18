'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre a BGT" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"></span> Oferecemos todas as soluções que você precisa para planejar, executar e garantir o sucesso do seu evento esportivo, com{' '}
        <span className="font-extrabold text-white">qualidade e profissionalismo.</span>
        {' '}
        <span className="font-extrabold text-white"></span> Cada evento é único. Por isso, desenvolvemos soluções personalizadas que atendem às suas necessidades específicas, proporcionando uma{' '}
        <span className="font-extrabold text-white">experiência memorável.</span>
        {' '}
        <span className="font-extrabold text-white"></span> Com uma equipe altamente qualificada, garantimos a excelência em cada serviço, desde a produção até a locação de materiais e consultoria especializada para eventos esportivos.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
