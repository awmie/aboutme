import { useEffect, useState } from 'react';

const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ';

const TextScramble = ({ text }: { text: string }) => {
  const [output, setOutput] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const next = () => {
      let result = '';
      for (let i = 0; i < text.length; i++) {
        if (i < counter) {
          result += text[i];
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      setOutput(result);
      
      if (counter < text.length) {
        const timeout = setTimeout(() => {
          setCounter(c => c + 1/3);
        }, 30);
        return () => clearTimeout(timeout);
      }
    };

    next();
  }, [text, counter]);

  return <span>{output}</span>;
};

export default TextScramble;
