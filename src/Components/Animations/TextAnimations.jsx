import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function TextAnimations({ text }) {
  const AnimatedText = ({ text }) => {
    const textRef = useRef(null);
    const hasAnimated = useRef(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              const words = textRef.current.querySelectorAll(".word");
              anime({
                targets: words,
                translateY: [30, 0],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 750,
                delay: anime.stagger(100),
                complete: () => {
                  hasAnimated.current = true;
                },
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      if (textRef.current) {
        observer.observe(textRef.current);
      }
      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
    }, []);
    const splitTextToWords = (text) => {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="word"
          style={{ display: "inline-block", margin: "0 5px" }}
        >
          {word}
        </span>
      ));
    };
    return (
      <div ref={textRef} style={{ display: "inline-block" }}>
        {splitTextToWords(text)}
      </div>
    );
  };

  return (
    <div>
      <AnimatedText text={text} />
    </div>
  );
}
