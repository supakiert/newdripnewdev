import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import images from "./images.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>

    
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Newdrip Dev.</h2>

          <img
            src={images}
            className="w-[30%] h-[30%] object-contain Radius: rounded-circle"
          />
      </motion.div>

      

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-4xl leading-[30px]  "
      >
        <p>I am a skilled DevOps engineer with experience in High Performance Computing </p>
        <p>with skills Parallel programming tools (OpenMP and MPI) Performance Analysis</p>
        <p> (Paraver, Extrae), Job script (sbatch, slurm) and Containers like Docker, K8s</p>
        <p> and experience with Frameworks like React.js, Node.js, Express.js</p>



      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]  "
      >
        <p>Used to have access to use 3 Supercomputer center (Competitive)</p>
        <p>1. Gadi #69 (NCI Australia)</p>
        <p>2. Aspire #197 (NSCC Singapore)</p>
        <p>3. TARA (ThaiSC Thailand)</p>

  
    



      </motion.p>


    
    </>
  );
};

export default SectionWrapper(About, "about");
