"use client";
import React from "react";
export const useViewport = () => {
    console.log(window);
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }
    }, []);
    // Return the width so we can use it in our components
    return { width };
}