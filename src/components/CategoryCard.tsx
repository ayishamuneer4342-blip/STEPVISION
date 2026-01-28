import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { Category } from '@/data/types';

export interface CategoryCardProps {
    category: Category;
}

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

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <Link href={`/products/${category.slug}`}>
            <Card padding="lg" hover className="h-full">
                <div className="flex flex-col h-full">
                    <div className="mb-4">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 p-2 border border-neutral-200">
                            <Image
                                src={getCategoryIcon(category.name)}
                                alt={category.name}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            {category.name}
                        </h3>
                        {category.description && (
                            <p className="text-sm text-neutral-600 line-clamp-2">
                                {category.description}
                            </p>
                        )}
                    </div>
                    {category.subcategories && category.subcategories.length > 0 && (
                        <div className="mt-auto">
                            <p className="text-xs text-neutral-500 mb-2">
                                {category.subcategories.length} subcategories
                            </p>
                            <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700">
                                Explore
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </Link>
    );
};
