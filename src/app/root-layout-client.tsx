"use client";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";
import Lenis from "lenis";

export default function RootLayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);

    const handleLoadingComplete = () => {
        setLoading(false);
    };

    return (
        <>
            {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
            {children}
        </>
    );
}
