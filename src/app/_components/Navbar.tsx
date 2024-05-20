"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function HeaderClient() {
    const pathname = usePathname(); // Use the usePathname hook to get the current path
    const [title, setTitle] = useState(''); // State to store the title

    useEffect(() => {
        // Update the title dynamically based on the current URL path
        const formattedTitle = formatTitle(pathname);
        setTitle(formattedTitle);
    }, [pathname]);

    // Function to format the title
    const formatTitle = (path: any) => {
        if (path === '/') {
            return 'Dashboard'; // Set title to "Dashboard" if URL is "/"
        } else {
            // Remove leading "/"
            const formattedPath = path.startsWith('/') ? path.slice(1) : path;
            // Capitalize first letter
            return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
        }
    };

    return (
      
        <div className="sticky top-0 flex justify-between items-center h-14 bg-blue-700">
            <span className="font-bold pl-10 text-white text-2xl w-full">{title}</span>
        </div>

    );
}