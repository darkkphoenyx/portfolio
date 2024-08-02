import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
const links = [
  {
    id: 1,
    src: "/assets/linkedin.svg",
    alt: "linkedIn",
    url: "https://www.linkedin.com/in/deepeshsunuwar/",
    delay: 300,
  },
  {
    id: 2,
    src: "/assets/github.svg",
    alt: "github",
    url: "https://github.com/darkkphoenyx",
    delay: 350,
  },
  {
    id: 3,
    src: "/assets/facebook.svg",
    alt: "facebook",
    url: "https://www.facebook.com/deepesh.singhsunuwar",
    delay: 400,
  },
  {
    id: 4,
    src: "/assets/twitter.svg",
    alt: "twitter",
    url: "https://www.facebook.com/deepesh.singhsunuwar",
    delay: 450,
  },
];
export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="bg-[--color-bg] h-screen">
        <div className="container mx-auto pt-20">
          <div className="text-[--color-text] mx-auto w-full flex items-center justify-between gap-10">
            <div className=" w-4/6">
              <p className="text-4xl" data-aos="fade-right">
                Hello, I'm
              </p>
              <p
                className="mt-2 text-6xl font-bold"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Deepesh Sunuwar,
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
              <div>
                <ul className="links flex gap-10 mt-8">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      data-aos="fade-right"
                      data-aos-delay={link.delay}
                    >
                      <a href={link.url}>
                        <img
                          className="hover:scale-125"
                          alt={link.alt}
                          src={link.src}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="downloadCVBtn mt-10"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <a href="https://drive.usercontent.google.com/download?id=1PwKO1MOBPbMaGkvlqPse-fFzqU_HvQHY&export=download&authuser=0">
                  <button className="border-2 border-[--color-secondary] hover:bg-[--color-secon] text-[--color-text-secondary] hover:text-[--color-text] text-xl font-semibold px-5 py-3 rounded-2xl bg-[--color-secondary]">
                    Download CV{" "}
                  </button>
                </a>
              </div>
            </div>
            <div
              className=" profile hover:animate-move"
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
      <Footer/>
    </>
  );
}
