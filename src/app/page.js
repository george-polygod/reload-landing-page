import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: 'url(/assets/images/background.png)'}}>
            <div className="text-center">
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-1/4">
                    <img src="/assets/images/logo.png" alt="Logo" className=" mb-4"/>
                </div>
                <div className="md:mx-0 mx-5">
                    <h1 className="md:text-6xl text-4xl font-bold text-white mb-2 uppercase">We are coming soon!</h1>
                    <p className="md:text-2xl text-xl text-white my-5 font-medium">Be the first to know when our <br/>
                        new site is live</p>
                    <div className="relative">
                        <div className="flex items-center">
                            <img src="/assets/svgs/email.svg" alt="Email Icon" className="ml-2 mr-3 absolute" width={30} height={30} />
                            <input
                                type="text"
                                className="w-full p-4 bg-transparent border border-[#08FAA6] my-4 pr-12 pl-10 text-white"
                                placeholder="Email"
                            />
                        </div>
                        <button
                            className="absolute right-0 md:text-xl text-sm top-1/2 transform -translate-y-1/2 -translate-x-2 bg-[#08FAA6] md:px-8 px-4 py-2 text-black uppercase font-black ml-1">get
                            demo!
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-1/4">
                        <ul className="flex items-center justify-center gap-4">
                            <li>
                                <Link href="/">
                                    <Image src="/assets/svgs/youtube.svg" width={50} height={50} alt="you tube reload"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="/assets/svgs/discord.svg" width={40} height={40} alt="discord reload"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="/assets/svgs/twitter.svg" width={50} height={50} alt="twitter reload"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="/assets/svgs/facebook.svg" width={50} height={50} alt="Facebook reload"/>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="/assets/svgs/instagram.svg" width={50} height={50} alt="Instagram reload"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;