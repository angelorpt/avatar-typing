import { Dispatch, useEffect, useState } from "react";

type useTypistProps = {
  text: string;
  speed: number;
  setText: any;
};

function useTypist({
  text = "Commodo nostrud reprehenderit eu sunt excepteur nostrud reprehenderit culpa excepteur in cupidatat pariatur ullamco voluptate.",
  speed = 50,
  setText,
}: useTypistProps): void {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  setText(displayText);
}

export default useTypist;
