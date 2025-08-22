import { useRef, useState, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(() => {
                // Beberapa browser mungkin memblokir autoplay
                setIsPlaying(false);
            });
        }
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            {/* Audio player */}
            <audio ref={audioRef} loop src="/lagu-jawa.mp3" />

            {/* Toggle Button */}
            <button
                onClick={toggleAudio}
                className="fixed bottom-5 right-5 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg z-100"
            >
                {isPlaying ? (
                    <FaVolumeUp className="text-2xl text-amber-800" />
                ) : (
                    <FaVolumeMute className="text-2xl text-amber-800" />
                )}
            </button>
        </>
    );
};

export default MusicPlayer;
