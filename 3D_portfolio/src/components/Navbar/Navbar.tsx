import { useState, useEffect } from "react";
import { navLinks } from "../../constants/index";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // the handleScroll function is to check if we have scrolled so that we can givve the background
    // color to the navbar
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    // we add an eventlistener and the unmount it
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Himanshu Rathod
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
          {/* keeping it different for desktop and mobile, for desktop show all items but for mobile just show contact*/}
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
