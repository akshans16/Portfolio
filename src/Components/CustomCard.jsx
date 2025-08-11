// import React from 'react';

// function CustomCard({ image, title, text }) {
//   return (
//     <div className="w-72 border rounded-lg shadow-md overflow-hidden font-sans m-4">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-44 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-sm text-[#8e9092] mb-4">{text}</p>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
//             View Project
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CustomCard;

import React from 'react';

function CustomCard({ image, title, text }) {
  return (
    <div className="w-72 h-[350px] border rounded-lg shadow-md overflow-hidden font-sans m-4 flex flex-col">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 truncate" title={title}>
          {title}
        </h3>
        <p
          className="text-sm text-[#8e9092] mb-4 overflow-hidden text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2, // number of lines
            WebkitBoxOrient: 'vertical',
          }}
          title={text}
        >
          {text}
        </p>

        {/* Button at bottom */}
        <div className="">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
