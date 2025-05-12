import React from "react";
import TitleHeader from "../components/TitleHeader/TitleHeader";
import { TechIcon } from "../components/Models/TechLogos/TechIcon";
import { techStackIcons, techStackImgs } from "../constants/index";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Techstack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opcaity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: "#skills", start: "top-center" },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          subTitle="The skills I bring to the table"
        />
        <div className="tech-grid">
          {/*use sketch fab for other 3d icons*/}
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full pb-4">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* {techStackImgs.map((icon) => {
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} />
                </div>
                <div className="padding-x w-full pb-4">
                  <p>{icon.name}</p>
                </div>  
              </div>
            </div>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
