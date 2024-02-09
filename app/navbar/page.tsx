"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
    const [accountSettingsHovered, setAccountSettingsHovered] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setAccountSettingsHovered(false); 
    };

    const toggleSettingsDropdown = () => {
        setSettingsDropdownOpen(!settingsDropdownOpen);
        setAccountSettingsHovered(false); 
    };

    const handleAccountSettingsHover = () => {
        setAccountSettingsHovered(true);
    };

    const handleAccountSettingsLeave = () => {
        setAccountSettingsHovered(false);
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* Logo */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <div className={`w-full md:flex md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="relative">
                                <Link
                                    href="/dashboard/settings"
                                    className={`relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    onMouseEnter={toggleSettingsDropdown}
                                    onMouseLeave={toggleSettingsDropdown}
                                >
                                    Settings
                                    {settingsDropdownOpen && (
                                        <div className="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                <li
                                                    className="relative"
                                                    onMouseEnter={handleAccountSettingsHover}
                                                    onMouseLeave={handleAccountSettingsLeave}
                                                >
                                                    <Link href="/dashboard/account-settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Account Settings
                                                        {accountSettingsHovered && (
                                                            <div className="z-10 absolute top-0 left-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                                    <li>
                                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Company Settings</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">User Settings</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/store" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Store</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
