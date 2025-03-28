"use client";

import { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function VideoPlayer() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
      {showVideo ? (
        <iframe
          className="w-full aspect-video"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube-nocookie.com/embed/otD2gzs-c-E?autoplay=1&rel=0"
        />
      ) : (
        <>
          <img
            src="https://cdn.eversite.com/media/bensonderm.com/1233/video-thumb.jpg"
            alt="Benson Dermatology Video"
            className="rounded-xl object-cover w-full h-full"
            loading="lazy"
          />
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center group"
            onClick={() => setShowVideo(true)}
            aria-label="Play video"
          >
            <div className="w-24 h-24 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
              <PlayIcon className="h-12 w-12 text-white" />
            </div>
          </button>
        </>
      )}
    </div>
  );
}
