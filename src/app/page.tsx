"use client";
import gsap from "gsap";
import {
  Boss,
  Currencies,
  Footer,
  Header,
  Hero,
  Loading,
  PreFooter,
} from "./component";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const time = gsap.getById("loading");
    setTimeout(() => setIsDone(true), (time as any)._end * 1000);
  }, []);

  return isDone ? <Page /> : <Loader />;
}

const Loader = () => {
  return <Loading />;
};

const Page = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <Boss />
      <Currencies />
      <PreFooter />
      <Footer />
    </main>
  );
};
