import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import IdeaGenerator from './components/IdeaGenerator';
import PromoBanner from './components/PromoBanner';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedSection from './components/AnimatedSection';
import AuditModal from './components/AuditModal';
import ScrollToTopButton from './components/ScrollToTopButton';


const App: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState('');
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    const servicesRef = useRef<HTMLElement>(null);
    const pricingRef = useRef<HTMLElement>(null);
    const testimonialsRef = useRef<HTMLElement>(null);
    const faqRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    // Preloader logic
    useEffect(() => {
        const root = document.getElementById('root');
        const preloader = document.getElementById('preloader');
        if (root && preloader) {
            // Fade out preloader and fade in content
            setTimeout(() => {
                preloader.classList.add('loaded');
                root.style.opacity = '1';
            }, 1500); // Increased duration to show new preloader
        }
    }, []);
    
    // Spotlight effect logic
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handlePlanSelect = (planName: string) => {
        setSelectedPlan(planName);
        contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleScrollTo = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-[#02000f] text-white font-sans overflow-x-hidden relative">
            <CustomCursor />
            
            <Header 
                onScrollToServices={() => handleScrollTo(servicesRef)}
                onScrollToPricing={() => handleScrollTo(pricingRef)}
                onScrollToTestimonials={() => handleScrollTo(testimonialsRef)}
                onScrollToFaq={() => handleScrollTo(faqRef)}
                onScrollToContact={() => handleScrollTo(contactRef)}
            />
            <main>
                <Hero onScrollToPricing={() => handleScrollTo(pricingRef)} />
                <Stats />
                <AnimatedSection><Services ref={servicesRef} /></AnimatedSection>
                <AnimatedSection><WorkProcess /></AnimatedSection>
                <AnimatedSection><IdeaGenerator /></AnimatedSection>
                <PromoBanner onOpenAuditModal={() => setIsAuditModalOpen(true)} />
                <AnimatedSection><Pricing ref={pricingRef} onPlanSelect={handlePlanSelect} /></AnimatedSection>
                <AnimatedSection><Testimonials ref={testimonialsRef} /></AnimatedSection>
                <AnimatedSection><FAQ ref={faqRef} /></AnimatedSection>
                <AnimatedSection><Contact ref={contactRef} selectedPlan={selectedPlan} /></AnimatedSection>
            </main>
            <Footer 
                 onScrollToServices={() => handleScrollTo(servicesRef)}
                 onScrollToPricing={() => handleScrollTo(pricingRef)}
                 onScrollToTestimonials={() => handleScrollTo(testimonialsRef)}
                 onScrollToFaq={() => handleScrollTo(faqRef)}
                 onScrollToContact={() => handleScrollTo(contactRef)}
            />
            
            <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
            <ScrollToTopButton />
        </div>
    );
};

export default App;