

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Link } from "react-router-dom";
// // // import { useInView } from "react-intersection-observer";
// // // import "../Card.css";

// // // const CardData = () => {
// // //   const [items, setItems] = useState([]);
// // //   const [selectedId, setSelectedId] = useState(null);
// // //   const [ref, inView] = useInView();

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await fetch("http://localhost:4000/add/");
// // //         const data = await response.json();
// // //         const shuffledData = data.sort(() => 0.5 - Math.random());
// // //         setItems(shuffledData.slice(0, 12));
// // //       } catch (error) {
// // //         console.error("Error fetching data:", error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (inView) {
// // //       console.log("CardData is in view! Trigger animation here.");
// // //     }
// // //   }, [inView]);

// // //   return (
// // //     <div ref={ref} className={`card-container ${inView ? "visible" : ""}`}>
// // //       {items.map((item) => (
// // //         <Link to={`/details/${item.id}`} key={item.id} className="card-link">
// // //           <motion.div
// // //             layoutId={item.id}
// // //             initial={{ opacity: 0, y: -50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -50 }}
// // //             className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative"
// // //           >
// // //             <img className="w-full" src={item.image} alt={item.placeName} />
// // //             <div className="px-6 py-4">
// // //               <motion.h5 className="font-bold text-xl mb-2">{item.placeName}</motion.h5>
// // //               <motion.p className="text-gray-700 text-base">{item.description}</motion.p>
// // //             </div>
// // //           </motion.div>
// // //         </Link>
// // //       ))}

// // //       <AnimatePresence>
// // //         {selectedId && (
// // //           <motion.div
// // //             layoutId={selectedId}
// // //             initial={{ opacity: 0, y: -50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -50 }}
// // //             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
// // //             onClick={() => setSelectedId(null)}
// // //           >
// // //             <motion.div
// // //               className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
// // //               initial={{ opacity: 0, y: -50 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: -50 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <img
// // //                 className="w-full"
// // //                 src={items.find((item) => item.id === selectedId)?.image}
// // //                 alt={items.find((item) => item.id === selectedId)?.placeName}
// // //               />
// // //               <div className="px-6 py-4">
// // //                 <motion.h5 className="font-bold text-xl mb-2">
// // //                   {items.find((item) => item.id === selectedId)?.placeName}
// // //                 </motion.h5>
// // //                 <motion.p className="text-gray-700 text-base">
// // //                   {items.find((item) => item.id === selectedId)?.description}
// // //                 </motion.p>
// // //               </div>
// // //               <div className="px-6 pt-4 pb-2">
// // //                 <motion.button
// // //                   className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
// // //                   onClick={() => setSelectedId(null)}
// // //                 >
// // //                   Close
// // //                 </motion.button>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default CardData;
// // // CardData.js
// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import { useInView } from "react-intersection-observer";
// // import "../Card.css";

