'use client';
import Footer from '@/components/Footer'
import UserNavbar from '@/components/UserNavbar'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const storedUserInfo = localStorage.getItem('sessionToken');
      if (!storedUserInfo) {
        router.push('login');
        return;
      }
    };

    checkSession();
  }, [router]);

  return (
    <div>
        <UserNavbar/>
        <h1>Dashboard</h1>


        <Footer/>
      
    </div>
  )
}
