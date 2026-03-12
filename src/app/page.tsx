"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Crown, HardDrive, Shield, Sparkles, Star, Users, Zap } from 'lucide-react';

const navItems = [
  { name: 'Features', id: 'features' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' }
];

const navButton = {
  text: 'Download Now',
  href: 'contact'
};

const heroButtons = [
  { text: 'Download Free', href: 'contact' },
  { text: 'Learn More', href: 'features' }
];

const aboutButtons = [
  { text: 'Explore Features', href: 'features' }
];

const featuresData = [
  {
    id: 1,
    title: 'CPU Performance Boost',
    description: 'Optimize processor usage, terminate background processes, and maximize your CPU\'s potential for faster application performance.',
    phoneOne: {
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/close-up-of-a-computer-processor-chip-wi-1773350901486-39810724.png?_wi=1'
    },
    phoneTwo: {
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/close-up-of-a-computer-processor-chip-wi-1773350901486-39810724.png?_wi=2'
    }
  },
  {
    id: 2,
    title: 'RAM Memory Optimization',
    description: 'Intelligently manage system memory, clear cache, and reclaim gigabytes of RAM for smoother multitasking.',
    phoneOne: {
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/digital-representation-of-ram-memory-sti-1773350899333-5a984609.png?_wi=1'
    },
    phoneTwo: {
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/digital-representation-of-ram-memory-sti-1773350899333-5a984609.png?_wi=2'
    }
  },
  {
    id: 3,
    title: 'Disk Cleanup & Optimization',
    description: 'Remove unnecessary files, defragment your drive, and organize storage for faster boot times and application loading.',
    phoneOne: {
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/hard-drive-or-ssd-with-cleaning-optimiza-1773350900330-7817db8d.jpg?_wi=1'
    },
    phoneTwo: {
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/hard-drive-or-ssd-with-cleaning-optimiza-1773350900330-7817db8d.jpg?_wi=2'
    }
  }
];

const metricsData = [
  { id: '1', icon: Zap, title: 'Speed Improvement', value: '45%' },
  { id: '2', icon: HardDrive, title: 'Storage Freed', value: '120GB' },
  { id: '3', icon: Users, title: 'Active Users', value: '5M+' },
  { id: '4', icon: Star, title: 'User Rating', value: '4.8' }
];

const testimonialsData = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    handle: '@sarahmtech',
    testimonial: 'My 5-year-old laptop feels like new again! PC Optimizer cleared 85GB of junk and my startup time is now under 20 seconds.',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/professional-headshot-of-a-businessperso-1773350899114-ea0d86ca.png',
    imageAlt: 'Sarah Mitchell'
  },
  {
    id: '2',
    name: 'James Chen',
    handle: '@jameschen_dev',
    testimonial: 'As a developer, performance matters. This tool has become essential to my workflow. Best PC optimization software I\'ve tried.',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/professional-headshot-of-a-woman-in-tech-1773350899011-7a3c9308.png',
    imageAlt: 'James Chen'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    handle: '@emma_tech',
    testimonial: 'Impressive results! The automatic scheduling keeps my PC running smoothly without any manual intervention. Highly recommend.',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/professional-headshot-of-a-male-it-profe-1773350899403-0b11e93a.png',
    imageAlt: 'Emma Rodriguez'
  },
  {
    id: '4',
    name: 'Michael Park',
    handle: '@mpark_gaming',
    testimonial: 'As a gamer, every FPS counts. PC Optimizer gave me a solid 20-30 FPS improvement in demanding games. Worth every penny.',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/professional-headshot-of-a-businesswoman-1773350899382-ca293005.png',
    imageAlt: 'Michael Park'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    handle: '@lisathompson',
    testimonial: 'Simple to use, powerful results. My entire team at the office uses it now. Customer support is also fantastic.',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/professional-headshot-of-a-male-tech-ent-1773350899350-590824ad.png',
    imageAlt: 'Lisa Thompson'
  },
  {
    id: '6',
    name: 'David Kumar',
    handle: '@davidkumar_it',
    testimonial: 'I manage 20+ company PCs. PC Optimizer\'s enterprise features have saved us thousands in hardware upgrades.',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/professional-headshot-of-a-woman-in-comp-1773350898955-e49f4003.png',
    imageAlt: 'David Kumar'
  }
];

