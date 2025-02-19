"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define interface for API response
interface ApiResponse {
  predicted_class: string; // Predicted disease class
  image: string; // Image URL
}

// Define interface for the component state
interface PageState {
  darkMode: boolean;
  file: File | null;
  result: ApiResponse | null;
  loading: boolean;
  error: string | null;
  imageUrl: string | null; // Image URL for preview
}

interface EmployeeDetails {
  id: string;
}

interface PredictionResult {
  id: string;
  predicted_class: string;
  imageUrl: string;
}

export default function Page() {
  const router = useRouter();
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails | null>(null);
  const [state, setState] = useState<PageState>({
    darkMode: false,
    file: null,
    result: null,
    loading: false,
    error: null,
    imageUrl: null,
  });
  const [predictionResults, setPredictionResults] = useState<PredictionResult[]>([]);

  // Fetch user profile and prediction results on component mount
  useEffect(() => {
    const checkTokenAndFetchProfile = async () => {
      const token = localStorage.getItem('sessionToken');
      if (!token) {
        router.push('/'); // Redirect to login if no token
        return;
      }

      try {
        // Fetch user profile
        const profileResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/auth/profile`, {
          headers: { 'Authorization': token },
        });

        if (!profileResponse.ok) {
          router.push('/signIn');
          return;
        }

        const profileData = await profileResponse.json();
        if (profileData.success) {
          setEmployeeDetails(profileData.data);
          // Fetch prediction results for the user
          if(!employeeDetails){
            return
          }
          const predictionsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/predictions/${employeeDetails?.id}`, {
            headers: { 'Authorization': token },
          });

          if (predictionsResponse.ok) {
            const predictionsData = await predictionsResponse.json();
            setPredictionResults(predictionsData.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    checkTokenAndFetchProfile();
  }, [router,employeeDetails]);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setState((prevState) => ({
        ...prevState,
        file,
        imageUrl: URL.createObjectURL(file), // Preview the selected image
      }));
    }
  };

  // Handle form submission for image upload
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!employeeDetails || !state.file) {
      setState((prevState) => ({
        ...prevState,
        error: "Please select an image.",
      }));
      return;
    }

    setState((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
    }));

    const formData = new FormData();
    formData.append("image", state.file);
    formData.append("userId", employeeDetails.id);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/check-disease`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image. Please try again.");
      }

      const data = await response.json();

      if (data.data) {
        setState((prevState) => ({
          ...prevState,
          result: data.data,
          imageUrl: `${process.env.NEXT_PUBLIC_API_URL}uploads/${data.data.image}`,
        }));
        // Add the new prediction to the results list
        setPredictionResults((prevResults) => [
          ...prevResults,
          {
            id: data.data.id,
            predicted_class: data.data.predicted_class,
            imageUrl: `${process.env.NEXT_PUBLIC_API_URL}uploads/${data.data.image}`,
          },
        ]);
      } else {
        setState((prevState) => ({
          ...prevState,
          error: data.message || "Something went wrong.",
        }));
      }
    } catch (error: unknown) {
      setState((prevState) => ({
        ...prevState,
        error: (error as Error).message || "Something went wrong.",
      }));
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  // Handle deletion of a prediction result
  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('sessionToken');
    if (!token) {
      router.push('/');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/predictions/${id}`, {
        method: "DELETE",
        headers: { 'Authorization': token },
      });

      if (response.ok) {
        // Remove the deleted prediction from the list
        setPredictionResults((prevResults) => prevResults.filter((result) => result.id !== id));
      } else {
        throw new Error("Failed to delete prediction.");
      }
    } catch (error) {
      console.error("Error deleting prediction:", error);
    }
  };

  return (
    <div className={`${state.darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center justify-center p-6`}>
      <div className={`${state.darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"} border-4 rounded-lg shadow-lg w-full max-w-lg p-6 mb-8`}>
        <h2 className="text-xl font-semibold mb-4 text-center">Upload Image</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="product-name" className="block text-sm font-medium mb-2">
              Leaf Image
            </label>
            <input
              type="file"
              name="product-name"
              id="product-name"
              className={`${state.darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} shadow-sm border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5`}
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5"
              disabled={state.loading}
            >
              {state.loading ? "Checking..." : "Check"}
            </button>
          </div>
        </form>

        {state.error && <p className="text-red-500 text-center mt-4">{state.error}</p>}

        {state.result && (
          <div className="mt-6 text-center">
            <h3 className="font-semibold">Prediction Disease:</h3>
            <p>{state.result.predicted_class}</p>

            {state.imageUrl && (
              <div className="mt-4">
                <Image src={state.imageUrl} alt="Uploaded Leaf" width={200} height={200} className="max-w-full h-auto rounded-lg" />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-full max-w-4xl">
        <h3 className="text-center text-xl font-semibold mb-4">Prediction Results</h3>
        <Table>
          <TableHeader className='bg-[#2A515B] text-white'>
            <TableRow className='text-center'>
            <TableHead className='text-white text-center'>SI. No.</TableHead>

              <TableHead className='text-white text-center'>Predicted Class</TableHead>
              <TableHead className='text-white text-center'>Image</TableHead>
              <TableHead className='text-white text-center'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {predictionResults.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className='text-center border border-[#e5e7eb]'>
                  No Data found
                </TableCell>
              </TableRow>
            ) : (

              predictionResults.map((result,index) => (
                <TableRow key={result.id} className='text-center'>
                  <TableCell className='text-center border border-[#e5e7eb]'>{index + 1}</TableCell>

                  <TableCell className='border border-[#e5e7eb]'>{result.predicted_class}</TableCell>
                  <TableCell className='border border-[#e5e7eb]'>
                    <Image src={result.imageUrl} alt="Uploaded Leaf" width={50} height={50} className="rounded" />
                  </TableCell>
                  <TableCell className='border border-[#e5e7eb]'>
                    <button
                      onClick={() => handleDelete(result.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
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