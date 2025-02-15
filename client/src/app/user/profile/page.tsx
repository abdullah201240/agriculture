'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define an interface for the profile data
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  gender: string;
  dob:string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('sessionToken');
      if (!token) {
        console.log(token)
        router.push('/signIn');
        return;
      }
      console.log(token)
    };

    checkSession();
  }, [router]);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('sessionToken');
      if (!token) {
        router.push('/signIn');
        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          router.push('/signIn');
          return;
        }

        // Assuming the API response is structured as { data: UserProfile }
        const data = await response.json();
        setProfile(data.data); // Adjust this line if the structure is different
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 shadow-lg rounded-lg border border-gray-700 w-full max-w-md">
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-white">User Profile</h3>
          <p className="mt-2 text-sm text-gray-400">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-700">
          <dl className="divide-y divide-gray-700">
            {profile && (
              <>
                <ProfileDetail label="Full name" value={profile.name} />
                <ProfileDetail label="Email address" value={profile.email} />
                <ProfileDetail label="Phone number" value={profile.phone} />
                <ProfileDetail label="Dob" value={profile.dob} />
                <ProfileDetail label="Gender" value={profile.gender} />

              </>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}

// Reusable Profile Detail Component
const ProfileDetail = ({ label, value }: { label: string; value: string }) => (
    <div className="py-4 px-6 flex justify-between items-center">
      <div>
        <dt className="text-sm font-medium text-gray-400">{label}</dt>
        <dd className="text-sm text-white">{value}</dd>
      </div>
    </div>
  );
  