"use client";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { TextPlugin } from "gsap/TextPlugin";

const Loading = () => {
  let firstText = "Na who support us we go support during SAPA";
  let secondText = "But what's SAPA?";
  let thirdText = "Sapa is the absolute of absolute nothingness financially";
  let finalText = "And it can affect";

  let refs: any = useRef([]);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const images = new Array(8).fill("");

  const splitWords = (phrase: string) => {
    let body: any = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(
        <p className="mr-[1.5vw]" key={word + "_" + i}>
          {letters}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: any = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-[.1]"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}>
          {letter}
        </span>
      );
    });

    return letters;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const images = document.querySelectorAll(".images");

    const tl = gsap.timeline({
      id: "loading",
    });

    tl.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.04,
      duration: 1,
    })
      .to("#last", {
        color: "red",
      })
      .to(container.current, {
        opacity: 0,
        scale: 0.5,
      })
      .to(
        imageContainer.current,
        {
          display: "block",
        },
        "<"
      );

    images.forEach(function (image, i) {
      tl.to(image, {
        stagger: 0.5,
        opacity: 1,
      });
    });

    tl.to(".page", {
      clipPath: "inset(50% 50% 49% 50%)",
      duration: 1,
    });
  }, []);

  return (
    <div
      className="bg-black text-white h-screen page"
      // style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)" }}
    >
      <div
        ref={container}
        className="absolute flex items-center justify-center w-full h-screen flex-col gap-5">
        <h1 className="text-2xl flex flex-wrap mb-3 md:max-w-[50%] max-w-[70%] text-center items-center justify-center leading-relaxed">
          {splitWords(firstText)}
        </h1>
        <h1 className="text-2xl flex flex-wrap mb-3 md:max-w-[50%] max-w-[70%] text-center items-center justify-center leading-relaxed">
          {splitWords(secondText)}
        </h1>
        <h1 className="text-2xl flex flex-wrap mb-3 md:max-w-[50%] max-w-[70%] text-center items-center justify-center leading-relaxed">
          {splitWords(thirdText)}
        </h1>
        <h1 className="text-2xl flex flex-wrap mb-3 md:max-w-[50%] max-w-[70%] text-center items-center justify-center leading-relaxed">
          {splitWords(finalText)}{" "}
          <span id="last">{splitWords("ANYONE...")}</span>
        </h1>
      </div>

      <div
        ref={imageContainer}
        className="relative hidden text-red-500 w-full h-screen">
        {images.map((v: any, i: number) => {
          return (
            <div className="" key={i}>
              <Image
                src={`/${i}.jpeg`}
                alt="jpeg"
                width={300}
                height={300}
                priority
                className="absolute opacity-0 images top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
