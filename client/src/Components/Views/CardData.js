import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from './Sliderimg/Videos/sliderimg1.jpg';

const CardData = () => {
  const items = [
    { id: 1, title: "The Coldest Sunset", subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
    { id: 2, title: "Title 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Title 3", subtitle: "Subtitle 3" }
  ];

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex flex-wrap justify-center">
      {items.map(item => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
          <img className="w-full" src={image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.subtitle}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {!selectedId && (
              <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => setSelectedId(item.id)}>Open</button>
            )}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <img className="w-full" src={image} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{items[selectedId - 1].title}</div>
                <p className="text-gray-700 text-base">{items[selectedId - 1].subtitle}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => setSelectedId(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardData;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react"; // Import Material Tailwind components
// import image from './Sliderimg/Videos/sliderimg1.jpg';

// const CardData = () => {
//   const items = [
//     { id: 1, title: "The Coldest Sunset", subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
//     { id: 2, title: "Title 2", subtitle: "Subtitle 2" },
//     { id: 3, title: "Title 3", subtitle: "Subtitle 3" }
//   ];

//   const [selectedId, setSelectedId] = useState(null);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {/* Render the CardDefault component */}
//       <Card className="mt-6 w-96">
//         <CardHeader color="blue-gray" className="relative h-56">
//           <img
//             src={image} // Use dynamic image source
//             alt="card-image"
//             className="h-full w-full"



//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             UI/UX Review Check
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by
//             walk and near to &quot;Naviglio&quot; where you can enjoy the main
//             night life in Barcelona.
//           </Typography>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button>Read More</Button>
//         </CardFooter>
//       </Card>
      
//       {items.map(item => (
//         <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
//           <img className="w-full" src={image} alt="Sunset in the mountains" />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{item.title}</div>
//             <p className="text-gray-700 text-base">{item.subtitle}</p>
//           </div>
//           <div className="px-6 pt-4 pb-2">
//             {!selectedId && (
//               <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => setSelectedId(item.id)}>Open</button>
//             )}
//           </div>
//         </div>
//       ))}

//       <AnimatePresence>
//         {selectedId && (
//           <motion.div
//             layoutId={selectedId}
//             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
//             onClick={() => setSelectedId(null)}
//           >
//             <motion.div
//               layoutId={selectedId}
//               className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
//               initial={{ opacity: 0, y: -50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//             >
//               <img className="w-full" src={image} alt="Sunset in the mountains" />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{items[selectedId - 1].title}</div>
//                 <p className="text-gray-700 text-base">{items[selectedId - 1].subtitle}</p>
//               </div>
//               <div className="px-6 pt-4 pb-2">
//                 <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => setSelectedId(null)}>Close</button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CardData;
