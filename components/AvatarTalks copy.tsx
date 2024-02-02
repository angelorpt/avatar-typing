"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardBody, Avatar } from "@nextui-org/react";

export default function App() {
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState(
    "Id labore consequat sit officia non enim laboris est."
  );
  const container = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [n, setN] = useState<number>(0);
  const message = `Machines can measure things a user will never notice, and users will notice things a machine can never measure.
If a user thinks your site is slow, a speed test won't convince them otherwise.`;

  // Want to use this in your own code? Just copy and paste everything here, but change the value of the "container" variable (currently '#target') to match your chosen target DOM element.
  // Also be sure the target element has the right white-space CSS in your code.
  // const container: HTMLElement = document.querySelector("#target");

  // let n: number;

  // rerun();

  // function interval(letter: string) {
  //   console.log(letter);
  //   if (letter == ";" || letter == "." || letter == ",") {
  //     return Math.floor(Math.random() * 500 + 500);
  //   } else {
  //     return Math.floor(Math.random() * 130 + 5);
  //   }
  // }

  function typist(text: string, target: HTMLDivElement | null | undefined) {
    console.log("🚀 ~ typist ~ text:", text);
    if (!target) {
      return;
    }
    if (typeof text[n] !== "undefined") {
      target.textContent += text[n];
    }

    setN((value) => value + 1);
    console.log("🚀 ~ typist ~ n:", n);

    if (n < text.length) {
      setTimeout(() => {
        typist(text, target);
      }, 1500);
    }
  }

  // useEffect(() => {
  //   function run() {
  //     container.current.textContent = "";
  //     typist(message, container.current);
  //   }
  //   // run();
  // });

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      const typed = texto;
      const finalText = texto2;

      if (i < finalText.length) {
        setTexto(`${typed}${finalText[i]}`);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);
  }, []);

  return (
    <Card>
      <CardBody className="flex flex-row flex-nowrap gap-2 items-center">
        <Avatar
          src="https://i.pravatar.cc/250?u=a04258114e29026302d"
          size="lg"
        />
        <div id="target" ref={container}>
          {texto}
        </div>
      </CardBody>
    </Card>
  );
}
