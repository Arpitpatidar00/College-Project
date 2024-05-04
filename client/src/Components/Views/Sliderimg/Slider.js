import React from "react";
import video1 from './5127768-uhd_3840_2160_24fps.mp4'
import video2 from './3161278-hd_1920_1080_24fps.mp4'
import video3 from './5127768-uhd_3840_2160_24fps.mp4'

import { TECarousel, TECarouselItem, TERipple } from "tw-elements-react";
import "./style.css";

export default function Slider(): JSX.Element {
  return (
    <div id='slider'>
      {/* Wrapper div */}
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        theme={{
          carouselWrapper: " h-screen",
          indicatorsWrapper:
            "absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-30",
        }}
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="video-container">
              <video
                className="min-w-1200 min-h-600 max-w-1200 w-1200 h-600 xl:min-w-0 xl:min-h-0"
                playsInline
                autoPlay
                muted
                loop
              >
                <source
                  className=""
                  src={video1}
                  type="video/mp4"
                />
              </video>
              <div className="button-container">
                <div className="button-wrapper">
                  <TERipple rippleColor="light">
                    <a
                      type="button"
                      className="button start-tutorial"
                      href="#!"
                      role="button"
                    >
                      Start tutorial
                    </a>
                  </TERipple>
                  <TERipple rippleColor="light">
                    <a
                      type="button"
                      className="button read-more"
                      href="#!"
                      role="button"
                    >
                      Read more
                    </a>
                  </TERipple>
                </div>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video
              className=" min-w-1200 min-h-600 max-w-1200 w-1200 h-600 xl:min-w-0 xl:min-h-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className=""
                src={video2}
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white text-center px-14 px-md-0">
                  <h2 className="text-3xl font-semibold mb-4">
                    You can place here any content
                  </h2>
                </div>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video
              className="min-w-1200 min-h-600 max-w-1200 w-1200 h-600 xl:min-w-0 xl:min-h-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className=""
                src={video3}
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white text-center px-14 px-md-0">
                  <h2 className="text-3xl font-semibold mb-4">
                    And cover it with any mask
                  </h2>
                  <TERipple rippleColor="light">
                    <a
                      type="button"
                      className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-1200 h-800"
                      href="#!"
                      role="button"
                    >
                      Learn more
                    </a>
                  </TERipple>
                </div>
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}
