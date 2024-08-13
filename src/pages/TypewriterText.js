import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let i = 0;
      const typeCharacter = () => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i < text.length) {
          setTimeout(typeCharacter, 27); // Adjust typing speed here
        }
      };
      typeCharacter();
    }
  }, [inView, text]);

  return <span ref={ref}>{displayedText}</span>;
};

export default TypewriterText;
