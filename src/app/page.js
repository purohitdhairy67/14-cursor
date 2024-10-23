"use client";

import CursorBlob from "@/components/three/cursor-blob/CursorBlob";
// import ImageBlob from "@/components/ImageBlob/ImageBlob";
import styles from "./page.module.scss";

import { GlobalCanvas } from "@14islands/r3f-scroll-rig";
import CursorTracker from "@/components/ui/cursor-tracker/CursorTracker";

// import { Html } from "@react-three/drei"


export default function Home() {
  console.log("Hello")
  return (
    <div className={styles.page}>
      {/* <div className={styles.card}>
        <p>Hello</p>
      </div> */}
      <GlobalCanvas
        // these settings are no longer default in scroll-rig
        gl={{
          antialias: false, // only 2D so we antialias manually in frag shader
          depth: false, //  only 2D so no depth needed
        }}
        frameloop="demand" // only render on demand
        raycaster={{
          enabled: false,
        }} // disable raycaster
        flat={false} // turn off tonemapping by default to provide better hex matching - images get weird color and hex won't match DOM
        style={{
          zIndex: 1, // place canvas on top of DOM
          pointerEvents: "none", // ignore events
        }}
        orthographic // no need for a perspective camera, everything is flat layers
      >
        <CursorBlob />
      </GlobalCanvas>
      <CursorTracker />
    </div>
  );
}
