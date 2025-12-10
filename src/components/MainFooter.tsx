import React from 'react'
import { Button } from './ui/button'
import Point from './svg/point'
import Discord from './svg/discord'
import Twitter from './svg/twitter'
import HelpIcon from './svg/help-icon'

function MainFooter() {
    return (
        <div className="bg-dark-secondary border-t-base-placeholder flex w-full items-center justify-between gap-1 rounded-t-xl border-t py-2 text-xs text-white max-md:flex-col lg:h-[32px] lg:px-6">
            <div className="text-primary flex items-start space-x-4">
                <div className="flex items-center gap-1 space-x-1">
                    <Point />
                    <span>Client Network</span>
                </div>
                <div className="flex items-center gap-1 space-x-1">
                    <Point />
                    <span>Websocet Connection</span>
                </div>
            </div>
            <div className="text-text-secondary flex items-center space-x-4 text-xs leading-[120%]">
                <Button variant="link" className="p-0">
                    <Discord />
                </Button>
                <Button variant="link" className="p-0">
                    <Twitter />
                </Button>

                <span className='hidden cursor-pointer transition-all duration-300 text-muted lg:flex'>
                    Terms of Service
                </span>
                <div className="flex cursor-pointer items-center gap-[8px] transition-all duration-300 text-muted">
                    <HelpIcon />
                    <span className='lg:flex'>
                        Help and Support
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainFooter