
import React, { useState } from 'react'
import { FaGift } from "react-icons/fa6";
import AnimatedSection from './AnimatedSection';

const Hadiah = () => {
    const [open, setOpen] = useState(true)

    return (

        <div div className='absolute top-760 left-1/2 w-full flex justify-center -translate-x-1/2' >
            {open ? (
                <div>
                    <button className='text-white bg-white/50 rounded flex items-center gap-1 py-2 px-4 poppins-regular' onClick={() => setOpen(!open)}>
                        <FaGift />
                        <p>KIRIM HADIAH</p>
                    </button>
                </div>
            ) : (

                <AnimatedSection animation='fade-in-scale'>
                    <div className='flex gap-4 justify-center items-center'>
                        <div>
                            <img className='w-25' src="/images/bca-bank-central-asia 1.svg" alt="" />
                        </div>
                        <div className='text-white whitespace-nowrap poppins-semibold'>
                            <p>RONI SAPURA</p>
                            <p>7115355201</p>
                        </div>
                    </div>
                </AnimatedSection>
            )}

        </div >
    )
}

export default Hadiah