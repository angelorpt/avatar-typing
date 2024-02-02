"use client";

import { useEffect, useState, useRef } from "react";
import AvatarTalks from "../components/AvatarTalks";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import { setInterval } from "timers/promises";

const list = [
  {
    id: 1,
    show: true,
    text: "Aguarde um momento enquanto pesquiso para você...",
  },
  {
    id: 2,
    show: false,
    text: "Programação é a prática de criar software através de linguagens de codificação. Os programadores utilizam suas habilidades para escrever e depurar código, transformando conceitos em aplicativos e sistemas. Essa disciplina requer lógica, resolução de problemas e criatividade, usando linguagens como Python e JavaScript. Além de traduzir instruções para o computador, a programação envolve a criação de soluções inovadoras. Essencial para a evolução da tecnologia, os programadores desempenham um papel crucial na criação das experiências digitais que permeiam nosso cotidiano.",
  },
  {
    id: 3,
    show: false,
    text: "Um desenvolvedor é um profissional especializado na criação e manutenção de software, utilizando habilidades em programação e tecnologias relevantes. Responsável por traduzir requisitos de projeto em código eficiente, o desenvolvedor enfrenta desafios complexos e colabora com equipes para criar soluções tecnológicas inovadoras. Além das habilidades técnicas, destacam-se qualidades analíticas e criativas. As especialidades incluem desenvolvimento web, mobile e software embarcado, refletindo a diversidade de projetos digitais.",
  },
];

export default function Home() {
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow2(true);
    }, 5000);
  });

  useEffect(() => {
    if (show2) {
      setTimeout(() => {
        setShow3(true);
      }, 20000);
    }
  }, [show2]);

  return (
    <section className="items-center justify-center flex-nowrap gap-4 py-12 w-full h-full">
      <Card className="container flex flex-col h-full p-0 m-0">
        <CardBody className="flex flex-col flex-nowrap gap-9 items-start justify-items-start w-full h-full mt-4">
          <AvatarTalks texto={list[0].text} />
          {show2 && <AvatarTalks texto={list[1].text} />}
          {show3 && <AvatarTalks texto={list[2].text} />}
        </CardBody>
      </Card>
    </section>
  );
}
