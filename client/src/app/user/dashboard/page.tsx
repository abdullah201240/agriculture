'use client';
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
        
        <h1>Dashboard</h1>


       
      
    </div>
  )
}
