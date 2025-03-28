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
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            onClick={() => setShowVideo(true)}
            aria-label="Play video"
          >
            <div className="w-24 h-24 rounded-full text-white group-hover:text-primary flex items-center justify-center transition-colors">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.752 11.1679L11.555 9.03595C11.4043 8.93538 11.229 8.87765 11.048 8.86895C10.867 8.86025 10.687 8.9009 10.5274 8.98655C10.3677 9.0722 10.2342 9.19963 10.1414 9.35523C10.0485 9.51082 9.99961 9.68874 10 9.86995V14.1329C9.99998 14.314 10.0491 14.4916 10.1421 14.647C10.2352 14.8023 10.3686 14.9294 10.5282 15.0148C10.6879 15.1002 10.8677 15.1407 11.0485 15.1319C11.2293 15.1231 11.4044 15.0654 11.555 14.9649L14.752 12.8329C14.889 12.7416 15.0013 12.6179 15.0789 12.4728C15.1566 12.3276 15.1972 12.1656 15.1972 12.0009C15.1972 11.8363 15.1566 11.6743 15.0789 11.5291C15.0013 11.384 14.889 11.2593 14.752 11.1679Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </>
      )}
    </div>
  );
}
