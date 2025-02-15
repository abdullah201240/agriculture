import React from 'react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 shadow-lg rounded-lg border border-gray-700 w-full max-w-md">
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-white">
            User Profile
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-700">
          <dl className="divide-y divide-gray-700">
            <div className="py-4 px-6 flex justify-between items-center">
              <dt className="text-sm font-medium text-gray-400">
                Full name
              </dt>
              <dd className="text-sm text-white">
                John Doe
              </dd>
            </div>
            <div className="py-4 px-6 flex justify-between items-center">
              <dt className="text-sm font-medium text-gray-400">
                Email address
              </dt>
              <dd className="text-sm text-white">
                johndoe@example.com
              </dd>
            </div>
            <div className="py-4 px-6 flex justify-between items-center">
              <dt className="text-sm font-medium text-gray-400">
                Phone number
              </dt>
              <dd className="text-sm text-white">
                (123) 456-7890
              </dd>
            </div>
            <div className="py-4 px-6 flex justify-between items-center">
              <dt className="text-sm font-medium text-gray-400">
                Address
              </dt>
              <dd className="text-sm text-white">
                123 Main St<br/>
                Anytown, USA 12345
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}