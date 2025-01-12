"use client";
import React from "react";
import Image from "next/image";
import s1 from '@/app/assets/7042171_3515089.jpg';  // You can replace this with the actual image for each service
import s2 from '@/app/assets/futuristic-technology-concept.jpg'
import s3 from '@/app/assets/female-researcher-looks-greenery-petri-dish-standing-greenhouse.jpg'
import s4 from "@/app/assets/rb_79984.jpg";
import s5 from '@/app/assets/close-up-botanist-injecting-nutritional-fertilizer-while-working-plant-nursery.jpg'

const services = [
  {
    title: "Soil Data Analysis",
    description: "Advanced IoT sensors to gather real-time soil data (moisture, pH, temperature, etc.). Detailed insights for soil health and fertility assessment.",
    image: s1, // Replace with specific image for each service
  },
  {
    title: "Crop Selection Optimization",
    description: "AI-powered analysis for selecting the best crops based on soil, climate, and market conditions.",
    image: s2, // Replace with specific image for each service
  },
  {
    title: "Crop Disease Detection",
    description: "Real-time detection of crop diseases using image recognition and machine learning to minimize crop loss.",
    image: s3, // Replace with specific image for each service
  },
  {
    title: "Smart Irrigation Management",
    description: "Automated irrigation systems powered by weather data and soil moisture levels for efficient water usage.",
    image: s4, // Replace with specific image for each service
  },
  {
    title: "Pest and Disease Monitoring",
    description: "Real-time pest and disease monitoring with predictive analytics for early intervention.",
    image: s5, // Replace with specific image for each service
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <section className="py-32 px-8">
        <div className="mx-auto pt-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
            <span className="underline decoration-[#20a320]">Serv</span>ices
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 lg:py-20 space-y-16 flex flex-col">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={index}
                className="mx-auto shadow-lg bg-[#F4F4F4] h-full relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-80 group-hover:blur-sm group-hover:bg-[#00000080]"
                  style={{
                    backgroundImage: `url(${service.image.src})`,
                    backgroundBlendMode: "overlay",
                  }}
                ></div>
                <div className="relative z-20 h-full flex flex-col justify-between bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                  <div>
                    <div className="p-4">
                      <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                        {service.title}
                      </h1>
                      <p className="text-black text-sm mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                        {service.description}
                      </p>
                    </div>
                    <div className="relative w-full h-48 group-hover:hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
