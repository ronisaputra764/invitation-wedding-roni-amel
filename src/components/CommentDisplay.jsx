import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CommentsDisplay({ comments }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (comments.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % comments.length);
            }, 5000); // ganti setiap 5 detik
            return () => clearInterval(interval);
        }
    }, [comments]);

    return (
        <div className="fixed w-full top-5 flex justify-center">
            <div className="w-[96%] flex justify-center">
                <AnimatePresence mode="wait">
                    {comments.length > 0 && (
                        <motion.div
                            key={comments[currentIndex].id}
                            initial={{ x: -600, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -600, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-amber-100/90 w-full rounded-lg text-sm px-4 py-2 text-yellow-800 shadow-lg"
                        >
                            <p className="crimson-text-bold">{comments[currentIndex].name}</p>
                            <p className="crimson-text-regular">{comments[currentIndex].message}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
