import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Shield, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every window we clean, ensuring crystal clear results every time.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Fully insured and bonded team with comprehensive safety training and background checks.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, adapt, and deliver exactly what you need.'
    },
    {
      icon: Sparkles,
      title: 'Eco-Friendly',
      description: 'We use environmentally safe products that protect your family and the planet.'
    }
  ];

  const certifications = [
    'International Window Cleaning Association (IWCA) Member',
    'Fully Licensed and Insured',
    'OSHA Safety Certified',
    'Environmental Protection Certified',
    'Better Business Bureau A+ Rating'
  ];

  const milestones = [
    { year: '2014', event: 'CrystalView founded with a mission to transform window cleaning' },
    { year: '2016', event: 'Expanded to commercial services and high-rise cleaning' },
    { year: '2018', event: 'Achieved 500+ satisfied customers milestone' },
    { year: '2020', event: 'Implemented eco-friendly cleaning solutions across all services' },
    { year: '2022', event: 'Launched 24/7 emergency cleaning services' },
    { year: '2024', event: 'Celebrating 10 years of crystal clear results' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary-glow">CrystalView</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              For over a decade, we've been dedicated to providing exceptional window cleaning 
              services that exceed expectations and deliver crystal clear results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-up">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    CrystalView Cleaning Services was born from a simple belief: that clean windows 
                    shouldn't be a luxury, but a standard. Founded in 2014 by Sarah Johnson, our 
                    company started with just one van and a commitment to excellence.
                  </p>
                  <p className="leading-relaxed">
                    What began as a small residential service has grown into a trusted name in both 
                    residential and commercial window cleaning. We've built our reputation on 
                    reliability, professionalism, and most importantly, results that speak for themselves.
                  </p>
                  <p className="leading-relaxed">
                    Today, we're proud to serve hundreds of satisfied customers across the region, 
                    from cozy homes to towering office buildings, always with the same dedication 
                    to quality that started it all.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="glass p-8 rounded-2xl">
                  <blockquote className="text-lg italic text-center">
                    "Every window tells a story, and we're here to make sure yours shines bright."
                  </blockquote>
                  <cite className="block text-center mt-4 font-semibold">
                    - Sarah Johnson, Founder
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're driven by a clear mission and guided by values that ensure every interaction 
              with CrystalView exceeds your expectations.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide the highest quality window cleaning services while building lasting 
                  relationships with our clients through reliability, professionalism, and 
                  exceptional results. We believe that clear windows brighten spaces and lives, 
                  and we're committed to making that vision a reality for every customer.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="service-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Certifications & Credentials</h2>
              <p className="text-xl text-muted-foreground">
                We're committed to maintaining the highest professional standards
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((certification, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 glass rounded-lg animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{certification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              A decade of growth, innovation, and crystal clear results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="glass p-4 rounded-lg">
                      <p className="font-medium">{milestone.event}</p>
                    </div>
                  </div>
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
            Ready to Experience the CrystalView Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their window cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;