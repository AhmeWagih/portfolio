"use client";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "/utils/motion";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full h-screen text-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center"
      >
        <div>
          <motion.div
            variants={slideInFromTop}
            className="uppercase text-sm tracking-widest text-gray-600"
          >
            Let&#39;s build something amazing
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.2)}
            className=" font-bold text-4xl sm:text-5xl md:text-6xl"
          >
            Hi, I&#39;m <span className="text-[#5651e5]">Ahmed Wagih</span>
          </motion.div>
          <motion.div
            className=" font-bold text-4xl sm:text-5xl md:text-6xl py-2 text-gray-700"
            variants={slideInFromLeft(0.5)}
          >
            A Front-End Web Developer
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="py-4 text-gray-600 sm:max-w-[70%] m-auto leading-loose"
          >
            I&#39;m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently.
            I&#39;m focused on building front-end web applications while
            learning back-end technologies.
          </motion.div>
          <motion.div
            variants={slideInFromLeft(1.1)}
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
          >
            <Link
              href="https://www.linkedin.com/in/ahmedwagih02/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/AhmeWagih"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/17pMdjT_B2HCXb9WUltH5E5WkCEL8UqiS/view?usp=sharing"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
