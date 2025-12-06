import React from 'react';
import { Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
    return (
        <div className="relative border-t border-border bg-background overflow-hidden">
             {/* Background Texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")', backgroundSize: 'cover'}} 
             />

             <div className="relative z-10 pt-24 pb-12 px-8 md:px-16 max-w-[1600px] mx-auto">
                 <div className="flex justify-center mb-16">
                     <Button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-none clip-path-none">
                        Start Raffling Now
                     </Button>
                 </div>

                 <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-center mb-24 leading-none text-foreground/90">
                    Decentralized Raffles <br/>
                    For Digital Asset
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-4 border-t border-border/30 pt-8 gap-8 font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                    <div>
                        <div className="text-primary mb-2">RAFLUX @2025. COPYRIGHT</div>
                        <div>All Right Reserved</div>
                    </div>
                    
                    <div className="md:col-span-2 text-center">
                        // Stop Waiting Months on <br/>
                        Traditional Marketplaces
                    </div>

                    <div className="text-right">
                        <div className="mb-2">Contact</div>
                        <div className="text-foreground">hi@raflux.io</div>
                    </div>
                 </div>
                 
                 {/* Bottom Icon Row */}
                 <div className="mt-12 flex justify-between items-center text-[10px] text-muted-foreground font-mono uppercase">
                    <div className="flex gap-4">
                        <span>• Client Network</span>
                        <span className="text-green-500">• Websocket Connection</span>
                    </div>
                    <div className="flex gap-4">
                        <Hexagon size={12} />
                        <span>Terms of Service</span>
                        <span>Help and Support</span>
                    </div>
                 </div>
             </div>
        </div>
    );
};
