import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Home, Building2, Zap, Shield, Clock, Award, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Window Cleaning',
      description: 'Professional window cleaning for homes, apartments, and condominiums.',
      features: [
        'Interior & exterior window cleaning',
        'Screen cleaning and repair',
        'Sill and frame detailing',
        'Mirror and glass door cleaning',
        'Post-construction cleanup',
        'Seasonal maintenance plans'
      ],
      pricing: 'Starting at $89',
      popular: false,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Building2,
      title: 'Commercial Window Cleaning',
      description: 'Reliable cleaning services for offices, retail stores, and commercial buildings.',
      features: [
        'High-rise window cleaning',
        'Storefront maintenance',
        'Office building services',
        'Flexible scheduling options',
        'Fully insured operations',
        'Emergency cleaning services'
      ],
      pricing: 'Custom Quote',
      popular: true,
      color: 'bg-primary/5 border-primary/20'
    },
    {
      icon: Zap,
      title: 'Emergency & Specialty Services',
      description: 'Urgent cleaning needs and specialized window treatments.',
      features: [
        '24/7 emergency response',
        'Post-storm cleanup',
        'Construction site cleaning',
        'Pressure washing services',
        'Gutter cleaning',
        'Solar panel cleaning'
      ],
      pricing: 'Call for Pricing',
      popular: false,
      color: 'bg-green-50 border-green-200'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We assess your property and provide a detailed quote with no obligations.',
      icon: Phone
    },
    {
      step: '2',
      title: 'Scheduled Service',
      description: 'Our professional team arrives on time with all necessary equipment.',
      icon: Clock
    },
    {
      step: '3',
      title: 'Quality Cleaning',
      description: 'We clean your windows using eco-friendly products and proven techniques.',
      icon: Award
    },
    {
      step: '4',
      title: 'Final Inspection',
      description: 'We inspect our work to ensure every window meets our high standards.',
      icon: Shield
    }
  ];

  const addons = [
    'Screen cleaning and repair',
    'Pressure washing services',
    'Gutter cleaning',
    'Solar panel maintenance',
    'Mirror and glass door cleaning',
    'Post-construction cleanup'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-glow">Services</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Comprehensive window cleaning solutions for every need, from cozy homes to towering office buildings.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 glow-on-hover">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Cleaning Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of window cleaning services, each designed to deliver crystal clear results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`service-card relative overflow-hidden ${service.color}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.pricing}</span>
                      <Button className="magnetic-button">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure every window cleaning job exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 inline-flex items-center justify-center w-10 h-10 bg-primary-glow rounded-full">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Additional Services</h2>
              <p className="text-xl text-muted-foreground">
                Enhance your window cleaning experience with our additional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 glass rounded-lg animate-slide-in-up hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
              <Star className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6">100% Satisfaction Guarantee</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We stand behind our work with a complete satisfaction guarantee. If you're not completely 
              satisfied with our service, we'll return to make it right at no additional charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 glow-on-hover">
                <Link to="/contact">Schedule Service</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Call (555) 123-CLEAN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Crystal Clear Windows?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the CrystalView difference with our professional window cleaning services.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 magnetic-button">
            <Link to="/contact">Get Your Free Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;