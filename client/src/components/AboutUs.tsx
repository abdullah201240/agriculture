"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import About from '@/app/assets/6887281_3467446.jpg';


export default function AboutUs() {
    
    return (
        <div
            className="relative w-full h-auto py-4 bg-cover bg-center bg-white"
           
        >
            <section className="bg-transparent -mt-10 sm:mt-16">
                <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-6xl">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                <span className="underline decoration-[#20a320]">Abo</span>ut{' '}
                                <span className="text-[#20a320]">AgroMind Insights AI</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg leading-8">
                            We are dedicated to revolutionizing agriculture with our smart farming solution. Combining IoT, AI, and deep learning, our system empowers farmers to make informed decisions by analyzing soil data for optimal crop selection. Additionally, our cutting-edge deep learning algorithms provide accurate crop disease classification, ensuring healthier yields and sustainable farming practices. Our mission is to enable smarter, more efficient, and environmentally friendly agriculture for a better tomorrow.

                            </p>
                            <div className="flex gap-4 mt-10">

                                <Link className="px-6 py-2 min-w-[120px] text-center text-white bg-[#20a320]  border border-[#20a320]  rounded active:text-[#20a320]  hover:bg-transparent hover:text-[#20a320]  focus:outline-none focus:ring"
                                    href="/aboutUs">
                                    More About Us
                                </Link>



                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            
                                <Image
                                    src={About}
                                    alt="About Us Image"
                                    className="object-cover rounded-lg "
                                    width={800}
                                    height={800}
                                />
                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


