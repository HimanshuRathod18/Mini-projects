import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);

  const projects = [
    projectRef1.current,
    projectRef2.current,
    projectRef3.current,
  ];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=10" },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left side*/}
          <div className="first-project-wrapper" ref={projectRef1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides made simple with Ryde</h2>
              <p className="text-white-50 md:text-xl">
                An app built with react native for user friendly exp
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={projectRef2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library Management" />
              </div>
              <h2>Library Management System</h2>
            </div>
            <div className="project" ref={projectRef3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC directory" />
              </div>
              <h2>YC Directory - Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
