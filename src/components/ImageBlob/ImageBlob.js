"use client";

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import requestIdleCallback from "@/lib/requestIdleCallback";
import useUIContext from "@/context/ui";

import {
  useCanvas,
  ScrollScene,
  useScrollRig,
} from "@14islands/r3f-scroll-rig";
import ImageBlobMesh from "@/components/three/image-blob-mesh/ImageBlobMesh";
// import Cursor from "components/ui/cursor";
// import ResponsiveImage from "components/ui/responsive-image";

// import * as s from "./ImageBlob.module.css";

// const cn = classNames.bind(s);

let timer;

const ImageBlob = ({
  debugTitle,
  color = "#000000",
  offset = 0,
  prismicImage,
  className,
  darkMode = true,
  cursorText,
  index = 0,
}) => {
  const el = useRef();
  const [imgEl, setImgEl] = useState();
  const toggleNativeCursor = useUIContext((state) => state.toggleNativeCursor);
  const isNativeCursorHidden = useUIContext(
    (state) => state.isNativeCursorHidden
  );
  const { hasVirtualScrollbar } = useScrollRig();

  if (!prismicImage?.dimensions) {
    console.warn(
      `ImageBlob WARNING: ${debugTitle} is missing image from prismic`
    );
  }

  // tell GlobalCanvas to render our WebGl objects
  useCanvas(
    ({ hasVirtualScrollbar }) => {
      if (!hasVirtualScrollbar || !imgEl) return null;
      return (
        <ScrollScene el={el} inViewportMargin={0} resizeDelay={100}>
          {" "}
          {(props) => (
            <ImageBlobMesh
              image={imgEl}
              {...props}
              index={index}
              offset={offset}
              color={color}
            />
          )}{" "}
        </ScrollScene>
      );
    },
    [el, imgEl, color]
  );

  return (
    <>
      <div
        ref={el}
        style={{
          width: 500,
          height: 500,
          background: "green",
        }}
        // className={cn("ImageBlob", className)}
        onMouseEnter={(event) => {
          event.persist();
          requestIdleCallback(() => {
            clearTimeout(timer);
            toggleNativeCursor({
              el,
              event,
            });
          });
        }}
        onMouseLeave={() => {
          timer = setTimeout(() => {
            if (isNativeCursorHidden?.el === el) {
              toggleNativeCursor(false);
            }
          }, 100);
        }}
      ></div>{" "}
    </>
  );
};

ImageBlob.propTypes = {
  color: PropTypes.string,
  darkMode: PropTypes.bool,
  cursorText: PropTypes.string,
  offset: PropTypes.number,
  prismicImage: PropTypes.object,
  index: PropTypes.number,
  debugTitle: PropTypes.string,
};

export default ImageBlob;
