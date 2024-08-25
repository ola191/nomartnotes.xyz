import ThreeScene from "@/components/ThreeScene";
import { useRef, useEffect } from "react";

export default function Samples() {
    return (
        <main className="flex w-full h-auto flex-col gap-y-8 pb-12">
            <div className="flex w-full">
                <h3 className="font-semibold text-gray-600 text-xl text-center w-full py-2">SAMPLE PROJECTS</h3>
            </div>
            <div className="flex w-full flex-row h-auto py-8 rounded-md items-center justify-between z-10 px-10 bg-gradient-to-br from-[rgba(239,239,239, 0.925)] to-[#e8e8e8] shadow-md">

                <div className="paper relative w-[350px] h-[450px] bg-borderColor rounded-md flex flex-col items-center justify-center">
                </div>
                
                <div className="paper relative w-[350px] h-[450px] bg-borderColor rounded-md flex flex-col items-center justify-center">
                    <ThreeScene />
                </div>
                
                <div className="paper relative w-[350px] h-[450px] bg-borderColor rounded-md flex flex-col items-center justify-center">
                    <VideoComponent />
                </div>

            </div>
        </main>
    );
}

function VideoComponent() {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.playbackRate = 6;

        const handleMouseEnter = () => {
            videoElement.playbackRate = 1;
        };

        const handleMouseLeave = () => {
            videoElement.playbackRate = 6;
        };

        videoElement.addEventListener("mouseenter", handleMouseEnter);
        videoElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            videoElement.removeEventListener("mouseenter", handleMouseEnter);
            videoElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg flex justify-center items-center">
            <video
                ref={videoRef}
                className="h-[95%] object-cover bg-red-500 w-[73%] rounded-md"
                src="video/listsapp.mp4"
                autoPlay
                loop
                muted
            />
        </div>
    );
}
