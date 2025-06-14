'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Eye, Wind, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">KHROOM</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Snorkel Masks
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Accessories
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-12 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
                        <div className="space-y-6 lg:space-y-8">
                            <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">
                                🇩🇪 German Engineering
                            </Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Revolutionary Underwater Breathing Freedom
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Experience the ocean like never before with our full-face snorkel mask featuring advanced CO2 safety technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 text-lg">
                                    Dive Into Adventure Today!
                                </Button>
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 hover:bg-slate-50">
                                    Watch Demo
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-3xl opacity-20"></div>
                            <Image
                                src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/4caee4cf-5883-4a28-8df5-2a3fe93da1b8.jpg"
                                alt="KHROOM Elite Full-Face Snorkel Mask"
                                width={600}
                                height={600}
                                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/4641947e-4944-444a-a1da-8dc2b3b619ee.jpg"
                                    alt="KHROOM Elite Full-Face Snorkel Mask - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/c3186eea-c36f-4378-bfd3-37a088a9e0d2.jpg", alt: "KHROOM mask turquoise color" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/5c3e0dfc-fbc6-42a2-abfc-da660be384b9.jpg", alt: "KHROOM mask in action underwater" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/4caee4cf-5883-4a28-8df5-2a3fe93da1b8.jpg", alt: "KHROOM mask product view" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/4641947e-4944-444a-a1da-8dc2b3b619ee.jpg", alt: "KHROOM mask details" },
                                ].map((image, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800">
                                    🏆 Premium Quality
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    KHROOM Elite Full-Face Snorkel Mask
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(3,847 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    German-engineered premium snorkeling experience with advanced CO2 safety system. Full-face coverage offers panoramic 180° underwater views.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$89.99</span>
                                    <span className="text-xl text-slate-500 line-through">$129.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        31% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Wind, text: "CO2 Safety System" },
                                    { icon: Eye, text: "180° Panoramic View" },
                                    { icon: Shield, text: "Anti-Fog Technology" },
                                    { icon: Globe, text: "Universal Fit" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-all duration-300"
                                    >
                                        <feature.icon className="h-5 w-5 text-cyan-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Color Selection */}
                            <div className="space-y-3">
                                <span className="font-medium text-slate-700">Select Color:</span>
                                <div className="flex gap-3">
                                    {[
                                        { name: "Turquoise", color: "bg-cyan-400" },
                                        { name: "Blue", color: "bg-blue-500" },
                                        { name: "White", color: "bg-white border-2 border-slate-200" },
                                        { name: "Black", color: "bg-slate-900" },
                                    ].map((color) => (
                                        <button
                                            key={color.name}
                                            className={`w-12 h-12 rounded-full ${color.color} hover:ring-4 hover:ring-slate-200 transition-all duration-200`}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                                    >
                                        Secure Your Premium Experience - $89.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Buy Now - Fast Checkout
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Worldwide delivery</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Risk-free trial</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">German Quality</p>
                                        <p className="text-xs text-slate-500">Premium standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Showcase */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Key Strengths
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Advanced CO2 Safety System",
                                    description: "Intelligent valve technology prevents dangerous carbon dioxide buildup",
                                    icon: Wind,
                                },
                                {
                                    title: "Premium Comfort",
                                    description: "Full-face design eliminates pressure points and jaw fatigue",
                                    icon: Heart,
                                },
                                {
                                    title: "Crystal Clear Vision",
                                    description: "Panoramic view with anti-fog technology",
                                    icon: Eye,
                                },
                            ].map((feature, i) => (
                                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                                    <CardContent className="pt-8 text-center">
                                        <feature.icon className="h-12 w-12 mx-auto mb-4 text-cyan-600" />
                                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose KHROOM Elite?</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Revolutionary CO2 Safety",
                                                    description: "Advanced valve system prevents dangerous carbon dioxide buildup for safer snorkeling",
                                                },
                                                {
                                                    title: "180° Panoramic View",
                                                    description: "Full-face design offers unobstructed underwater views",
                                                },
                                                {
                                                    title: "Dry-Top System",
                                                    description: "Ensures no water enters through the breathing tube",
                                                },
                                                {
                                                    title: "Anti-Fog Technology",
                                                    description: "Crystal clear vision throughout your underwater adventure",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/5c3e0dfc-fbc6-42a2-abfc-da660be384b9.jpg"
                                            alt="KHROOM snorkel mask underwater demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Material", value: "Premium Silicone & PC" },
                                                { label: "Sizes", value: "S/M, L/XL" },
                                                { label: "View Angle", value: "180° Panoramic" },
                                                { label: "Safety Features", value: "CO2 Prevention System" },
                                                { label: "Colors", value: "Turquoise, Blue, White, Black" },
                                                { label: "Weight", value: "450g" },
                                                { label: "Certification", value: "CE & FDA Approved" },
                                                { label: "Origin", value: "German Engineering" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x KHROOM Elite Full-Face Snorkel Mask",
                                                "1x Waterproof Phone Case",
                                                "1x Mesh Carrying Bag",
                                                "1x User Manual (Multi-language)",
                                                "1x Anti-fog Spray Sample",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-cyan-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 3,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "3,270" : stars === 4 ? "385" : "192"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Emma Thompson",
                                                avatar: "ET",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for snorkeling!",
                                                content:
                                                    "The CO2 safety system really works. I can breathe naturally without any fogging. Best snorkel mask I've ever used!",
                                            },
                                            {
                                                name: "Marco Rivera",
                                                avatar: "MR",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Premium quality worth every penny",
                                                content:
                                                    "The panoramic view is incredible. My wife and I bought two and our vacation snorkeling was amazing!",
                                            },
                                            {
                                                name: "Lisa Chen",
                                                avatar: "LC",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Perfect for beginners",
                                                content:
                                                    "As a first-time snorkeler, this mask made everything so easy. No jaw fatigue, crystal clear vision, highly recommend!",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How does the CO2 safety system work?",
                                                answer:
                                                    "Our intelligent valve system separates inhaled and exhaled air, preventing CO2 buildup. Fresh air comes in through the top, while exhaled air exits through side channels.",
                                            },
                                            {
                                                question: "What size should I choose?",
                                                answer:
                                                    "We offer S/M (for smaller faces) and L/XL (for larger faces). The adjustable straps ensure a perfect seal for most face shapes.",
                                            },
                                            {
                                                question: "Can I dive underwater with this mask?",
                                                answer:
                                                    "This is a snorkel mask designed for surface swimming. It's not suitable for diving below 1-2 feet as the snorkel needs to remain above water.",
                                            },
                                            {
                                                question: "How do I prevent fogging?",
                                                answer:
                                                    "The mask features built-in anti-fog technology. For best results, rinse with fresh water before use and avoid touching the inside lens.",
                                            },
                                            {
                                                question: "Is it suitable for children?",
                                                answer:
                                                    "The S/M size can fit older children (10+), but we recommend adult supervision. The mask is designed primarily for teen and adult use.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Transform Your Underwater Experience
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied snorkelers enjoying the revolutionary KHROOM Elite experience
                    </p>
                    <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 shadow-xl h-14 px-8 text-lg font-semibold">
                        Secure Your Premium Snorkeling Experience Now
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">KHROOM</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 KHROOM. German Engineering Excellence.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}