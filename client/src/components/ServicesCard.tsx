"use client";
import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";

interface ServiceDis {
    id: string;
    title: string;
    description: string;
}

interface ServicesCardProps {
    id: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ id }) => {
    const [services, setServices] = useState<ServiceDis[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchServices = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}user/servicesDescription/${id}`
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data: ServiceDis[] = await response.json();
            setServices(data);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    return (
        <div className="bg-[#F9F7F7] py-16">
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                <div className="w-full">
                    {loading && <p className="text-center">Loading...</p>}
                    {error && <p className="text-center text-red-500">Error: {error}</p>}
                    {services.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <div key={service.id} className="relative">
<span
                                        className={clsx(
                                            "absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg",
                                            index % 2 === 0 ? "bg-blue-600" : "bg-yellow-300"
                                        )}
                                    ></span>
                                    <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="mt-3 mb-2 pl-4 text-xs font-medium text-gray-400 uppercase">
                                            ------------
                                        </p>
                                        <p className="mb-2 text-gray-600 pl-4">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-black text-center">No services available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
