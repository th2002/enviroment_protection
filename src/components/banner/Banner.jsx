import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Earth from "./Earth.svg";

function Banner() {
  const clipPathValue =
    "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)";

  return (
    <div className="relative mt-[60px] flex h-[500px] w-full justify-between bg-[#64CCC5] bg-cover bg-no-repeat object-cover px-8 py-10">
      <div className="flex items-start">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h1 className="text-2xl font-semibold leading-[80px] text-[#DAFFFB] 3xl:text-3xl 3xl:leading-[80px]">
            Tổ chức cuộc thi thiết kế website <br />
            <span>
              <Typewriter
                words={[
                  "“ Environment Protection ”",
                  "Dành cho sinh viên FPT Poly",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
              />
            </span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div>
          <img
            className="absolute left-[150px] top-64 w-[200px] object-cover 2xl:left-[200px] 2xl:top-52 2xl:w-[250px] 3xl:w-[300px]"
            src="assets/images/vector_decor.png"
            alt="Vector"
          />
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, x: 500 },
          visible: { opacity: 1, y: -45, x: 500 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <div
          className="absolute right-[380px] top-0 hidden h-[505px] bg-[url(/assets/images/bg-clip-path-1.png)] bg-cover xxl:flex 2xl:right-[400px] 3xl:right-[500px]"
          style={{
            clipPath: clipPathValue,
            width: "500px",
          }}
        ></div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -175 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <div className="absolute -right-8 -top-2 flex h-full w-fit items-center overflow-hidden">
          <img src={Earth} />
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div>
          <img
            className="absolute -right-28 top-80 w-[300px] -rotate-[25deg] scale-x-[-1] object-cover"
            src="assets/images/hand.png"
            alt="Hand Vector"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
