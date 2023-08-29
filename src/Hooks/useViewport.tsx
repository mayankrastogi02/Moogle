"use client";
import React from "react";
export const useViewport = () => {
    if (typeof window === "undefined") {
        return { width: 0 };
    }
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return the width so we can use it in our components
    return { width };
}