// // const CardData = () => {
// //   const [items, setItems] = useState([]);
// //   const [selectedId, setSelectedId] = useState(null);
// //   const [ref, inView] = useInView();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("http://localhost:4000/add/");
// //         const data = await response.json();
// //         const shuffledData = data.sort(() => 0.5 - Math.random());
// //         setItems(shuffledData.slice(0, 12));
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     if (inView) {
// //       console.log("CardData is in view! Trigger animation here.");
// //     }
// //   }, [inView]);

// //   return (
// //     <div ref={ref} className={`card-container ${inView ? "visible" : ""}`}>
// //       {items.map((item) => (
// //         <Link to={`/details/${item.id}`} key={item.id} className="card-link">
// //           <div className="flip-card">
// //             <div className="flip-card-inner">
// //               <div className="flip-card-front">
// //                 <motion.div
// //                   layoutId={item.id}
// //                   initial={{ opacity: 0, y: -50 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -50 }}
// //                   className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative card"
// //                 >
// //                   <img className="w-full" src={item.image} alt={item.placeName} />
// //                   <div className="px-6 py-4 container-card">
// //                     <motion.h5 className="font-bold text-xl mb-2 placename">{item.placeName}</motion.h5>
// //                     <motion.p className="text-gray-700 text-base para">{item.description}</motion.p>
// //                   </div>
// //                 </motion.div>
// //               </div>
// //               <div className="flip-card-back">
// //                 <p className="title">BACK</p>
// //                 <p>{item.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </Link>
// //       ))}

// //       <AnimatePresence>
// //         {selectedId && (
// //           <motion.div
// //             layoutId={selectedId}
// //             initial={{ opacity: 0, y: -50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -50 }}
// //             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
// //             onClick={() => setSelectedId(null)}
// //           >
// //             <motion.div
// //               className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
// //               initial={{ opacity: 0, y: -50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -50 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <img
// //                 className="w-full"
// //                 src={items.find((item) => item.id === selectedId)?.image}
// //                 alt={items.find((item) => item.id === selectedId)?.placeName}
// //               />
// //               <div className="px-6 py-4">
// //                 <motion.h5 className="font-bold text-xl mb-2">
// //                   {items.find((item) => item.id === selectedId)?.placeName}
// //                 </motion.h5>
// //                 <motion.p className="text-gray-700 text-base">
// //                   {items.find((item) => item.id === selectedId)?.description}
// //                 </motion.p>
// //               </div>
// //               <div className="px-6 pt-4 pb-2">
// //                 <motion.button
// //                   className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
// //                   onClick={() => setSelectedId(null)}
// //                 >
// //                   Close
// //                 </motion.button>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default CardData;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
// import "../Card.css";

// const CardData = () => {
//   const [items, setItems] = useState([]);
//   const [selectedId, setSelectedId] = useState(null);
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/add/");
//         const data = await response.json();
//         const shuffledData = data.sort(() => 0.5 - Math.random());
//         setItems(shuffledData.slice(0, 12));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (inView) {
//       console.log("CardData is in view! Trigger animation here.");
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} className={`card-container ${inView ? "visible" : ""}`}>
//       {items.map((item) => (
//         <Link to={`/details/${item.id}`} key={item.id} className="card-link">
//           <div className="flip-card">
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <motion.div
//                   layoutId={item.id}
//                   initial={{ opacity: 0, y: -50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   className="max-w-sm rounded overflow-hidden shadow-lg m-1 relative card"
//                 >
//                   <img className="w-full" src={item.image} alt={item.placeName} />
//                   <div className="px-2 py-1 container-card">
//                     <motion.h5 className="font-bold text-xl mb-2 placename">{item.placeName}</motion.h5>
//                   </div>
//                 </motion.div>
//               </div>
//               <div className="flip-card-back">
//                 <p className="title">{item.placeName}</p>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}

//       <AnimatePresence>
//         {selectedId && (
//           <motion.div
//             layoutId={selectedId}
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
//             onClick={() => setSelectedId(null)}
//           >
//             <motion.div
//               className="max-w-sm rounded overflow-hidden shadow-lg m-1 bg-white"
//               initial={{ opacity: 0, y: -50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 className="w-full"
//                 src={items.find((item) => item.id === selectedId)?.image}
//                 alt={items.find((item) => item.id === selectedId)?.placeName}
//               />
//               <div className="px-6 py-4">
//                 <motion.h5 className="font-bold text-xl mb-2">
//                   {items.find((item) => item.id === selectedId)?.placeName}
//                 </motion.h5>
//                 <motion.p className="text-gray-700 text-base">
//                   {items.find((item) => item.id === selectedId)?.description}
//                 </motion.p>
//               </div>
//               <div className="px-6 pt-4 pb-2">
//                 <motion.button
//                   className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//                   onClick={() => setSelectedId(null)}
//                 >
//                   Close
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CardData;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "../Card.css";

const CardData = () => {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [ref, inView] = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/add/");
        const data = await response.json();
        const shuffledData = data.sort(() => 0.5 - Math.random());
        setItems(shuffledData.slice(0, 12));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inView) {
      console.log("CardData is in view! Trigger animation here.");
    }
  }, [inView]);

  return (
    <div ref={ref} className={`card-container ${inView ? "visible" : ""}`}>
      {items.map((item) => (
        <Link to={`/details/${item.id}`} key={item.id} className="card-link">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <motion.div
                  layoutId={item.id}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative card"
                >
                  <img className="w-full img" src={item.image} alt={item.placeName} />
                  <div className="px-6 py-4 container-card">
                    <motion.h5 className="font-bold text-xl mb-2 placename">{item.placeName}</motion.h5>
                  </div>
                </motion.div>
              </div>
              <div className="flip-card-back">
                <p className="title">{item.placeName}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="w-full img"
                src={items.find((item) => item.id === selectedId)?.image}
                alt={items.find((item) => item.id === selectedId)?.placeName}
              />
              <div className="px-6 py-4">
                <motion.h5 className="font-bold text-xl mb-2">
                  {items.find((item) => item.id === selectedId)?.placeName}
                </motion.h5>
                <motion.p className="text-gray-700 text-base">
                  {items.find((item) => item.id === selectedId)?.description}
                </motion.p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <motion.button
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  onClick={() => setSelectedId(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardData;
