"use client";
import { useState } from "react";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";

export default function LayoutClient({
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
