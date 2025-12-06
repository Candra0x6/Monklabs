import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion } from '@/components/ui/accordion';
import { Alert } from '@/components/ui/alert';
import { Avatar } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Calendar, User } from 'lucide-react';
import { CyberFrame } from '@/components/ui/cyber-frame';
import TechCard from '@/components/TechCard';

export default function UiShowcase() {
  return (
    <div className="min-h-screen bg-raflux-bg text-raflux-text p-8 md:p-12 max-w-[1200px] mx-auto space-y-16">
      
      {/* Header */}
      <div className="space-y-4">
        <Badge variant="outline" className="text-xl px-4 py-2">Design System</Badge>
        <h1 className="text-6xl font-display font-bold uppercase text-white">UI Components</h1>
        <p className="font-mono text-raflux-sub max-w-2xl">
          A collection of reusable atomic components styled for the Raflux industrial aesthetic.
          Built with React, Tailwind CSS, and simple animations.
        </p>
      </div>

      <Separator />

      {/* Buttons */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
            <Button>Default Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
             <Button size="sm">Small</Button>
             <Button size="default">Default</Button>
             <Button size="lg">Large</Button>
             <Button size="icon" variant="outline">+</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Badges</h2>
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Alerts</h2>
        <div className="grid gap-4 md:grid-cols-2">
            <Alert title="Information">
                This is a standard informational alert about the system status.
            </Alert>
            <Alert variant="destructive" title="Error">
                Transaction failed. Insufficient funds in wallet.
            </Alert>
            <Alert title="Success">
                NFT minted successfully! Check your wallet.
            </Alert>
            <Alert  title="Warning">
                Network congestion is high. Gas fees may vary.
            </Alert>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Cards</h2>
        <div className="grid gap-6 md:grid-cols-3">
             <Card className="border border-raflux-border p-6">
                <CardHeader className="p-0 mb-4">
                    <CardTitle>Standard Card</CardTitle>
                    <CardDescription>With industrial corner markers</CardDescription>
                </CardHeader>
                <CardContent className="p-0 text-sm text-raflux-sub font-mono">
                    Cards are used to group related content and actions. They can contain anything from text to images.
                </CardContent>
                <CardFooter className="p-0 mt-6">
                    <Button size="sm" variant="outline" className="w-full">Action</Button>
                </CardFooter>
             </Card>
    <CyberFrame variant='primary' cutSize={20}>
kmkm
    </CyberFrame>
             <Card className="border border-raflux-border p-6 bg-[#111]">
                 <div className="flex items-center gap-4 mb-4">
                    <Avatar src="https://picsum.photos/id/64/100/100" />
                    <div>
                        <h4 className="font-bold">User Profile</h4>
                        <span className="text-xs text-raflux-sub font-mono">0x1234@.5678</span>
                    </div>
                 </div>
                 <Skeleton className="h-4 w-full mb-2" />
                 <Skeleton className="h-4 w-3/4" />
             </Card>
        </div>
      </section>

      {/* Navigation & Hover */}
      <section className="space-y-8">
          <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Navigation & Overlays</h2>
          <div className="grid gap-12 md:grid-cols-2 items-start">
              {/* Navigation Menu */}
              <div>
                  <h3 className="text-lg font-mono mb-6 text-raflux-sub uppercase">Navigation Menu</h3>
                  <NavigationMenu>
                      <NavigationMenuList>
                          <NavigationMenuItem value="raffles">
                              <NavigationMenuTrigger>Raffles</NavigationMenuTrigger>
                              <NavigationMenuContent  className="w-[300px]">
                                  <div className="p-2">
                                    <div className="mb-2 p-2 font-display font-bold text-raflux-orange border-b border-raflux-border/50">
                                        Explore Raffles
                                    </div>
                                    <NavigationMenuLink href="#">Live Raffles</NavigationMenuLink>
                                    <NavigationMenuLink href="#">Past Winners</NavigationMenuLink>
                                    <NavigationMenuLink href="#">Create Raffle</NavigationMenuLink>
                                  </div>
                              </NavigationMenuContent>
                          </NavigationMenuItem>
                          
                          <NavigationMenuItem value="community">
                              <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                              <NavigationMenuContent className="w-[200px]">
                                  <div className="p-2">
                                      <NavigationMenuLink href="#">Discord</NavigationMenuLink>
                                      <NavigationMenuLink href="#">Twitter</NavigationMenuLink>
                                      <NavigationMenuLink href="#">Governance</NavigationMenuLink>
                                  </div>
                              </NavigationMenuContent>
                          </NavigationMenuItem>
                          
                          <NavigationMenuItem>
                               <NavigationMenuLink className="font-display font-bold uppercase" href="#">Docs</NavigationMenuLink>
                          </NavigationMenuItem>
                      </NavigationMenuList>
                  </NavigationMenu>
              </div>

              {/* Hover Card */}
              <div>
                  <h3 className="text-lg font-mono mb-6 text-raflux-sub uppercase">Hover Card</h3>
                  <div className="flex items-center justify-center h-20">
                      <HoverCard>
                          <HoverCardTrigger className="underline decoration-dotted underline-offset-4 text-raflux-orange font-bold">
                              @raflux_official
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                              <div className="flex justify-between space-x-4">
                                <Avatar />
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold text-white">@raflux_official</h4>
                                  <p className="text-sm text-raflux-sub">
                                    The decentralized raffle protocol for fair and transparent asset distribution.
                                  </p>
                                  <div className="flex items-center pt-2">
                                    <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
                                    <span className="text-xs text-muted-foreground">
                                      Joined December 2021
                                    </span>
                                  </div>
                                </div>
                              </div>
                          </HoverCardContent>
                      </HoverCard>
                  </div>
              </div>
          </div>
      </section>

      {/* Carousel */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Carousel</h2>
        <div className="w-full max-w-2xl mx-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="border border-raflux-border aspect-square flex items-center justify-center p-6 bg-[#0a0a0a]">
                                    <span className="text-4xl font-semibold text-raflux-sub">{index + 1}</span>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </section>

      {/* Forms */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Forms & Inputs</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" id="email" placeholder="user@raflux.io" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself." />
                </div>
            </div>
            
            <div className="space-y-6">
                 <div className="flex items-center justify-between border border-raflux-border p-4 bg-[#050505]">
                    <div className="space-y-0.5">
                        <Label className="mb-0 text-white">Notifications</Label>
                        <div className="text-xs text-raflux-sub font-mono">Receive alerts about new raffles</div>
                    </div>
                    <Switch />
                 </div>
                 <div className="flex items-center justify-between border border-raflux-border p-4 bg-[#050505]">
                    <div className="space-y-0.5">
                        <Label className="mb-0 text-white">Auto-Stake</Label>
                        <div className="text-xs text-raflux-sub font-mono">Automatically stake won tokens</div>
                    </div>
                    <Switch defaultChecked />
                 </div>
            </div>
        </div>
      </section>

      {/* Accordion & Tabs */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Interactive</h2>
        <div className="grid gap-12 md:grid-cols-2">
            <div>
                <h3 className="text-lg font-mono mb-4 text-raflux-sub uppercase">Accordion</h3>
               
            </div>

            <div>
                 <h3 className="text-lg font-mono mb-4 text-raflux-sub uppercase">Tabs</h3>
                 <Tabs defaultValue="account">
                    <TabsList className="mb-4 w-full grid grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card className="border border-raflux-border p-6">
                            <h4 className="font-bold mb-2">Account Settings</h4>
                            <p className="text-sm text-raflux-sub font-mono">Manage your wallet connection and preferences here.</p>
                        </Card>
                    </TabsContent>
                    <TabsContent value="history">
                         <Card className="border border-raflux-border p-6">
                            <h4 className="font-bold mb-2">Transaction History</h4>
                            <p className="text-sm text-raflux-sub font-mono">View your past raffle entries and wins.</p>
                        </Card>
                    </TabsContent>
                 </Tabs>
            </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="space-y-8 pb-24">
         <h2 className="text-2xl font-display font-bold text-raflux-orange uppercase">Data Tables</h2>
         <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell><Badge variant="outline" className="text-green-500 border-green-900 bg-green-900/10">Paid</Badge></TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell><Badge variant="outline" className="text-yellow-500 border-yellow-900 bg-yellow-900/10">Pending</Badge></TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell><Badge variant="outline" className="text-raflux-sub border-raflux-border">Unpaid</Badge></TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
            </TableBody>
         </Table>
      </section>
      <TechCard />

    </div>
  );
};
