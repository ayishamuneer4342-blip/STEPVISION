import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CheckCircle, Building2, Users, Wrench, Package, Hotel, Utensils } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="container mx-auto py-8">
                <Breadcrumb
                    items={[
                        { label: 'About Us' },
                    ]}
                />

                {/* Hero Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                        StepVision Hotel and Engineering Supplies
                    </h1>
                    <div className="bg-white rounded-lg shadow-sm p-8 md:p-10">
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-4">
                            Being part of <span className="font-semibold text-primary-600">StepVision International Group</span>,
                            We are a UAE-based hospitality supply partner delivering both operational products and engineering
                            solutions for hotels, resorts, and serviced apartments all over Middle East and Africa.
                        </p>
                        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                            Hotels choose us because we combine industry-leading hospitality supplies with engineering products
                            that keep operations running smoothly.
                        </p>
                    </div>
                </div>

                {/* Trusted by Multiple Hotel Departments */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                        Trusted by Multiple Hotel Departments
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 rounded-lg p-3">
                                    <Wrench className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        Engineering Teams
                                    </h3>
                                    <p className="text-neutral-600">
                                        Fast delivery of technical products
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 rounded-lg p-3">
                                    <Package className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        Procurement Teams
                                    </h3>
                                    <p className="text-neutral-600">
                                        Vendor consolidation & compliance
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 rounded-lg p-3">
                                    <Hotel className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        Hotel Management
                                    </h3>
                                    <p className="text-neutral-600">
                                        Operational reliability & uptime
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                        Why Choose Us
                    </h2>
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-lg p-8 md:p-10 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            One Supplier — Multiple Needs
                        </h3>
                        <p className="text-lg mb-6 text-primary-50">
                            Reduce vendor count and simplify procurement with a partner who supports:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-6 h-6 text-primary-200 flex-shrink-0" />
                                <span className="text-lg">Engineering products</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-6 h-6 text-primary-200 flex-shrink-0" />
                                <span className="text-lg">Hospitality supplies</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-6 h-6 text-primary-200 flex-shrink-0" />
                                <span className="text-lg">F&B & kitchen essentials</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-6 h-6 text-primary-200 flex-shrink-0" />
                                <span className="text-lg">Project & operations solutions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industries Served */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                        Industries Served
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                            <div className="flex items-center space-x-3 mb-2">
                                <Hotel className="w-5 h-5 text-primary-600" />
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    Hotels & Resorts
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                            <div className="flex items-center space-x-3 mb-2">
                                <Building2 className="w-5 h-5 text-primary-600" />
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    Serviced Apartments
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                            <div className="flex items-center space-x-3 mb-2">
                                <Users className="w-5 h-5 text-primary-600" />
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    Hospitality Groups & Chains
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                            <div className="flex items-center space-x-3 mb-2">
                                <Wrench className="w-5 h-5 text-primary-600" />
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    Facility Management Companies
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                            <div className="flex items-center space-x-3 mb-2">
                                <Utensils className="w-5 h-5 text-primary-600" />
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    F&B Outlets
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                            <div className="flex items-center space-x-3 mb-2">
                                <Package className="w-5 h-5 text-primary-600" />
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    Corporate Procurement
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
