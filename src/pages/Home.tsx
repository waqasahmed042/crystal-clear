import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Shield, Clock, Award, Sparkles, CheckCircle2, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Professional window cleaning for your home, inside and out.',
      icon: '🏠',
      features: ['Interior & exterior windows', 'Screen cleaning', 'Sill & frame detailing']
    },
    {
      title: 'Commercial Cleaning',
      description: 'Reliable service for offices, stores, and commercial buildings.',
      icon: '🏢',
      features: ['Flexible scheduling', 'High-rise capabilities', 'Fully insured']
    },
    {
      title: 'Emergency Service',
      description: 'Quick response for urgent cleaning needs and emergencies.',
      icon: '⚡',
      features: ['24/7 availability', 'Rapid response', 'Emergency equipment']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content: 'CrystalView transformed our home! The windows have never been cleaner. Highly professional service.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      content: 'We\'ve used CrystalView for our office building for 2 years. Always reliable and thorough.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Property Manager',
      content: 'Exceptional service and fair pricing. They handle all our commercial properties perfectly.',
      rating: 5,
      image: '👩‍🏢'
    },
    {
      name: 'John Williams',
      role: 'Restaurant Owner',
      content: 'Our storefront windows have never looked better. Professional team and excellent results.',
      rating: 5,
      image: '👨‍🍳'
    },
    {
      name: 'Lisa Thompson',
      role: 'Office Manager',
      content: 'Reliable, efficient, and always on time. CrystalView is our go-to cleaning service.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  const heroSlides = [
    {
      title: "Crystal Clear Windows",
      subtitle: "Every Time",
      description: "Professional window cleaning services that make your windows sparkle. Residential and commercial cleaning with guaranteed results.",
      cta1: "Get Free Quote",
      cta2: "View Services"
    },
    {
      title: "Professional Service",
      subtitle: "Trusted Results",
      description: "Over 10 years of experience delivering exceptional window cleaning services. Fully insured and certified professionals.",
      cta1: "Call Now",
      cta2: "Learn More"
    },
    {
      title: "Residential & Commercial",
      subtitle: "Complete Solutions",
      description: "From cozy homes to towering office buildings, we handle all your window cleaning needs with precision and care.",
      cta1: "Get Started",
      cta2: "Our Services"
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '10+', label: 'Years Experience' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional window cleaning"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white w-full">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
                      <Sparkles className="h-4 w-4 text-primary-glow" />
                      <span className="text-sm font-medium">Professional Window Cleaning Since 2014</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-up">
                      {slide.title}
                      <span className="block text-primary-glow sparkle">{slide.subtitle}</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
                      <Button size="lg" className="text-lg px-8 py-6 glow-on-hover magnetic-button">
                        {slide.cta1}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 magnetic-button"
                      >
                        <Link to="/services">{slide.cta2}</Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-primary-glow rounded-full opacity-60 pulse-dot"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-white rounded-full opacity-40 pulse-dot"></div>
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-primary-glow/50 rounded-full pulse-dot"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive window cleaning solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card glass">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose CrystalView?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Complete liability coverage for your peace of mind'
              },
              {
                icon: Award,
                title: 'Certified Team',
                description: 'Trained professionals with years of experience'
              },
              {
                icon: Clock,
                title: 'Reliable Service',
                description: 'On-time service with flexible scheduling'
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly',
                description: 'Safe, environmentally conscious cleaning products'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="glass testimonial-card h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-3">{testimonial.image}</div>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                      <div className="border-t pt-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="slider-nav left-arrow" />
            <CarouselNext className="slider-nav right-arrow" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Crystal Clear Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get your free quote today and experience the CrystalView difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
            >
              Call (555) 123-CLEAN
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;