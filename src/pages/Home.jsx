import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
    return (

        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="relative max-w-[480px] mx-auto h-screen">
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/image1.jpg')]"></div>

                {/* Overlay gelap */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Gradasi dari bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className='z-10 text-gray-200 h-screen justify-between flex flex-col py-15 relative '>
                    <div className='text-center'>
                        <p className='crimson-text-regular'>THE WEDDING OF</p>
                        <p className='corinthia-regular text-5xl'>Amel & Roni</p>
                    </div>
                </div>
            </div>
        </motion.div>


    )
}

export default Home