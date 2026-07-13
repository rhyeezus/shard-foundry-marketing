"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function WorldScene({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true, // Enables data-speed/data-lag attributes for parallax
      normalizeScroll: true, // Prevents address bar from hiding on mobile
    });

    // REVEAL ANIMATIONS
    // The existing system from motion-patterns-task.md, now enhanced by ScrollSmoother.
    // I've adjusted the stagger amount for a more refined feel.
    const revealBatch = ScrollTrigger.batch(".reveal", {
      interval: 0.1,
      batchMax: 3,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15, // Slightly increased stagger
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { autoAlpha: 0, y: 30, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, y: 30, overwrite: true }),
    });

    // Refresh ScrollTrigger when new .reveal elements are batched
    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".reveal", { autoAlpha: 0, y: 30 })
    );

    return () => {
      // Kill the smoother and ScrollTriggers on component unmount
      smoother.kill();
      revealBatch.forEach((batch) => batch.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}