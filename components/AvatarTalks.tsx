"use client";

import React, { useEffect } from "react";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styles from "./AvatarTalks.module.css";

export default function AvatarTalks({ texto }: { texto: string }) {
  const [text, helper] = useTypewriter({
    words: [texto],
    loop: 1,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 5000,
  });

  /* Hook helper */
  const { isType, isDelete, isDelay, isDone } = helper;

  return (
    <div className="flex flex-row items-start justify-start w-full">
      <div className="w-1/12 flex  items-center justify-center">
        <Avatar
          className={isType ? styles["circle"] : ""}
          src="https://randomuser.me/api/portraits/lego/5.jpg"
          isBordered={isType}
          size="lg"
        />
      </div>
      <div className="w-5/12">
        <span>{text}</span>
        {isType && (
          <Cursor cursorStyle="_" cursorColor="grey" cursorBlinking={true} />
        )}
      </div>
    </div>
  );
}
