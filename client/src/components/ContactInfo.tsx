"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from "react-hot-toast";


export default function ContactInfo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        topic: "",
    });
    type FormDataKeys = keyof typeof formData;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name in formData) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name as FormDataKeys]: value,
            }));
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Contact Information has been submitted successfully")
    };

    return (
        <div className="bg-white">
            <section className="bg-transparent py-16">
                <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        {/* Left Section: Contact Information */}
                        <div
                            className="max-w-4xl rounded-lg"
                            style={{
                                backgroundImage: "url('Rectangle.webp')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover', // Use cover for better image fitting
                                backgroundPosition: 'center', // Center the image
                                height: '100%', // Make sure the height is sufficient to show the full image
                            }}
                        >
                            <div className="max-w-md mx-auto mt-10 bg-opacity-70 p-6 rounded-lg shadow-lg bg-gradient-to-r from-bg-white to-indigo-900">
                                <div className="text-2xl py-4 px-6 text-white text-left font-bold uppercase">
                                    Contact Information
                                </div>

                                <div className="space-y-4 text-white mt-10">
                                    <div className="flex items-center space-x-3">
                                        <FaEnvelope className="text-2xl text-[#20a320]" />
                                        <h1 className="text-lg">Email: team.digirib@gmail.com</h1>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <FaPhoneAlt className="text-2xl text-[#20a320]" />
                                        <h1 className="text-lg">Phone: (+880) 1800000000</h1>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <FaMapMarkerAlt className="text-2xl text-[#20a320]" />
                                        <h1 className="text-lg">Office address:  Dhaka</h1>
                                    </div>
                                </div>

                                <div className='bg-[#433878] mt-10 rounded-lg'>
                                    <p className='text-white text-center py-6 text-xl'>
                                        Saturday to Thursday:<br />
                                        9:00 AM – 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Contact Form */}
                        <div className="mt-12 mb-24">
                            <div className="max-w-xl p-6 mx-auto mt-10 bg-[#433878] shadow-lg rounded-lg overflow-hidden">
                                <div className="text-2xl py-4 px-6 text-white text-center  ">
                                    <h1 className="mt-10 font-bold text-3xl">Let’s Discuss Your Project</h1>
                                    <p className="mt-4 text-white text-sm">Fill out the form below, and we’ll get back to you shortly to discuss your needs and how we can work together to achieve your goals.</p>
                                </div>

                                <form className="py-4 px-6 space-y-6" onSubmit={handleSubmit}>
                                    {['name', 'email', 'phone', 'topic'].map((field) => (
                                        <div className="mb-4" key={field}>
                                            <label className="block text-white font-semibold mb-2" htmlFor={field}>
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <input
                                                className="w-full p-3 text-black bg-white rounded-md border border-bg-white focus:outline-none focus:ring-2 focus:ring-bg-white"
                                                id={field}
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                value={formData[field as keyof typeof formData]}
                                                onChange={handleChange}
                                                placeholder={`Enter your ${field}`}
                                            />
                                        </div>
                                    ))}









                                    {/* Submit Button */}
                                    <div className="mb-4 py-8">
                                        <button
                                            className=" w-full  border border-white  text-white py-3 px-6 rounded-lg hover:bg-[#20a320] focus:outline-none focus:ring-2 focus:ring-[#20a320]"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