const pricingPlans = [
  {
    id: 'basic',
    badge: 'Popular',
    badgeIcon: Sparkles,
    price: 'Free',
    subtitle: 'Perfect for basic optimization',
    buttons: [{ text: 'Get Started', href: 'contact' }],
    features: [
      'Basic disk cleanup',
      'RAM optimization',
      'Startup program manager',
      'One-time scan',
      'Community support'
    ]
  },
  {
    id: 'pro',
    badge: 'Best Value',
    badgeIcon: Crown,
    price: '$29.99',
    subtitle: 'Advanced features for power users',
    buttons: [{ text: 'Buy Pro', href: 'contact' }],
    features: [
      'Everything in Free',
      'Automatic scheduled scans',
      'Advanced RAM optimization',
      'Gaming mode',
      'Priority support',
      '3 PC licenses'
    ]
  },
  {
    id: 'enterprise',
    badge: 'For Teams',
    badgeIcon: Shield,
    price: 'Custom',
    subtitle: 'Enterprise-grade optimization',
    buttons: [{ text: 'Contact Sales', href: 'contact' }],
    features: [
      'Everything in Pro',
      'Unlimited licenses',
      'Remote management',
      'Network deployment',
      'Dedicated support',
      'Custom reporting'
    ]
  }
];

const faqsData = [
  {
    id: '1',
    title: 'Is PC Optimizer safe to use?',
    content: 'Yes, PC Optimizer is completely safe. We use industry-standard security protocols and our software is certified by major antivirus providers. We never delete important system files.'
  },
  {
    id: '2',
    title: 'How much will my PC speed improve?',
    content: 'Speed improvements typically range from 20-50% depending on your system\'s current state. Average users report faster startup times, smoother multitasking, and better application performance.'
  },
  {
    id: '3',
    title: 'Can I use it on multiple computers?',
    content: 'Yes! Our Pro plan includes 3 PC licenses. Enterprise plans include unlimited licenses across your organization.'
  },
  {
    id: '4',
    title: 'Does it work on laptops?',
    content: 'Absolutely. PC Optimizer is optimized for both desktops and laptops, with special features for battery life and thermal management on portable devices.'
  },
  {
    id: '5',
    title: 'What if something goes wrong?',
    content: 'PC Optimizer has a comprehensive backup system. All changes are reversible, and we provide full support to help you restore your system if needed.'
  },
  {
    id: '6',
    title: 'Is there a money-back guarantee?',
    content: 'Yes, we offer a 60-day money-back guarantee. If you\'re not satisfied with the results, we\'ll refund your purchase in full, no questions asked.'
  }
];

const footerColumns = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#' },
      { label: 'System Requirements', href: '#' }
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'License Agreement', href: '#' },
      { label: 'Support', href: '#' }
    ]
  }
];

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeMediumTitles"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={navItems}
          button={navButton}
          brandName="PC Optimizer"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="PC OPTIMIZER"
          description="Boost your computer performance instantly. Clean junk files, optimize RAM, accelerate startup times, and keep your PC running at peak efficiency."
          background={{ variant: 'radial-gradient' }}
          buttons={heroButtons}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArVkpnmdCwfZcIPMkDBFJf1Cwy/a-modern-clean-pc-optimization-software--1773350899821-6e5d8649.png"
          imageAlt="PC Optimization Dashboard"
          frameStyle="browser"
          mediaAnimation="blur-reveal"
          buttonAnimation="slide-up"
          ariaLabel="PC Optimizer Hero Section"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Us"
          title="Professional PC Optimization Technology Designed for Modern Computing"
          buttons={aboutButtons}
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          ariaLabel="About PC Optimizer"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Powerful Optimization Features"
          description="Everything you need to keep your PC running at peak performance"
          tag="Features"
          features={featuresData}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="scale-rotate"
          ariaLabel="PC Optimization Features Section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Proven Results That Users Trust"
          description="Join millions of satisfied users who've transformed their PC performance"
          metrics={metricsData}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="PC Optimizer Metrics"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Users Say"
          description="Real feedback from real users who've experienced dramatic performance improvements"
          testimonials={testimonialsData}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="User Testimonials"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs and start optimizing"
          plans={pricingPlans}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Pricing Plans"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about PC Optimizer"
          faqs={faqsData}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
          ariaLabel="FAQ Section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Optimize Your PC?"
          description="Download PC Optimizer today and experience the difference professional optimization can make. Join millions of users enjoying faster, cleaner, more efficient computers."
          background={{ variant: 'downward-rays-animated-grid' }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email for download link"
          buttonText="Download Free"
          termsText="We respect your privacy. Unsubscribe at any time. Check our privacy policy for details."
          ariaLabel="Download and Contact Section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2025 PC Optimizer. All rights reserved."
          ariaLabel="Footer"
        />
      </div>
    </ThemeProvider>
  );
}
