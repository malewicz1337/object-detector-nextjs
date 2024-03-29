"use client";

import ObjectDetection from "@/app/gay-detector/object-detection";
import { Button } from "@/components/ui/moving-border-button";
import { useState } from "react";
import EscapeButton from "./escape-button";
import Link from "next/link";

export default function GayDetector() {
  const [show, setShow] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* <h1 className="gradient-title text-center text-3xl font-extrabold tracking-tighter md:p-6 md:text-6xl lg:text-8xl">
        Gay Detection Alarm
      </h1> */}
      <Link href="/">
        <EscapeButton />
      </Link>

      <article className="flex h-full w-full flex-1 items-center justify-center">
        {show ? (
          <ObjectDetection />
        ) : (
          <Button className="text-lg font-bold" onClick={() => setShow(true)}>
            Test Me
          </Button>
        )}
      </article>
    </main>
  );
}
