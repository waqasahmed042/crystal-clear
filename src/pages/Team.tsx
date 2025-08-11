import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Shield, Users, MapPin, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      experience: '10+ years',
      image: '👩‍💼',
      bio: 'Sarah founded CrystalView in 2014 with a vision to transform the window cleaning industry. Her commitment to excellence has made CrystalView a trusted name in the community.',
      specialties: ['Business Leadership', 'Customer Relations', 'Quality Assurance'],
      certifications: ['IWCA Certified', 'Business Management'],
      featured: true
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Manager',
      experience: '8 years',
      image: '👨‍💼',
      bio: 'Michael ensures all operations run smoothly and efficiently. He oversees scheduling, equipment maintenance, and team coordination.',
      specialties: ['Operations Management', 'Team Leadership', 'Safety Training'],
      certifications: ['OSHA Certified', 'Operations Management'],
      featured: false
    },
    {
      name: 'Emily Chen',
      role: 'Senior Window Technician',
      experience: '6 years',
      image: '👩‍🔧',
      bio: 'Emily is our most experienced technician, specializing in high-rise and commercial window cleaning. She mentors new team members.',
      specialties: ['High-Rise Cleaning', 'Commercial Services', 'Team Training'],
      certifications: ['High-Rise Certified', 'Safety Specialist'],
      featured: false
    },
    {
      name: 'David Thompson',
      role: 'Customer Success Manager',
      experience: '5 years',
      image: '👨‍💻',
      bio: 'David manages customer relationships and ensures every client receives exceptional service from initial contact to project completion.',
      specialties: ['Customer Relations', 'Service Coordination', 'Quality Control'],
      certifications: ['Customer Service Excellence', 'CRM Specialist'],
      featured: false
    },
    {
      name: 'Lisa Martinez',
      role: 'Residential Specialist',
      experience: '4 years',
      image: '👩‍🏠',
      bio: 'Lisa focuses on residential services and has perfected techniques for cleaning all types of home windows, screens, and glass surfaces.',
      specialties: ['Residential Cleaning', 'Detail Work', 'Customer Education'],
      certifications: ['Residential Specialist', 'Eco-Friendly Certified'],
      featured: false
    },
    {
      name: 'James Wilson',
      role: 'Commercial Technician',
      experience: '7 years',
      image: '👨‍🔧',
      bio: 'James specializes in large commercial projects and has extensive experience with office buildings, retail spaces, and industrial facilities.',
      specialties: ['Commercial Projects', 'Industrial Cleaning', 'Equipment Maintenance'],
      certifications: ['Commercial Certified', 'Equipment Specialist'],
      featured: false
    }
  ];

  const stats = [
    { icon: Users, number: '12+', label: 'Team Members' },
    { icon: Award, number: '50+', label: 'Certifications' },
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: Shield, number: '100%', label: 'Insured & Bonded' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service delivery.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety training and protocols protect our team and your property.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborative approach ensures consistent, reliable service on every project.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-primary-glow">Team</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Our professional team of certified window cleaning specialists is dedicated 
              to delivering exceptional service and crystal clear results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the dedicated professionals who make CrystalView the trusted choice 
              for window cleaning services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`service-card relative overflow-hidden ${member.featured ? 'ring-2 ring-primary' : ''}`}>
                {member.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Founder
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                    <Badge variant="outline" className="mt-2">{member.experience}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Certifications:</h4>
                    <div className="space-y-1">
                      {member.certifications.map((cert, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Award className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our team and ensure exceptional service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-up">
                <h2 className="text-4xl font-bold mb-6">Continuous Training & Development</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Our team participates in ongoing training programs to stay current with the latest 
                    window cleaning techniques, safety protocols, and customer service standards.
                  </p>
                  <p className="leading-relaxed">
                    We invest in our team's professional development through certifications from 
                    industry organizations like the International Window Cleaning Association (IWCA).
                  </p>
                  <p className="leading-relaxed">
                    Regular safety training ensures our team can handle any cleaning challenge while 
                    maintaining the highest safety standards for both our workers and your property.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-center">Team Certifications</h3>
                  <div className="space-y-3">
                    {[
                      'IWCA Professional Certification',
                      'OSHA Safety Training',
                      'High-Rise Window Cleaning',
                      'Eco-Friendly Cleaning Methods',
                      'Customer Service Excellence',
                      'Equipment Safety & Maintenance'
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work with Our Professional Team
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference that comes from working with trained, certified, and 
            dedicated window cleaning professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 magnetic-button">
              <Link to="/contact">Schedule Service</Link>
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

export default Team;