import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, X, Home, Building2, Zap, Star, Calculator, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic Home',
      icon: Home,
      price: '$89',
      period: 'per service',
      description: 'Perfect for small to medium homes with standard window cleaning needs.',
      features: [
        'Up to 15 windows',
        'Interior & exterior cleaning',
        'Basic screen cleaning',
        'Sill wiping',
        '30-day guarantee'
      ],
      notIncluded: [
        'Screen repair',
        'Pressure washing',
        'Emergency service'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Premium Home',
      icon: Home,
      price: '$149',
      period: 'per service',
      description: 'Comprehensive cleaning package for larger homes and detailed service.',
      features: [
        'Up to 25 windows',
        'Interior & exterior cleaning',
        'Screen cleaning & minor repairs',
        'Sill & frame detailing',
        'Mirror & glass door cleaning',
        '60-day guarantee',
        'Priority scheduling'
      ],
      notIncluded: [
        'Pressure washing',
        'Gutter cleaning'
      ],
      popular: true,
      color: 'border-primary ring-2 ring-primary/20'
    },
    {
      name: 'Commercial Basic',
      icon: Building2,
      price: '$199',
      period: 'per visit',
      description: 'Essential window cleaning for small offices and retail spaces.',
      features: [
        'Up to 2,000 sq ft',
        'Storefront cleaning',
        'Interior office windows',
        'Basic maintenance',
        'Flexible scheduling',
        '90-day guarantee'
      ],
      notIncluded: [
        'High-rise cleaning',
        'Pressure washing',
        'Weekend service'
      ],
      popular: false,
      color: 'border-gray-200'
    }
  ];

  const addOnServices = [
    { service: 'Screen Repair', price: '$15', unit: 'per screen' },
    { service: 'Pressure Washing', price: '$89', unit: 'per service' },
    { service: 'Gutter Cleaning', price: '$129', unit: 'per house' },
    { service: 'Solar Panel Cleaning', price: '$199', unit: 'per array' },
    { service: 'Post-Construction Cleanup', price: '$299', unit: 'per project' },
    { service: 'Emergency Service', price: '+50%', unit: 'surcharge' }
  ];

  const frequencyDiscounts = [
    { frequency: 'Monthly', discount: '15%', description: 'Regular monthly service' },
    { frequency: 'Bi-Monthly', discount: '10%', description: 'Every two months' },
    { frequency: 'Quarterly', discount: '5%', description: 'Four times per year' }
  ];

  const factors = [
    {
      icon: Home,
      title: 'Property Size',
      description: 'Number of windows, square footage, and building height affect pricing.'
    },
    {
      icon: Clock,
      title: 'Service Frequency',
      description: 'Regular maintenance plans offer significant discounts and priority scheduling.'
    },
    {
      icon: Star,
      title: 'Service Level',
      description: 'Basic cleaning vs. premium detailing with additional services.'
    },
    {
      icon: Building2,
      title: 'Property Type',
      description: 'Residential, commercial, or industrial properties have different requirements.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent <span className="text-primary-glow">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Clear, upfront pricing with no hidden fees. Choose the perfect package 
              for your window cleaning needs.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 glow-on-hover">
              <Calculator className="h-5 w-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select from our popular service packages or contact us for a custom quote 
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`service-card relative ${plan.color} ${plan.popular ? 'scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2 opacity-50">
                        <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full magnetic-button" variant={plan.popular ? "default" : "outline"}>
                    <Link to="/contact">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Add-On Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your window cleaning service with additional options to meet all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOnServices.map((addon, index) => (
              <Card key={index} className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{addon.service}</h3>
                      <p className="text-sm text-muted-foreground">{addon.unit}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{addon.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frequency Discounts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Save with Regular Service</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The more frequently you schedule service, the more you save. Plus, regular 
              maintenance keeps your windows looking great year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {frequencyDiscounts.map((discount, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2">{discount.discount}</div>
                  <h3 className="text-xl font-semibold mb-2">{discount.frequency}</h3>
                  <p className="text-muted-foreground text-sm">{discount.description}</p>
                  <Badge variant="outline" className="mt-4">Save More</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Affects Pricing?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the factors that influence pricing helps you make the best choice for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.map((factor, index) => (
              <div key={index} className="text-center animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <factor.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
              <Star className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Price Match Guarantee</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're confident in our competitive pricing. If you find a lower price for comparable 
              service quality from a licensed, insured competitor, we'll match it.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                'Licensed & insured companies only',
                'Comparable service quality required',
                'Written estimate must be provided'
              ].map((condition, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free, no-obligation quote tailored to your specific window cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 magnetic-button">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-CLEAN
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;