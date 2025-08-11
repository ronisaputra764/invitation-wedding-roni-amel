import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { MdEmail } from "react-icons/md";
import MusicPlayer from '../components/MusicPlayer';
import { FaLocationDot } from "react-icons/fa6";
import AnimatedSection from '../components/AnimatedSection';

const Welcome = () => {
    const [nama, setNama] = useState('');
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);


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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (target === section1Ref.current) setShowSection1(true);
                        if (target === section2Ref.current) setShowSection2(true);
                        if (target === section3Ref.current) setShowSection3(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const namaDariUrl = query.get('kpd'); // ambil nilai dari ?kpd=
        if (namaDariUrl) {
            setNama(decodeURIComponent(namaDariUrl)); // handle nama yang mengandung spasi atau simbol
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {

            setTimeout(() => {
                setIndex(prev => (prev + 1) % images.length); // ganti gambar
            },); // durasi fade out
        }, 7000); // setiap 4 detik

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const targetDate = new Date("2025-10-04T07:00:00"); // Ganti dengan tanggal pernikahan kamu

        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((distance / (1000 * 60)) % 60);
                const seconds = Math.floor((distance / 1000) % 60);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

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

            {open ? <div className="relative max-w-[480px] mx-auto">
                <MusicPlayer />
                <div className='relative overflow-hidden h-180'>

                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 zooming-background ${i === index ? 'opacity-100 scale-105 zooming-background' : 'opacity-0'} ${i === index ? 'zooming-background' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                    ))}

                    <div className="absolute inset-0 bg-black/10 h-180"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-180"></div>

                    <div className=' text-gray-200 h-180 pt-2 relative'>
                        <div className='bg-amber-100/90 rounded-lg z-10 text-sm px-2 py-1 left-1/2 -translate-x-1/2 w-[96%] text-yellow-800 fixed'>
                            <p className='crimson-text-bold'>Ryan</p>
                            <p className='crimson-text-regular'>Samawa ya ssskhhdads</p>
                        </div>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-30'>
                            <p className='corinthia-regular whitespace-nowrap text-6xl'>Amel & Roni</p>
                        </div>
                    </div>
                </div>
                <div className='bg-amber-50 h-270 relative bottom-0 py-4 w-full'>
                    <div className='border-2 h-full rounded-full border-amber-600 mx-4'>
                        <img className='h-25 absolute left-3 top-3' src="/images/left-top.png" alt="" />
                        <img className='h-25 absolute right-3 top-3' src="/images/right-top.png" alt="" />
                        <img className='h-25 absolute bottom-3 left-3' src="/images/left-bottom.png" alt="" />
                        <img className='h-25 absolute right-3 bottom-3' src="/images/right-bottom.png" alt="" />

                        <AnimatedSection animation="fade-in-scale">
                            <p us className='crimson-text-regular text-amber-950 text-center mx-5 text-sm pt-10'>
                                Assalamu'alaikum <br /> Warahmatullahi Wabarakatuh <br />
                                Dengan penuh rasa syukur kepada Allah SWT, <br /> kami dengan rendah hati mengundang <br /> Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan kami
                            </p>
                        </AnimatedSection>

                        <div className='text-center'>
                            <AnimatedSection animation='fade-in-up'>
                                <div className='w-50 h-50 inset-0 overflow-hidden rounded-full shadow-black/50 shadow-2xl mx-auto mt-10'>
                                    <img className='' src="/images/image13.jpg" alt="" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation='fade-in-slide-left'>
                                <p className='corinthia-regular text-4xl text-yellow-800 mt-3 mb-1'>Roni Saputra</p>
                                <div className='border-b-2 border-dashed w-40 mx-auto mb-2'></div>
                                <p className='crimson-text-regular text-sm'>Putra dari Pasangan</p>
                                <p className='crimson-text-regular text-sm'>Bapak Sumhadi & Ibu Minarsih</p>
                                <p className='crimson-text-regular text-sm'>Beralamat di Perumahan Taman Putri <br /> Desa Wanaherang, Kec. Gunung putri, Kab. Bogor</p>
                            </AnimatedSection>
                        </div>

                        <div className='text-center mt-10'>
                            <AnimatedSection animation='fade-in-up'>
                                <div className='w-50 h-50 inset-0 overflow-hidden rounded-full shadow-black/50 shadow-2xl mx-auto mt-10'>
                                    <img className='' src="/images/image13.jpg" alt="" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection animation='fade-in-slide-right'>
                                <p className='corinthia-regular text-4xl text-yellow-800 mt-3 mb-1'>Tansya Syaqila Amelia</p>
                                <div className='border-b-2 border-dashed w-40 mx-auto mb-2'></div>
                                <p className='crimson-text-regular text-sm'>Putri dari Pasangan</p>
                                <p className='crimson-text-regular text-sm'>Bapak Diding & Ibu Yani</p>
                                <p className='crimson-text-regular text-sm'>Beralamat di Perumahan Pepabri <br /> Desa Wanaherang, Kec. Gunung putri, Kab. Bogor</p>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
                <div >


                    <div className='h-screen z-10 relative'>
                        <div className="absolute crimson-text-regular top-0 text-amber-700 text-center text-sm font-bold">
                            <div className=''>
                                <AnimatedSection animation='fade-in-scale'>
                                    <p className='corinthia-regular text-5xl text-amber-500 text-center whitespace-nowrap mt-10 mb-3'>Save The Date</p>
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-up'>
                                    <p className='crimson-text-regular text-xs text-amber-50 text-center px-5'>"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
                                    <p className='crimson-text-regular text-sm text-amber-50 text-center px-5'>- Surah Ar-Rum Ayat 21 -</p>
                                </AnimatedSection>
                            </div>
                            <AnimatedSection animation='fade-in-scale' className="flex gap-2 justify-center mt-20">
                                <div className='bg-white/80 w-18 h-18 rounded-xl flex flex-col justify-center'>
                                    <p className="text-xl">{countdown.days}</p>
                                    <p>DAY</p>
                                </div>
                                <div className='bg-white/80 w-18 h-18 rounded-xl flex flex-col justify-center'>
                                    <p className="text-xl">{countdown.hours}</p>
                                    <p>HOUR</p>
                                </div>
                                <div className='bg-white/80 w-18 h-18 rounded-xl flex flex-col justify-center'>
                                    <p className="text-xl">{countdown.minutes}</p>
                                    <p>MINUTE</p>
                                </div>
                                <div className='bg-white/80 w-18 h-18 rounded-xl flex flex-col justify-center'>
                                    <p className="text-xl">{countdown.seconds}</p>
                                    <p>SECOND</p>
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className='absolute top-120 text-center w-full border-white'>
                            <AnimatedSection animation='fade-in-scale'>
                                <div>
                                    <p className=' corinthia-regular  text-5xl text-amber-500 whitespace-nowrap'>Akad Nikah</p>
                                    <p className='corinthia-regular text-5xl text-amber-500 whitespace-nowrap'>&</p>
                                    <p className=' corinthia-regular  text-5xl text-amber-500 whitespace-nowrap'>Resepsi Pernikahan</p>
                                </div>
                            </AnimatedSection>
                            <div className=' text-gray-200 mt-3'>
                                <AnimatedSection animation='fade-in-slide-right'>
                                    <p className='crimson-text-regular text-center mb-4'>Sabtu, 4 Oktober 2025 <br /> Pukul 08:00 Sampai Pukul 14:00 WIB</p>
                                    <p className='crimson-text-regular  text-center'> Masjid Ash Shiddiq, Cikeas Udik, <br /> Kec. Gn. Putri, Kabupaten Bogor</p>
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-slide-left'>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.google.com/maps/search/?api=1&query=Masjid+Ash-Shiddiq+Cikeas+Udik"
                                        className='bg-gray-200/50 mt-4 flex gap-2 items-center justify-center py-3 rounded-md w-60 mx-auto'>
                                        <FaLocationDot />
                                        <p>MAP LOKASI ACARA</p>
                                    </a>
                                </AnimatedSection>
                            </div>
                            <AnimatedSection animation='fade-in-up'>
                                <div className='crimson-text-regular text-center text-gray-200 text-sm mt-30'>
                                    <p>Besar harapan kami jika Bapak/Ibu/Sahabat/Sdr/i berkenan <br /> hadir pada acara ini. Atas perhatiannya Terima kasih</p>
                                    <p className='mt-7'>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                                </div>
                            </AnimatedSection>
                        </div>
                        <div className='absolute top-290 '>
                            <AnimatedSection animation='fade-in-scale'>
                                <p className='corinthia-regular text-center text-5xl text-amber-500 whitespace-nowrap mb-10'>Our Galery</p>
                            </AnimatedSection>
                            <div className='grid grid-cols-2 gap-3 mx-5'>
                                <AnimatedSection animation='fade-in-slide-left'>
                                    <img className='rounded-md' src="/images/image1.jpg" alt="" />
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-slide-right'>
                                    <img className='rounded-md' src="/images/image2.jpg" alt="" />
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-slide-left'>
                                    <img className='rounded-md' src="/images/image3.jpg" alt="" />
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-slide-right'>
                                    <img className='rounded-md' src="/images/image4.jpg" alt="" />
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-slide-left'>
                                    <img className='rounded-md' src="/images/image5.jpg" alt="" />
                                </AnimatedSection>
                                <AnimatedSection animation='fade-in-slide-right'>
                                    <img className='rounded-md' src="/images/image6.jpg" alt="" />
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ""
            }

        </div >

    )
}

export default Welcome