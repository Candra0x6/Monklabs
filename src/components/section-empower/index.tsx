"use client"
import React from 'react';
import { useEmpowerAnimations } from '@/hooks/useEmpowerAnimations';
import { TopDecoration } from './top-decoration';
import { MissionHeader } from './mission-header';
import { MainContent } from './main-content';

export const SectionEmpower: React.FC = () => {
    const sectionRef = useEmpowerAnimations();

    return (
        <div ref={sectionRef} className="bg-background relative z-10 h-[300vh]">
            <TopDecoration />
            <div className="h-20 w-full bg-background-secondary" />
            <div className="sticky top-[58px] flex h-[calc(100vh-60px)] flex-col">
                <MissionHeader />
                <MainContent />
            </div>
        </div>
    );
};
