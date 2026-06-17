/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectView =
  | 'home'
  | 'products-all'
  | 'products-awnings'
  | 'products-canopies'
  | 'products-tensile'
  | 'products-gazebos'
  | 'about-profile'
  | 'about-faqs'
  | 'about-blogs'
  | 'about-blog-post-1'
  | 'about-blog-post-2'
  | 'about-blog-post-3'
  | 'contact'
  | 'terms'
  | 'privacy';

export interface SlideItem {
  id: number;
  bgWord: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  accentText: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Awnings' | 'Canopies' | 'Tensile' | 'Gazebos & Umbrellas';
  tagline: string;
  description: string;
  imageUrl: string;
  features: string[];
  specs: {
    material: string;
    windResistance: string;
    warranty: string;
    operation: string;
    customSizes: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface BlogPostItem {
  id: number;
  title: string;
  category: string;
  date: string;
  snippet: string;
  imageUrl: string;
  readTime: string;
}

export interface StatItem {
  id: number;
  value: string;
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
}
