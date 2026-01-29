'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart, FileText, ChevronDown } from 'lucide-react';
import { Button } from '../Button';
import { useQuoteCart } from '@/store/useQuoteCart';
import { getCategories } from '@/data/helpers';

// Map category names to icon filenames
const getCategoryIcon = (categoryName: string): string => {
    const iconMap: Record<string, string> = {
        'Tabletop & Dining': 'Tabletop & Dining.png',
        'Kitchen & Catering': 'Kitchen & Catering.png',
        'Housekeeping & Cleaning': 'Housekeeping & Cleaning.png',
        'Guest Room Essentials': 'Guest Room Essentials.png',
        'Front Office & Service': 'Front Office & Service.png',
        'Engineering Products': 'Engineering Products.png',
        'Stationery': 'Stationery.png',
        'Gift Items': 'Gift Items.png',
        'Party Items': 'Party Items.png',
        'Furniture': 'furniture.png',
        'Upholstery': 'Upholstery.png',
        'Custom & Project Solutions': 'Custom & Project Solutions.png',
    };
    return `/icons/categories/${iconMap[categoryName] || 'Tabletop & Dining.png'}`;
};

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isHospitalityDropdownOpen, setIsHospitalityDropdownOpen] = useState(false);
    const [isMobileHospitalityOpen, setIsMobileHospitalityOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const totalItems = useQuoteCart((state) => state.getTotalItems());
    const categories = getCategories();

    // Filter hospitality categories (exclude Engineering Solutions)
    const hospitalityCategories = categories.filter(cat => cat.slug !== 'engineering-solutions');

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navItems: { label: string; href: string; hasMegaMenu?: boolean; hasDropdown?: boolean }[] = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Hotel Supplies', href: '/hospitality-supplies', hasDropdown: true },
        { label: 'Engineering Solutions', href: '/engineering-solutions' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-black border-b border-neutral-800 sticky top-0 z-50 shadow-sm">
            <div className="w-full px-6 lg:px-8 max-w-[1600px] mx-auto">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    {/* Logo - Added margin right to strictly separate from nav */}
                    <Link href="/" className="flex items-center flex-shrink-0">
                        <div className="text-3xl font-extrabold text-white tracking-tight">
                            StepVision
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8 ml-auto">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => {
                                    if (item.hasMegaMenu) setIsMegaMenuOpen(true);
                                    if (item.hasDropdown) setIsHospitalityDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                    if (item.hasMegaMenu) setIsMegaMenuOpen(false);
                                    if (item.hasDropdown) setIsHospitalityDropdownOpen(false);
                                }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-white hover:text-primary-400 text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                                {item.hasMegaMenu && isMegaMenuOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4 w-screen max-w-6xl">
                                        <div className="bg-white border border-neutral-200 rounded-lg shadow-xl p-8">
                                            <h3 className="text-lg font-bold text-neutral-900 mb-4">
                                                Product Categories
                                            </h3>
                                            <div className="grid grid-cols-3 gap-6">
                                                {categories.map((category) => (
                                                    <Link
                                                        key={category.id}
                                                        href={`/products/${category.slug}`}
                                                        className="group"
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                    >
                                                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-neutral-200 p-1">
                                                                <Image
                                                                    src={getCategoryIcon(category.name)}
                                                                    alt={category.name}
                                                                    width={32}
                                                                    height={32}
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                                                                    {category.name}
                                                                </h4>
                                                                {category.subcategories && (
                                                                    <p className="text-xs text-neutral-500 mt-1">
                                                                        {category.subcategories.length} subcategories
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {item.hasDropdown && isHospitalityDropdownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4 w-screen max-w-6xl">
                                        <div className="bg-white border border-neutral-200 rounded-lg shadow-xl p-8">
                                            <h3 className="text-lg font-bold text-neutral-900 mb-4">
                                                Hotel Supply Categories
                                            </h3>
                                            <div className="grid grid-cols-3 gap-6">
                                                {hospitalityCategories.map((category) => (
                                                    <Link
                                                        key={category.id}
                                                        href={`/products/${category.slug}`}
                                                        className="group"
                                                        onClick={() => setIsHospitalityDropdownOpen(false)}
                                                    >
                                                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-neutral-200 p-1">
                                                                <Image
                                                                    src={getCategoryIcon(category.name)}
                                                                    alt={category.name}
                                                                    width={32}
                                                                    height={32}
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                                                                    {category.name}
                                                                </h4>
                                                                {category.subcategories && (
                                                                    <p className="text-xs text-neutral-500 mt-1">
                                                                        {category.subcategories.length} subcategories
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTAs */}
                    <div className="hidden lg:flex items-center space-x-3 ml-6 flex-shrink-0">
                        <Link href="/request-catalogue">
                            <Button variant="outline" size="sm">
                                <FileText className="w-3.5 h-3.5 mr-1.5" />
                                <span className="text-xs">Catalogue</span>
                            </Button>
                        </Link>
                        <Link href="/quote-cart" className="relative">
                            <Button variant="primary" size="sm">
                                <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                                <span className="text-xs">Quote Cart</span>
                                {mounted && totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Show on LG screens now */}
                    <button
                        className="lg:hidden p-2 text-neutral-700 hover:text-primary-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-neutral-200 py-4">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    {item.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setIsMobileHospitalityOpen(!isMobileHospitalityOpen)}
                                                className="w-full text-left text-neutral-300 hover:text-white font-medium px-4 py-2 flex items-center justify-between"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${isMobileHospitalityOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {isMobileHospitalityOpen && (
                                                <div className="bg-neutral-50 py-2 space-y-1">
                                                    {hospitalityCategories.map((category) => (
                                                        <Link
                                                            key={category.id}
                                                            href={`/products/${category.slug}`}
                                                            className="block text-neutral-400 hover:text-white text-sm px-8 py-2"
                                                            onClick={() => {
                                                                setIsMobileMenuOpen(false);
                                                                setIsMobileHospitalityOpen(false);
                                                            }}
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-neutral-300 hover:text-white font-medium px-4 py-2 block"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="px-4 pt-4 border-t border-neutral-200 space-y-3">
                                <Link href="/request-catalogue" className="block">
                                    <Button variant="outline" size="md" fullWidth>
                                        <FileText className="w-4 h-4 mr-2" />
                                        Request Catalogue
                                    </Button>
                                </Link>
                                <Link href="/quote-cart" className="block relative">
                                    <Button variant="primary" size="md" fullWidth>
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        Quote Cart
                                        {mounted && totalItems > 0 && (
                                            <span className="ml-2 bg-secondary-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                                                {totalItems}
                                            </span>
                                        )}
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
