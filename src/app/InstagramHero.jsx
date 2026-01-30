"use client";
import FloatingLinesCanvas from "@/components/FloatingLinesCanvas";

export default function InstagramHero() {
  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      {/* BACKGROUND EFFECT */}
      <FloatingLinesCanvas
        linesGradient={["#E945F5", "#2F4BC0", "#E945F5"]}
        animationSpeed={0.6}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-6xl font-bold tracking-tight">
          LET’S JOIN US
        </h1>
      </div>
    </div>
  );
}
