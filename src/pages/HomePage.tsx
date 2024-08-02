import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer/Footer";

const message1 = [
  {
    id: 1,
    letter: "D",
    delay: 0,
  },
  {
    id: 2,
    letter: "e",
    delay: 50,
  },
  {
    id: 3,
    letter: "e",
    delay: 100,
  },
  {
    id: 4,
    letter: "p",
    delay: 150,
  },
  {
    id: 5,
    letter: "e",
    delay: 200,
  },
  {
    id: 6,
    letter: "s",
    delay: 250,
  },
  {
    id: 7,
    letter: "h",
    delay: 300,
  },
  {
    id: 8,
    letter: "\u00A0",
    delay: 350,
  },
  {
    id: 9,
    letter: "S",
    delay: 400,
  },
  {
    id: 10,
    letter: "u",
    delay: 450,
  },
  {
    id: 11,
    letter: "n",
    delay: 500,
  },
  {
    id: 12,
    letter: "u",
    delay: 550,
  },
  {
    id: 13,
    letter: "w",
    delay: 600,
  },
  {
    id: 14,
    letter: "a",
    delay: 650,
  },
  {
    id: 14,
    letter: "r",
    delay: 700,
  },
  {
    id: 15,
    letter: "'",
    delay: 750,
  },
  {
    id: 16,
    letter: "s",
    delay: 800,
  },
];

const message2 = [
  {
    id: 1,
    letter: "P",
    delay: 0,
  },
  {
    id: 2,
    letter: "O",
    delay: 50,
  },
  {
    id: 3,
    letter: "R",
    delay: 100,
  },
  {
    id: 4,
    letter: "T",
    delay: 150,
  },
  {
    id: 5,
    letter: "F",
    delay: 200,
  },
  {
    id: 6,
    letter: "O",
    delay: 250,
  },
  {
    id: 7,
    letter: "L",
    delay: 300,
  },
  {
    id: 8,
    letter: "I",
    delay: 350,
  },
  {
    id: 9,
    letter: "O",
    delay: 400,
  },
];
const job1 = "Full-stack\u00A0\u00A0Developer\u00A0\u00A0\u00A0\u00A0";
const job2 = "Graphics\u00A0\u00A0Designer\u00A0";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container mx-auto text-start h-screen">
        <div
          className="upperStoke h-20 ml-16 w-full border-l border-[--color-secondary] float-left"
          data-aos="fade-down"
          data-aos-delay="0"
        ></div>
        <div className="Portfolio-details px-10">
          <ul className="message1 flex font-secondary px-5 text-3xl ">
            {message1.map((letter) => (
              <li
                key={letter.id}
                data-aos="fade-right"
                data-aos-delay={letter.delay}
                data-aos-duration="300"
              >
                <p className="font-secondary pr-1">{letter.letter}</p>
              </li>
            ))}
          </ul>
          <ul className="message2 flex text-10xl px-5 font-extrabold">
            {message2.map((letter) => (
              <li
                key={letter.id}
                data-aos="fade-right"
                data-aos-delay={letter.delay}
                data-aos-duration="800"
              >
                <p className="font-tertiary">{letter.letter}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="jobs-details text-end ml-20 text-xl uppercase pr-10 flex mt-10">
          <ul className="flex">
            {job1.split("").map((letter, index) => (
              <li key={index}>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  data-aos-duration="300"
                >
                  {letter}
                </p>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {job2.split("").map((letter, index) => (
              <li key={index}>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  data-aos-duration="300"
                >
                  {letter}
                </p>
              </li>
            ))}
          </ul>
          <div className="h-1 pt-3 w-full border-b border-[--color-secondary] float-right"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
