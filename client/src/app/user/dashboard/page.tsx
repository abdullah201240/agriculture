'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Land {
  id: string;
  landName: string;
}
interface EmployeeDetails {
  id: string;
}
export default function Page() {
  const router = useRouter();
  const [lands, setLands] = useState<Land[]>([]);
  const [selectedLand, setSelectedLand] = useState<string>('');
  const [selectedPosition, setSelectedPosition] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const storedUserInfo = localStorage.getItem('sessionToken');
      if (!storedUserInfo) {
        router.push('login');
      }
    };

    checkSession();


    // Set today's date
    setDate(new Date().toISOString().split('T')[0]);
  }, [router]);

  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem('sessionToken');

    if (!token) {
      router.push('/');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/auth/profile`, {
        headers: { Authorization: token },
      });

      if (!res.ok) {
        router.push('/signIn');
        return;
      }

      const data = await res.json();
      if (data.success) {
        setEmployeeDetails(data.data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }, [router]);
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const fetchLands = useCallback(async (userId: string) => {
    if (!userId) return;
    const token = localStorage.getItem('sessionToken');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/land/${userId}`, {
        headers: { Authorization: token || "" },
      });

      const data = await res.json();
      if (data.success) {
        setLands(data.data);
      }
    } catch (error) {
      console.error("Error fetching lands:", error);
    }
  }, []);
  useEffect(() => {
    if (employeeDetails?.id) {
      fetchLands(employeeDetails.id);
    }
  }, [employeeDetails, fetchLands]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!employeeDetails) return
    const formData = {
      land: selectedLand,
      position: selectedPosition,
      date: date,
      userId: employeeDetails?.id,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/crops`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Appointment booked successfully!');
      } else {
        alert(result.message || 'Failed to book appointment.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='mt-16 flex items-center justify-center p-12'>
      <div className="mx-auto w-full max-w-[550px] bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Land Selection */}
          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="land">
              Land
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="land"
              name="land"
              value={selectedLand}
              onChange={(e) => setSelectedLand(e.target.value)}
              required
            >
              <option value="">Select a land</option>
              {lands.map((land) => (
                <option key={land.id} value={land.id}>
                  {land.landName}
                </option>
              ))}
            </select>
          </div>

          {/* Position Selection */}
          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="position">
              Position
            </label>
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="position"
              name="position"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              required
            >
              <option value="">Select a position</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="south">South</option>
              <option value="north">North</option>
            </select>
          </div>

          {/* Date Selection */}
          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-700 focus:border-blue-500 focus:shadow-md"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 px-8 text-white font-semibold hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
