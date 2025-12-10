/**
 * Footer Section Component
 * 
 * Main footer container with three sections and a scrolling marquee.
 * 
 * Layout Structure:
 * - Header: Large headline with CTA button and decorative vector
 * - Info Bar: Copyright, tagline, and contact information (3-column grid)
 * - Placeholder: Animated gold noise background visual
 * - Marquee: Scrolling ticker with promotional messages
 * 
 * Desktop Layout (8 columns):
 * - Left border column
 * - Content spanning 6 columns
 * - Right border column
 * - Responsive height based on viewport
 * 
 * Mobile Layout:
 * - Full width with stacked sections
 */

"use client"
import React from 'react'
import { Marquee } from '../ui/marquee'
import { FooterHeader } from './footer-header'
import { FooterInfoBar } from './footer-info-bar'
import { FooterPlaceholder } from './footer-placeholder'

/**
 * Array of promotional messages displayed in the scrolling marquee
 */
const MARQUEE_ITEMS = [
    "NFTs starting from just $10!",
    "Join the wave",
    "More liquid than opensea",
    "Start selling on raflux"
];

/**
 * Footer: Main footer section component
 * 
 * Combines header, info bar, placeholder animation, and marquee
 * in a structured, responsive layout.
 */
export const Footer: React.FC = () => {
    return (
        <footer>
            {/* Main footer grid container */}
            <div className="border-b-border grid border-b lg:h-[calc(100vh-42px)] lg:grid-cols-8 2xl:h-[95vh]">
                {/* Left border column */}
                <div className='border-base-placeholder border-r' />
                {/* Content columns: header, info bar, and placeholder */}
                <div className="border-base-placeholder col-span-6 flex flex-col justify-end border-r">
                    {/* Main heading and CTA button */}
                    <FooterHeader />
                    {/* Copyright, tagline, and contact info */}
                    <FooterInfoBar />
                    {/* Animated gold noise background */}
                    <FooterPlaceholder />
                </div>
                {/* Right border column */}
                <div />
            </div>
            {/* Scrolling marquee with promotional messages */}
            <Marquee className="h-10.5 w-screen">
                {MARQUEE_ITEMS.map((text, i) => (
                    <div key={i} className="flex items-center justify-center" style={{ minWidth: '25vw' }}>
                        {/* Marquee item text with hover effect */}
                        <span className="text-muted cursor-default text-[10px] uppercase transition-colors hover:text-primary">
                            {text}
                        </span>
                    </div>
                ))}
            </Marquee>
        </footer>
    )
}
