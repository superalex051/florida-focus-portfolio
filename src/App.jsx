import React, { useState, useEffect } from 'react';
import {
  Camera,
  Video,
  Megaphone,
  TrendingUp,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  Play,
  Image as ImageIcon,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Data & Content ---

const services = [
  {
    id: 1,
    title: "Photography",
    description: "High-resolution visuals that capture the essence of your brand. From product shots to corporate headshots and events.",
    icon: <Camera size={32} />,
  },
  {
    id: 2,
    title: "Videography",
    description: "Cinematic storytelling. We produce engaging reels, commercials, and corporate documentaries that drive engagement.",
    icon: <Video size={32} />,
  },
  {
    id: 3,
    title: "Social Media Ads",
    description: "Data-driven advertising campaigns on Meta, TikTok, and LinkedIn designed to maximize ROI and lead generation.",
    icon: <Megaphone size={32} />,
  },
  {
    id: 4,
    title: "Brand Strategy",
    description: "Comprehensive growth roadmaps. We analyze your current presence and build a plan to dominate your niche.",
    icon: <TrendingUp size={32} />,
  }
];

const portfolioItems = [
  {
    id: 1,
    category: "Photography",
    title: "Motorcar Cavalcade",
    client: "Celebrating the Art and Evolution of the Automobile",
    image: "/portfolio/photography/motorcar-cavalcade/thumbnail.jpg",
    imagePosition: "object-[center_35%]",
    gallery: [
      "/portfolio/photography/motorcar-cavalcade/1.jpg",
      "/portfolio/photography/motorcar-cavalcade/2.jpg",
      "/portfolio/photography/motorcar-cavalcade/3.jpg",
      "/portfolio/photography/motorcar-cavalcade/4.jpg",
      "/portfolio/photography/motorcar-cavalcade/5.jpg",
      "/portfolio/photography/motorcar-cavalcade/6.jpg",
      "/portfolio/photography/motorcar-cavalcade/7.jpg"
    ]
  },
  {
    id: 2,
    category: "Videography",
    title: "Coffee Shop Promo",
    client: "Brew & Bean",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    gallery: [] // Video items will be handled differently later
  },
  {
    id: 3,
    category: "Advertising",
    title: "Summer Campaign",
    client: "Florida Resorts",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 4,
    category: "Photography",
    title: "Preferred Exotics",
    client: "Miami's Luxury Vehicle Rental",
    image: "/portfolio/photography/preferred-exotics/thumbnail.jpg",
    gallery: [
      "/portfolio/photography/preferred-exotics/1.jpg",
      "/portfolio/photography/preferred-exotics/2.jpg",
      "/portfolio/photography/preferred-exotics/3.jpg",
      "/portfolio/photography/preferred-exotics/4.jpg",
      "/portfolio/photography/preferred-exotics/5.jpg",
      "/portfolio/photography/preferred-exotics/6.jpg",
      "/portfolio/photography/preferred-exotics/7.jpg",
      "/portfolio/photography/preferred-exotics/8.jpg",
      "/portfolio/photography/preferred-exotics/9.jpg",
      "/portfolio/photography/preferred-exotics/10.jpg",
      "/portfolio/photography/preferred-exotics/11.jpg",
      "/portfolio/photography/preferred-exotics/12.jpg",
      "/portfolio/photography/preferred-exotics/13.jpg"
    ]
  },
  {
    id: 5,
    category: "Videography",
    title: "Fitness Brand Reel",
    client: "Peak Performance",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    gallery: []
  },
  {
    id: 6,
    category: "Advertising",
    title: "Real Estate Leads",
    client: "Sunshine Homes",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 7,
    category: "Photography",
    title: "Clean Culture",
    client: "The Original Outdoor Automotive Event",
    image: "/portfolio/photography/clean-culture/thumbnail.jpg",
    gallery: [
      "/portfolio/photography/clean-culture/1.jpg",
      "/portfolio/photography/clean-culture/2.jpg",
      "/portfolio/photography/clean-culture/3.jpg",
      "/portfolio/photography/clean-culture/4.jpg",
      "/portfolio/photography/clean-culture/5.jpg",
      "/portfolio/photography/clean-culture/6.jpg",
      "/portfolio/photography/clean-culture/7.jpg",
      "/portfolio/photography/clean-culture/8.jpg"
    ]
  },
  {
    id: 8,
    category: "Photography",
    title: "The FIRM",
    client: "Motorsport Facility in Starke, Florida",
    image: "/portfolio/photography/the-firm/thumbnail.jpg",
    gallery: [
      "/portfolio/photography/the-firm/1.jpg",
      "/portfolio/photography/the-firm/2.jpg",
      "/portfolio/photography/the-firm/3.jpg",
      "/portfolio/photography/the-firm/4.jpg",
      "/portfolio/photography/the-firm/5.jpg",
      "/portfolio/photography/the-firm/6.jpg",
      "/portfolio/photography/the-firm/7.jpg",
      "/portfolio/photography/the-firm/8.jpg"
    ]
  },
  {
    id: 9,
    category: "Photography",
    title: "1Exotics",
    client: "1Exotics",
    image: "/portfolio/photography/1exotics/thumbnail.jpg",
    gallery: [
      "/portfolio/photography/1exotics/1.jpg",
      "/portfolio/photography/1exotics/2.jpg",
      "/portfolio/photography/1exotics/3.jpg",
      "/portfolio/photography/1exotics/4.jpg",
      "/portfolio/photography/1exotics/5.jpg",
      "/portfolio/photography/1exotics/6.jpg",
      "/portfolio/photography/1exotics/7.jpg"
    ]
  }
];

// --- Components ---

const NavLink = ({ href, children, onClick, mobile = false }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${mobile ? 'block py-3 text-xl' : ''} font-medium hover:text-red-600 transition-colors duration-300 uppercase tracking-wider text-sm`}
  >
    {children}
  </a>
);

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-8 py-3 font-bold tracking-wide transition-all duration-300 uppercase text-sm rounded-full";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg border border-red-600",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
    dark: "bg-black text-white border border-black hover:bg-gray-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Reusable Logo Component with Error Handling
const BrandLogo = ({ isScrolled, isFooter = false }) => {
  const [imgError, setImgError] = useState(false);

  // Logo file in public folder
  const logoSrc = "headerlogo.png";

  if (imgError) {
    // Fallback to Text Logo if image fails
    return (
      <div className="flex items-center gap-2">
        <div className={`w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-xl`}>
          F
        </div>
        <span className={`text-2xl font-bold tracking-tighter ${isScrolled || isFooter ? (isFooter ? 'text-white' : 'text-black') : 'text-white'}`}>
          FLORIDA<span className="text-red-600">FOCUS</span>
        </span>
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt="Florida Focus Logo"
      onError={() => setImgError(true)}
      className={`h-14 w-auto object-contain bg-white/95 rounded-md px-2 py-1 ${isFooter ? 'h-10' : ''}`}
    />
  );
};

const CarouselModal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext(e);
    if (e.key === 'ArrowLeft') handlePrev(e);
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]); // Re-bind when index changes to capture latest state if needed, though functional update handles it.

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
      >
        <X size={40} />
      </button>

      <div
        className="relative w-full max-w-6xl aspect-[16/9] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'zoomIn 0.3s ease-out forwards' }}
      >
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 md:-left-12 p-2 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-full object-contain rounded-sm shadow-2xl"
        />

        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 md:-right-12 p-2 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-red-600 w-6' : 'bg-white/50 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Logic
  const allFilteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const visiblePortfolio = allFilteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const handleScrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Mock submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleProjectClick = (item) => {
    if (item.category === 'Photography' || item.category === 'Advertising') {
      setSelectedProject(item);
    }
    // Future: Handle Videography click
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-red-600 selection:text-white">

      <CarouselModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        images={selectedProject?.gallery}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
            <BrandLogo isScrolled={isScrolled} />
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-8 ${isScrolled ? 'text-black' : 'text-white'}`}>
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleScrollTo(item.toLowerCase()); }}>
                {item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-black' : 'text-white'}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white space-y-6 z-40" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
            {['Services', 'Portfolio', 'About', 'Contact'].map((item, index) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                mobile
                onClick={(e) => { e.preventDefault(); handleScrollTo(item.toLowerCase()); }}
                className="opacity-0"
                style={{
                  animation: `fadeInUp 0.4s ease-out ${index * 0.1 + 0.2}s forwards`
                }}
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/landing.jpg"
            alt="Camera Lens"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
            Comprehensive Marketing Agency
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
            SHARPEN YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              DIGITAL FOCUS
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We help businesses expand their social media presence through high-impact photography, videography, and strategic advertising.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => handleScrollTo('portfolio')}>View Portfolio</Button>
            <Button variant="outline" onClick={() => handleScrollTo('contact')}>Get in Touch</Button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We don't just create content; we craft visual experiences that convert viewers into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-8 border border-gray-100 rounded-xl hover:shadow-2xl hover:border-red-100 transition-all duration-300 group">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">Selected Work</h2>
              <div className="w-20 h-1 bg-red-600"></div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Photography', 'Videography', 'Advertising'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-full border ${activeFilter === filter
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-transparent border-neutral-700 text-gray-400 hover:text-white hover:border-white'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => handleProjectClick(item)}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 ${item.imagePosition || ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.client}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.category === 'Videography' ? <Play size={16} fill="currentColor" /> : <ImageIcon size={16} />}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < allFilteredItems.length && (
            <div className="mt-12 text-center">
              <Button variant="outline" onClick={handleLoadMore} className="border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:border-neutral-600">
                Load More Work
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About / Call Out Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team working"
                  className="w-full"
                />
              </div>
              {/* Floater Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Results</p>
                    <p className="font-bold text-lg">300% Growth</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Average social engagement increase for our clients.</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Who We Are</h2>
              <h3 className="text-4xl font-bold text-black mb-6">We Tell Florida's Best Stories.</h3>
              <p className="text-gray-600 text-lg mb-6">
                Florida Focus LLC isn't just an agency; we are creative partners. Founded with a vision to modernize local businesses, we bridge the gap between traditional values and modern digital consumption.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you are a startup looking for your first campaign or an established brand needing a refresh, our team combines technical precision in photography and video with the analytical power of targeted advertising.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Creative Direction', 'Social Strategy', '4K Production', 'Analytics'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-red-600" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <Button onClick={() => handleScrollTo('contact')}>Work With Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-20 -z-0 hidden lg:block"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">

            {/* Contact Info */}
            <div className="bg-black text-white p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Talk Business</h3>
                <p className="text-gray-400 mb-8">Ready to elevate your brand visuals? Fill out the form and we'll get back to you within 24 hours.</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-red-600" size={20} />
                    <span className="text-sm">contact@alexluncan.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="text-red-600" size={20} />
                    <span className="text-sm">@alexluncan.media</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-red-600" size={20} />
                    <span className="text-sm">Florida Focus LLC</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Based in</p>
                <p className="font-bold text-lg">Gainesville, FL</p>
                <p className="text-sm text-gray-400">Available Statewide</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 md:w-3/5 bg-white">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-500">Thanks for reaching out. We'll be in touch shortly.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-red-600 font-bold hover:text-red-700 text-sm uppercase"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-red-600 transition-colors bg-transparent"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-red-600 transition-colors bg-transparent"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Details</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-red-600 transition-colors bg-transparent resize-none"
                      placeholder="Tell us about your vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {!formStatus === 'submitting' && <ArrowRight size={18} />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <BrandLogo isScrolled={true} isFooter={true} />
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Florida Focus LLC. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/alexluncan.media" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/company/florida-focus-llc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:contact@alexluncan.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}