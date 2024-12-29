import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FAQ from "@/sections/FAQ";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

import { FaInstagram } from "react-icons/fa";
import VideoJS from "@/components/VideoJS";

export default function Home() {
    return (
        <div>
            <Navigation />
            <main className="bg-[url('/MLSTBG.png')] bg-no-repeat bg-cover w-full min-h-screen pt-0 md:pt-8 pb-8">
                <section className="mx-auto container py-0 md:py-8">
                    <iframe
                        id="interprefyiFrame"
                        src="https://interprefy.interpret.world/loginlink?token=MLST2025&caption=true"
                        className="w-full h-[80vh]"
                    ></iframe>
                </section>

                <section id="contact-us" className="mx-auto container py-16">
                    <div className="w-4/5 md:w-full h-32 md:h-48 relative mx-auto">
                        <Image
                            src={"/mylifestorytime.png"}
                            alt="My Life Story Time"
                            fill={true}
                            className="object-contain"
                        />
                    </div>
                    <p className="px-4 md:px-0 py-4 md:py-8 text-lg md:text-3xl max-w-prose mx-auto text-center leading-normal md:leading-loose">
                        {" "}
                        Every journey begins with a decision—it all starts here.
                        <br />
                        <span className="text-[#d0f600] font-bold">My Life My Story My Time </span>
                        is about the courage to embrace who you are, take ownership of your story, and create your
                        perfect moment instead of waiting for it.
                    </p>
                    <h3 className="text-xl md:text-4xl text-[#00fbae] text-center font-bold">
                        Your time is now, what are you waiting for?
                    </h3>
                    <h4 className="text-center font-bold mt-8 text-xl md:text-3xl">Follow us and tag us on social:</h4>

                    <div className="flex items-center justify-center space-x-4 md:space-x-8 py-4 flex-wrap">
                        <div className="flex  items-center justify-center space-x-2">
                            <FaFacebook className="text-lg md:text-2xl" />{" "}
                            <Link
                                href="https://www.facebook.com/@thevofficial"
                                className="underline italic text-base md:text-xl"
                                target="_blank"
                            >
                                @thevofficial
                            </Link>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <AiFillTwitterCircle className="text-xl md:text-3xl" />{" "}
                            <AiFillInstagram className="text-xl md:text-3xl" />{" "}
                            <Link
                                href="https://www.facebook.com/@thevofficial"
                                className="underline italic text-base md:text-xl"
                                target="_blank"
                            >
                                @thev_official
                            </Link>
                        </div>
                    </div>
                    <h2 className="font-bold text-center text-xl sm:text-2xl md:text-4xl py-4">#MyLifeMyStoryMyTime</h2>
                </section>

                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
