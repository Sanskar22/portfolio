import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../../style";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { sectionwraper } from "../hoc";
import { slideIn } from "../../utils/motion";

// template_cxhlz9p service_hb5a2gj Sanskar Verma px2Cv2J5wGAbx2OsG

const Contact = () => {
  const formRef = useRef();

  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  let [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .send(
        "service_hb5a2gj",
        "template_cxhlz9p",
        {
          from_name: form.name,
          to_name: "Sanskar",
          from_email: form.email,
          to_email: "sanskarverma124@gmail.com",
          message: form.message,
        },
        "px2Cv2J5wGAbx2OsG"
      )
      .then(
        () => {
          setloading(false);
          alert("Thank you I will get back too u as soon as possible");
          setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row
  flex-col-reverse flex  justify-around"
    >
      <motion.div
        variants={slideIn("left", "tween, 0.2, 1")}
        className="flex-[0.75] bg-black-100 p-8 max-w-lg rounded-2xl  "
      >

        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" Enter Your Name"
              className="bg-tertiary py-4 px-6
              placeholder: text-secondary text-white rounded-lg
              outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="bg-tertiary py-4 px-6
          placeholder: text-secondary text-white rounded-lg
          outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              row="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="bg-tertiary py-4 px-6
          placeholder: text-secondary text-white rounded-lg
          outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary
          py-3 px-8 outline-none w-fit text-white
          font-bold  shadow-md shadow-primary rounded-xl"
          >
            {!loading ? "Send" : "Sending.."}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween, 0.2, 1")}
        className="xl:flex xl:h-auto w-2/4 md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default sectionwraper(Contact, "contact");
