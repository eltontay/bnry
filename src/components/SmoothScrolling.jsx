"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: .2, duration: 1, smoothTouch: false, smoothWheel: false }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
