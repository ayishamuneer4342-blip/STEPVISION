import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/Button';
import { HeroSlider } from '@/components/HeroSlider';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { getCategories, getFeaturedProducts } from '@/data/helpers';

export default function HomePage() {
  const categories = getCategories();
  const featuredProducts = getFeaturedProducts().slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Slider */}
      <HeroSlider />

      {/* Introduction Block */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left lg:text-center">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Your Trusted Partner in Hospitality Excellence
              </h2>
              <p className="text-lg text-neutral-700 mb-4">
                StepVision Hotel Supplies LLC is a UAE-based supplier specializing in premium
                hospitality products. We serve hotels, restaurants, and hospitality projects with
                a comprehensive range of supplies.
              </p>
              <p className="text-lg text-neutral-700">
                With years of experience in the industry, we understand the unique needs of
                hospitality businesses and deliver solutions that combine quality, reliability,
                and value.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
                alt="Hotel supplies showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Explore Our Product Categories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Browse our comprehensive range of hospitality supplies across 12 specialized categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom & Project Solutions Block */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 p-4 shadow-sm border border-neutral-100">
              <Image
                src="/icons/categories/Custom & Project Solutions.png"
                alt="Custom & Project Solutions"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Custom & Project Solutions
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              Bespoke furniture, project services, and custom sourcing tailored to your hospitality needs.
              Whether you&apos;re launching a new hotel or renovating an existing property, our team provides
              end-to-end solutions.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Talk to Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose StepVision */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Why Choose StepVision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We&apos;re committed to delivering excellence in every aspect of our service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Hospitality-Focused Selection
                </h3>
                <p className="text-neutral-600">
                  Curated products specifically chosen for the unique needs of hotels and restaurants
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-neutral-600">
                  High-quality products with competitive pricing for the best value
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  One-Stop Solution
                </h3>
                <p className="text-neutral-600">
                  Everything you need for your hotel in one convenient place
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Reliable & Timely
                </h3>
                <p className="text-neutral-600">
                  Dependable sourcing and on-time delivery you can count on
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Customized Solutions
                </h3>
                <p className="text-neutral-600">
                  Tailored services for hotels, projects, and special requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium hospitality supplies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
