'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { RiDeleteBin6Line } from "react-icons/ri";

interface EmployeeDetails {
    id: string;
}

interface Land {
    id: string;
    landName: string;
}

export default function Page() {
    const router = useRouter();
    const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails | null>(null);
    const [lands, setLands] = useState<Land[]>([]);
    const [landName, setLandName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);




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
        fetchProfile();
    }, [fetchProfile]);

    useEffect(() => {
        if (employeeDetails?.id) {
            fetchLands(employeeDetails.id);
        }
    }, [employeeDetails, fetchLands]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!employeeDetails) {
            alert("User not found!");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('sessionToken');

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/land`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token || "",
                },
                body: JSON.stringify({
                    landName,
                    userId: employeeDetails.id,
                }),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message || "Failed to upload land name.");

            alert("Land name uploaded successfully!");
            setLandName("");
            fetchLands(employeeDetails.id);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const token = localStorage.getItem('sessionToken');

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/land/${id}`, {
                method: "DELETE",
                headers: { Authorization: token || "" },
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message || "Failed to delete land.");

            alert("Land deleted successfully!");
            setLands(prev => prev.filter(land => land.id !== id));
        } catch (error) {
            console.error("Error deleting land:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            {/* Add Land Form */}
            <div className="border-4 rounded-lg shadow-lg w-full max-w-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-center">Add Land</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="landName" className="block text-sm font-medium mb-2">Land Name</label>
                        <input
                            type="text"
                            id="landName"
                            value={landName}
                            onChange={(e) => setLandName(e.target.value)}
                            className="shadow-sm border rounded-lg block w-full p-2.5"
                            required
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-5 py-2.5" disabled={loading}>
                            {loading ? "Uploading..." : "Upload"}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            </div>

            {/* Land List */}
            <div className="w-full max-w-4xl">
                <h3 className="text-center text-xl font-semibold mb-4">All Land</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>SI. No.</TableHead>
                            <TableHead>Land Name</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {lands.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">No Data found</TableCell>
                            </TableRow>
                        ) : (
                            lands.map((land, index) => (
                                <TableRow key={land.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{land.landName}</TableCell>
                                    <TableCell>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <RiDeleteBin6Line className="cursor-pointer" />
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Confirm Land Deletion</AlertDialogTitle>
                                                    <AlertDialogDescription>Are you sure you want to delete this land?</AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDelete(land.id)}>Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
