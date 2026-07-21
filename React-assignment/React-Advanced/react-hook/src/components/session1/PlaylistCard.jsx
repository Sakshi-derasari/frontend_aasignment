import React from "react";

function PlaylistCard({ playlist }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {playlist &&
        playlist.map((items, index) => (
          
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md w-64 overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={items.image}
                alt={items.song}
                className="w-full h-40 object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                ❤️
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {items.song}
              </h2>
              <p className="text-sm text-gray-500">{items.artist}</p>

              {/* Button */}
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                ▶ Play
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PlaylistCard;

// import React from "react";

// function PlaylistCard({ playlist }) {
//     return (
//         <div className="w-full max-w-md rounded-2xl bg-[#1c1c1e] p-5 shadow-xl">
//             <h2 className="mb-6 text-2xl font-bold text-white">
//                 Trending Playlist
//             </h2>
//             {
//                 playlist && playlist.map((items, index) => (
//                     <div className="group mb-4 flex items-center gap-4 rounded-xl p-3 transition hover:bg-[#2b2b2d]">
//                         <img
//                             key={index}
//                             src={items.image}
//                             alt={items.s_name}
//                             className="h-16 w-16 rounded-lg object-cover"
//                         />

//                         <div className="flex-1">
//                             <h3 className="font-semibold text-white">{items.s_name}</h3>
//                             <p className="text-sm text-gray-400">{items.artist}</p>
//                         </div>

//                         <button className="rounded-full bg-red-500 p-3 text-white opacity-0 transition group-hover:opacity-100">
//                             ▶
//                         </button>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }

// export default PlaylistCard;