import React from "react";

function PlaylistCard({ playlist }) {
    return (
        <div className="w-full max-w-md rounded-2xl bg-[#1c1c1e] p-5 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-white">
                Trending Playlist
            </h2>
            {
                playlist && playlist.map((items, index) => (
                    <div className="group mb-4 flex items-center gap-4 rounded-xl p-3 transition hover:bg-[#2b2b2d]">
                        <img
                            key={index}
                            src={items.image}
                            alt={items.s_name}
                            className="h-16 w-16 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                            <h3 className="font-semibold text-white">{items.s_name}</h3>
                            <p className="text-sm text-gray-400">{items.artist}</p>
                        </div>

                        <button className="rounded-full bg-red-500 p-3 text-white opacity-0 transition group-hover:opacity-100">
                            ▶
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default PlaylistCard;