import React from "react";
import { useSpring, animated } from "@react-spring/web";

const About = () => {
  const words1 = [
    "I", "am", "a", "passionate", "Full", "Stack", "Developer",
    "with", "a", "focus", "on", "creating", "functional", "and",
    "efficient", "applications."
  ];

  // Animation for the first paragraph (right-to-left)
  const springProps1 = useSpring({
    from: { transform: "translateX(50vw)" }, // Start from the right
    to: { transform: "translateX(0)" },     // Settle in position
    config: { tension: 200, friction: 15 },
    delay: 300,
  });

  // Animation for the second paragraph (left-to-right)
  const springProps2 = useSpring({
    from: { transform: "translateX(-50vw)" }, // Start from the left
    to: { transform: "translateX(0)" },      // Settle in position
    config: { tension: 200, friction: 15 },
    delay: 600, // Add delay so it starts after the first paragraph
  });

  return (
    <section id="about" className="about-section">
      <h2>About me, Shabbeer</h2>

      {/* First Paragraph */}
      <p>
        {words1.map((word, index) => (
          <animated.span
            key={index}
            style={{
              ...springProps1,
              display: "inline-block",
              marginRight: "0.5ch", // Add space between words
            }}
          >
            {word}
          </animated.span>
        ))}
      </p>

      {/* Second Paragraph */}
      <animated.p style={springProps2}>
        In my free time, I enjoy keeping fit, spending time with friends
        and family, and learning more about all things in tech.
      </animated.p>
    </section>
  );
};

export default About;
