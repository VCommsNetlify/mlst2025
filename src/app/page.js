"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FAQ from "@/sections/FAQ";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

import { FaInstagram } from "react-icons/fa";
import VideoJS from "@/components/VideoJS";
import { useState } from "react";
import classNames from "classnames";

export default function Home() {
    const [showTranslation, setShowTranslation] = useState(false);

    return (
        <div>
        
            <Navigation />
                    <div className="w-full md:w-full h-80 md:h-80 relative mx-auto">
                        <Image
                            src={"/VBP-logo.png"}
                            alt="My Life Story Time"
                            fill={true}
                            className="object-contain"
                        />
                    </div>
            <main className="bg-main bg-no-repeat bg-cover w-full min-h-screen pt-0 md:pt-8 pb-8">
                
                    
                                
                <section className="w-full md:w-4/5 lg:w-3/5 mx-auto container py-0 md:py-4">
                    <div className="">
                        <div className=" relative">
                            <video-js
                                data-account="3745659807001"
                                data-player="hXGs3fyvO"
                                data-embed="default"
                                controls=""
                                data-video-id="6366454864112"
                                data-application-id=""
                                width="960"
                                height="420"
                                className="vjs-fluid object-contain"
                            ></video-js>
                        </div>
                        <button
                            onClick={() => setShowTranslation(!showTranslation)}
                            className="w-full min-h-10 pt-1 pb-1 font-bison font-bold text-left px-2 md:px-4 bg-[#faa836] !text-white text-[.65rem] sm:text-sm md:text-base"
                        >
                            <Image
                                src="/headset.png"
                                width={"24"}
                                height={"24"}
                                alt="Headset"
                                className="mr-1 md:mr-2 inline"
                            />{" "}
                            Press this bar to select your preferred language interpretation.
                        </button>
                    </div>

                    <iframe
                        id="interprefyiFrame"
                        src="https://interprefy.interpret.world/loginlink?token=MLST2025&caption=true"
                        className={classNames("w-full transition-all ", showTranslation ? "h-[80vh]" : "h-0")}
                    ></iframe>
                </section>

                <section id="contact-us" className="mx-auto container py-16 text-white font-medium">
                    
                    <p className="px-4 md:px-0 py-4 md:py-8 text-lg md:text-3xl lg:text-4xl max-w-prose md:max-w-[40ch] mx-auto text-center leading-normal md:leading-loose lg:leading-normal">
                        {" "}
                        You have the power to change your life. The question is: where do you start?{" "}
                         <br /><br />
                        Start here with <span className=" font-bold font-avheavy">V Business Presentation</span>! 
                        This is the right place for you to discover the world of network 
                        marketing and explore its unlimited possibilities—<span className="font-bold font-avheavy">The V</span> way.
                    </p>
                    <h3 className="text-xl md:text-4xl py-4 text-[#ffde00] text-center font-bold font-avheavy">
                        Let’s unleash your limitless potential!
                    </h3>
                    <h4 className="text-center font-bold mt-32 text-xl md:text-3xl font-avheavy">
                        Follow us and tag us on social:
                    </h4>

                    <div className="flex items-center justify-center space-x-2 md:space-x-4 py-4 flex-wrap">
                        <Link href="https://www.facebook.com/@thevofficial" target="_blank">
                            <FaFacebook className="text-lg md:text-3xl" />{" "} 
                            
                        </Link>
                            <Link href="https://www.instagram.com/thev_official/" target="_blank">
                            <AiFillInstagram className="text-2xl md:text-4xl" />{" "}
                        </Link>{" "}
                        <Link href="https://x.com/thev_official" target="_blank">
                            <AiFillTwitterCircle className="text-2xl md:text-4xl" />{" "}
                        </Link>
                        
                    </div>
                    <h2 className="font-bold font-avheavy text-center text-xl sm:text-2xl md:text-4xl py-4">
                        #VBP2025
                    </h2>
                </section>

                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
