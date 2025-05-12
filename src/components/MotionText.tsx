
// import { useEffect, useRef } from "react";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";
// import "./motion.css"; // We'll add custom motion CSS here

// const MotionText = () => {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const split = Splitting({ target: headingRef.current, by: "chars" });
//     const container = containerRef.current;
//     const el = headingRef.current;

//     const update = () => {
//       const originalPathWidth = el.clientWidth;
//       const m = container.clientWidth / originalPathWidth;

//       el.style.setProperty("--x", m);

//       if (container.clientWidth < originalPathWidth) {
//         el.style.setProperty("--o", "left");
//       } else {
//         el.style.setProperty("--o", "center");
//       }
//     };

//     const observer = new ResizeObserver(update);
//     observer.observe(container);
//     update(); // Initial call

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full max-w-[80rem] mx-auto flex items-center justify-center h-screen bg-black text-[coral] overflow-hidden"
//     >
//       <h2
//         ref={headingRef}
//         className="relative uppercase font-mono text-[1.8rem] motion-text"
//         data-splitting
//       >
//         I am animating on a path
//       </h2>
//     </div>
//   );
// };

// export default MotionText;
