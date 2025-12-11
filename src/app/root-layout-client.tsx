"use client";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";
import { LayoutClient } from "@/components/layout-navbar/layout-client";

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
        <LayoutClient>
            {loading ? <LoadingScreen onComplete={handleLoadingComplete} /> : children}
        </LayoutClient>
    );
}
