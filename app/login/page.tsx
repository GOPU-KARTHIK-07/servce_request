/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../../utils/api/userAuth';
import Link from 'next/link';



interface FormData {
    username: string;
    email: string;
    password: string;
}



const page = (): JSX.Element => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const response = await registerUser(formData);

        const { token } = response;

        // Store the token in local storage
        localStorage.setItem('token', token);
    

    };


    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className='text-sm mt-3  text-center'><span>New here?  <Link href={'/signup'} className='text-blue-700'>
                    <span className='underline'>sign up </span>
                     </Link> then</span></div>

                <div className=" flex justify-center mb-6 py-2">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
export default page