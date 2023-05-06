import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../style";
import { sectionwraper } from "../hoc";
import { projects } from "../../constants/index";
import { fadeIn, textVariant } from "../../utils/motion";
import { github } from "../../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 400 }}
        className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
         rounded-2x1"
          />
          <div
            className="absolute inset-0 flex
         justify-end m-3 card-img_hover"
          >
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10
            rounded-full flex justify-center items-center
            cousor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold tex-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flec-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl
       leading-[30px]"
        >
          I'm skilled web developer with experience in Typescript ans
          Javascript, ans React JS. I'm quick learner and collaborate colsely
          with clients to create efficient, scalable and user-friendly solutions
          that solve real-world problems. Let's work together to bring your
          ideas to life!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default sectionwraper(Works, "");
