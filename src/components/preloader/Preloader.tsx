import { useEffect } from "react";
import { useLoading } from "../../layouts/LoadingContent";
import AOS from "aos";
import "aos/dist/aos.css";

const job1 = "WELCOME\u00A0\u00A0STRANGER";

const Preloader = () => {
  const { setLoading } = useLoading();
  AOS.init({
    duration: 1500,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="preloader bg-black h-[100vh] w-[100%] text-white flex items-center justify-center text-center overflow-hidden b-0 l-0 t-0 z-55 fixed">
      <div className="text-container flex items-center justify-center h-[60px] w-[100%] overflow-hidden  ">
        <ul className="flex">
          {job1.split("").map((letter, index) => (
            <li key={index}>
              <p
                className={`pr-1 text-6xl font-semibold ${
                  index < 8 ? "text-white" : "text-red-600"
                }`}
                data-aos={index < 8 ? "fade-up" : "fade-down"}
                data-aos-delay={index * 50}
              >
                {letter}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preloader;
