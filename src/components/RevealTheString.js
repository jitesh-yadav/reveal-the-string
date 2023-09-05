import { useEffect, useState } from "react";

export default RevealTheString = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/776173"
      );
      const flag = await response.text();
      const flagChars = flag.split("");

      let charCount = 1;
      const interval = setInterval(() => {
        setText(flagChars.slice(0, charCount));
        if (charCount === flagChars.length) {
          clearInterval(interval);
        } else {
          charCount++;
        }
      }, 500);
    })();
  }, []);

  return <h1>{text.length === 0 ? "Loading.." : text}</h1>;
};
