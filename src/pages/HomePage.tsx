import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="h-screen bg-[#1F2E13]">
        <div className="h-8"></div>
        <div className="container mx-auto my-auto">
          <div className="mt-10 text-[#EDF77A] mx-autow-full flex items-center justify-between gap-10">
            <div className=" w-4/6">
              <p className="text-4xl" data-aos="fade-right">
                Hello, I'm
              </p>
              <p
                className="mt-2 text-7xl font-bold"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Deepesh Sunuwar
              </p>
              <p
                className="mt-5 text-lg"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                A keen enthusiast for learning new things in Computer Science
                from Nepal and a passionate developer with hands-on experience
                in Frontend as well as Backend development. Skilled in Node.js,
                JavaScript, React, Tailwind and C++, I enjoy building efficient,
                scalable, and maintainable software.
              </p>
              <div
                className="links flex gap-10 mt-10"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <a href="https://www.linkedin.com/in/deepeshsunuwar/">
                  <img
                    className="hover:scale-125"
                    src="/assets/linkedin.svg"
                    alt="linked.com"
                  />
                </a>
                <a href="https://github.com/darkkphoenyx">
                  <img
                    className="hover:scale-125"
                    src="/assets/github.svg"
                    alt="github.com"
                  />
                </a>
                <a href="https://www.facebook.com/deepesh.singhsunuwar">
                  <img
                    className="hover:scale-125"
                    src="/assets/facebook.svg"
                    alt="facebook.com"
                  />
                </a>
                <a href="https://www.facebook.com/deepesh.singhsunuwar">
                  <img
                    className="hover:scale-125"
                    src="/assets/twitter.svg"
                    alt="facebook.com"
                  />
                </a>
              </div>
              <div className="downloadCVBtn mt-10">
                <a href="https://drive.usercontent.google.com/download?id=1PwKO1MOBPbMaGkvlqPse-fFzqU_HvQHY&export=download&authuser=0&confirm=t&uuid=e0c7c210-bbcd-4d52-ad3c-63b1f414aaf1&at=APZUnTVl9AiOQVaM9Vsm6AP4Q8DC:1722596331173">
                  <button className="border px-5 py-3 rounded-2xl ">Download CV </button>
                </a>
              </div>
            </div>
            <div
              className=" profile hover:animate-bounce"
              data-aos="flip-right"
            >
              <img
                className="object-fill rounded-full h-96 bg-[#F2FA9B]"
                src="/assets/profile1.png"
                alt="profile image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
