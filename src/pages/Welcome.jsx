import React from 'react'
import { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";

const Welcome = () => {
    const [nama, setNama] = useState('');
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const images = [
        "/images/image1.jpg",
        "/images/image5.jpg",
        "/images/image3.jpg",
        "/images/image8.jpg",
        "/images/image12.jpg",
        "/images/image16.jpg",
        "/images/image15.jpg",
    ];

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const namaDariUrl = query.get('kpd'); // ambil nilai dari ?kpd=
        if (namaDariUrl) {
            setNama(decodeURIComponent(namaDariUrl)); // handle nama yang mengandung spasi atau simbol
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // mulai fade out

            setTimeout(() => {
                setIndex(prev => (prev + 1) % images.length); // ganti gambar
                setFade(true); // mulai fade in
            }, 0); // durasi fade out
        }, 7000); // setiap 4 detik

        return () => clearInterval(interval);
    }, []);


    return (

        <div className='max-w-[480px] mx-auto relative'>
            <div className={`absolute z-90 left-0 right-0 mx-auto w-full h-screen transform transition-all duration-1000 ease-in-out ${!open ? 'translate-y-0 opacity-100' : '-translate-y-100 opacity-0 pointer-events-none'}`}>
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/image8.jpg')]"></div>

                {/* Overlay gelap */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Gradasi dari bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className='z-10 text-gray-200 h-screen justify-between flex flex-col pt-15 pb-20 relative '>
                    <div className='text-center'>
                        <p className='crimson-text-regular'>THE WEDDING OF</p>
                        <p className='corinthia-regular text-5xl'>Amel & Roni</p>
                    </div>

                    <div className='px-15'>
                        <p className='crimson-text-regular text-xl'>Kepada</p>
                        <p className='crimson-text-bold text-2xl'>{nama}</p>
                        <button onClick={() => setOpen(true)} className='bg-amber-50 h-13 rounded-md crimson-text-semibold w-full text-amber-950 text-lg mt-5 flex justify-center items-center gap-1'>
                            <MdEmail className='text-xl' />
                            <p>BUKA UNDANGAN</p>
                        </button>
                    </div>
                </div>
            </div>

            {open ? <div className="relative overflow-hidden max-w-[480px] mx-auto">
                <div className='relative overflow-hidden h-180'>
                    <div
                        className={`absolute inset-0 bg-cover h-180 bg-center transition-all duration-2000 ${fade ? 'opacity-100 zooming-background' : 'opacity-100'}`}
                        style={{ backgroundImage: `url(${images[index]})` }}
                    ></div>

                    <div className="absolute inset-0 bg-black/10 h-180"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-180"></div>

                    <div className=' text-gray-200 h-180 pt-2 relative'>
                        <div className='bg-amber-100/90 rounded-lg z-10 text-sm px-2 py-1 left-1/2 -translate-x-1/2 w-[96%] text-yellow-800 fixed'>
                            <p className='crimson-text-bold'>Ryan</p>
                            <p className='crimson-text-regular'>Samawa ya ssskhhdads</p>
                        </div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-30'>
                            <p className='corinthia-regular text-5xl'>Amel & Roni</p>
                        </div>
                    </div>
                </div>
                <div className='bg-amber-50 h-270 relative bottom-0 py-2 w-full'>
                    <div className='border-2 h-full rounded-full border-amber-600 mx-4'>
                        <img className='h-20 absolute left-2 top-2' src="/images/left-top.png" alt="" />
                        <img className='h-20 absolute right-2 top-2' src="/images/right-top.png" alt="" />
                        <img className='h-20 absolute bottom-2 left-2' src="/images/left-bottom.png" alt="" />
                        <img className='h-20 absolute right-2 bottom-2' src="/images/right-bottom.png" alt="" />

                        <p className='crimson-text-regular text-amber-950 text-center mx-5 text-sm pt-10'>
                            Assalamu'alaikum <br /> Warahmatullahi Wabarakatuh <br />
                            Dengan penuh rasa syukur kepada Allah SWT, <br /> kami dengan rendah hati mengundang <br /> Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami
                        </p>

                        <div className='text-center'>
                            <div className='w-50 h-50 inset-0 overflow-hidden rounded-full shadow-black/50 shadow-2xl mx-auto mt-10'>
                                <img className='' src="/images/image13.jpg" alt="" />
                            </div>
                            <p className='corinthia-regular text-4xl text-yellow-800 mt-3 mb-1'>Roni Saputra</p>
                            <div className='border-b-2 border-dashed w-40 mx-auto mb-2'></div>
                            <p className='crimson-text-regular text-sm'>Putra dari Pasangan</p>
                            <p className='crimson-text-regular text-sm'>Bapak Sumhadi & Ibu Minarsih</p>
                            <p className='crimson-text-regular text-sm'>Beralamat di Perumahan Taman Putri <br /> Desa Wanaherang, Kec. Gunung putri, Kab. Bogor</p>
                        </div>

                        <div className='text-center mt-10'>
                            <div className='w-50 h-50 inset-0 overflow-hidden rounded-full shadow-black/50 shadow-2xl mx-auto mt-10'>
                                <img className='' src="/images/image13.jpg" alt="" />
                            </div>
                            <p className='corinthia-regular text-4xl text-yellow-800 mt-3 mb-1'>Tansya Syaqila Amelia</p>
                            <div className='border-b-2 border-dashed w-40 mx-auto mb-2'></div>
                            <p className='crimson-text-regular text-sm'>Putri dari Pasangan</p>
                            <p className='crimson-text-regular text-sm'>Bapak Diding & Ibu Yani</p>
                            <p className='crimson-text-regular text-sm'>Beralamat di Perumahan Pepabri <br /> Desa Wanaherang, Kec. Gunung putri, Kab. Bogor</p>
                        </div>
                    </div>
                </div>
                <div className="w-full relative bottom-0 h-200 bg-cover bg-center bg-[url('/images/image15.jpg')]">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent"></div>

                </div>

            </div> : ""}

        </div>

    )
}

export default Welcome