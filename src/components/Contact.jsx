import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, Phone, ArrowOutward } from "@mui/icons-material";
import { fullStack } from "../assets";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-8 overflow-hidden md:mt-12 md:flex-row md:items-stretch">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.8] rounded-2xl bg-black-100 p-7 sm:p-10"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-[#00cea8]">
            <span className="h-2 w-2 rounded-full bg-[#00cea8]" />
            Available for opportunities
          </div>
          <p className={`${styles.sectionSubText} mt-7`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} marker`}>Let&apos;s talk.</h3>
          <p className="mt-5 max-w-xl text-[16px] leading-7 text-secondary">
            Have a project in mind or want to work together? Send me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="tel:8091758462"
            className="mt-6 flex w-fit items-center gap-3 text-lg font-semibold text-white transition hover:text-[#ffb347]"
          >
            <Phone className="text-[#ffb347]" />
            <span>8091758462</span>
          </a>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href="mailto:sachinatter786@gmail.com"
              aria-label="Send an email to Sachin"
              title="Email Sachin"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-white transition hover:border-[#00cea8] hover:bg-[#00cea8]/10"
            >
              <Email fontSize="medium" />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-atter-6a6107370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Sachin's LinkedIn profile"
              title="LinkedIn profile"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-white transition hover:border-[#5c6cff] hover:bg-[#5c6cff]/10"
            >
              <LinkedIn fontSize="medium" />
            </a>
            <a
              href="https://github.com/Sachin-atter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Sachin's GitHub profile"
              title="GitHub profile"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-white transition hover:border-[#bf61ff] hover:bg-[#bf61ff]/10"
            >
              <GitHub fontSize="medium" />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="flex min-h-[280px] flex-1 items-center justify-center rounded-2xl bg-[#1d1836] p-6 md:min-h-0"
        >
          <img
            src={fullStack}
            alt="Full stack development illustration"
            className="h-auto max-h-[208px] w-auto max-w-full object-contain drop-shadow-[0_0_24px_rgba(92,108,255,0.35)] [image-rendering:pixelated]"
          />
        </motion.div>
      </div>
      <div className="mb-4 mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <h1 className="text-xl font-semibold text-slate-50">
            Thanks for scrolling.
          </h1>
          <p className="mt-1 text-sm text-secondary">
            Take a look at my experience and skills.
          </p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1E1kWtCzswPBUq9CX92JzSsuU7tmQzJ6E/view?usp=drive_link/"
        >
          <Button variant="outlined" endIcon={<ArrowOutward />}>
            View Resume
          </Button>
        </a>
      </div>
      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
