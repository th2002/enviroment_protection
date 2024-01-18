import { Typewriter } from "react-simple-typewriter";
import Reveal from "~/Reveal";
import Earth from "./Earth.svg";

function Banner() {
  const clipPathValue =
    "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)";

  return (
    <div className="relative mt-[60px] flex h-[500px] w-full justify-between bg-[#64CCC5] bg-cover bg-no-repeat object-cover px-8 py-10">
      <div className="flex items-start">
        <Reveal>
          <h1 className="text-2xl font-semibold leading-[80px] text-[#DAFFFB] 2xl:text-4xl">
            Tổ chức cuộc thi thiết kế website <br />
            <span>
              <Typewriter
                words={[
                  "“ Environment Protection ”",
                  "Dành cho sinh viên FPT Polytechnic",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
              />
            </span>
          </h1>
        </Reveal>
      </div>

      <div>
        <img
          className="absolute left-[150px] top-64 w-[200px] object-cover 2xl:left-[250px] 2xl:top-52 2xl:w-[300px]"
          src="assets/images/vector_decor.png"
          alt="Vector"
        />
      </div>

      <div
        className="absolute right-[380px] top-0 h-full bg-[url(/assets/images/bg-clip-path-1.png)] bg-cover 2xl:right-[500px]"
        style={{
          clipPath: clipPathValue,
          width: "500px",
        }}
      ></div>
      <div className="absolute -right-8 -top-2 flex h-full items-center overflow-hidden">
        <img src={Earth} />
      </div>

      <div>
        <img
          className="absolute -right-28 top-80 w-[300px] -rotate-[25deg] scale-x-[-1] object-cover 2xl:w-[500px]"
          src="assets/images/hand.png"
          alt="Hand Vector"
        />
      </div>
    </div>
  );
}

export default Banner;
