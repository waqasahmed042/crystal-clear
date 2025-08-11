import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store form submission in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Show success message
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours with your free quote.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      propertyType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '(555) 123-CLEAN',
      subdtail: '(555) 123-2532',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@crystalview.com',
      subdtail: 'quotes@crystalview.com',
      description: 'Send us a message anytime'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      detail: 'Metro Area & Surrounding',
      subdtail: '25-mile radius',
      description: 'We serve the greater metropolitan area'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Mon-Sat: 7AM - 6PM',
      subdtail: 'Emergency: 24/7',
      description: 'Regular hours with emergency service available'
    }
  ];

  const services = [
    'Residential Window Cleaning',
    'Commercial Window Cleaning',
    'High-Rise Window Cleaning',
    'Post-Construction Cleanup',
    'Pressure Washing',
    'Gutter Cleaning',
    'Emergency Service',
    'Other'
  ];

  const propertyTypes = [
    'Single Family Home',
    'Apartment/Condo',
    'Small Office',
    'Retail Store',
    'Office Building',
    'Restaurant',
    'Industrial',
    'Other'
  ];

  const faqs = [
    {
      question: 'How quickly can you provide a quote?',
      answer: 'We typically respond to quote requests within 2-4 hours during business hours.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes! All estimates are completely free with no obligation to book our services.'
    },
    {
      question: 'What information do you need for an accurate quote?',
      answer: 'Property type, number of windows, and any special requirements help us provide the most accurate estimate.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your <span className="text-primary-glow">Free Quote</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Ready for crystal clear windows? Contact us today for a free, no-obligation quote 
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 glow-on-hover">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-CLEAN
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Quote Below
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-in-up">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-3xl mb-2">Request Your Free Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            {propertyTypes.map((type, index) => (
                              <SelectItem key={index} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your window cleaning needs, number of windows, special requirements, etc."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full magnetic-button">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Get Free Quote
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      * Required fields. We respect your privacy and will never share your information.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-up">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="service-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                            <p className="text-primary font-medium">{info.detail}</p>
                            <p className="text-muted-foreground text-sm">{info.subdtail}</p>
                            <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Response Time</h3>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to all quote requests within 2-4 hours during business hours.
                  </p>
                  <Badge variant="outline">Average Response: 2 Hours</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our quoting process and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="service-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Service Area</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We proudly serve the greater metropolitan area and surrounding communities within a 25-mile radius.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
                    <MapPin className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Coverage Area</h3>
                  <p className="text-muted-foreground mb-6">
                    We serve residential and commercial properties within a 25-mile radius of our headquarters. 
                    This includes all major suburbs, business districts, and surrounding communities.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    {[
                      'Downtown metro area',
                      'All major suburbs',
                      'Business and industrial districts',
                      'Surrounding communities',
                      'Emergency service coverage',
                      'Same-day service available'
                    ].map((area, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6">
            <Star className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Crystal Clear Results?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait - get your free quote today and experience the CrystalView difference. 
            Professional service, guaranteed results, and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 magnetic-button">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (555) 123-CLEAN
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;