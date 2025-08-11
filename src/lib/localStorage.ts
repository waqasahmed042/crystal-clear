// localStorage utility functions for CrystalView Cleaning Services

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  status: 'active' | 'inactive' | 'pending';
  lastService: string;
  nextService?: string;
  totalJobs: number;
  notes?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  frequency: string;
  features: string[];
  isPopular?: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'converted';
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  about: {
    title: string;
    content: string;
    mission: string;
    values: string[];
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
}

// Initialize default data
const initializeDefaultData = () => {
  const defaultTeamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Founder & Lead Cleaner',
      bio: 'With over 10 years of experience in professional cleaning, Sarah founded CrystalView to provide exceptional window cleaning services.',
      image: '/team-sarah.jpg',
      email: 'sarah@crystalview.com'
    },
    {
      id: '2',
      name: 'Mike Chen',
      role: 'Operations Manager',
      bio: 'Mike ensures all our operations run smoothly and our clients receive consistent, high-quality service.',
      image: '/team-mike.jpg',
      email: 'mike@crystalview.com'
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      role: 'Senior Cleaner',
      bio: 'Lisa specializes in commercial cleaning and has worked with some of the city\'s largest office buildings.',
      image: '/team-lisa.jpg',
      email: 'lisa@crystalview.com'
    }
  ];

  const defaultClients: Client[] = [
    {
      id: '1',
      name: 'Downtown Office Complex',
      email: 'manager@downtownoffice.com',
      phone: '(555) 123-4567',
      address: '123 Business Ave, Downtown',
      serviceType: 'Commercial Monthly',
      status: 'active',
      lastService: '2024-01-15',
      nextService: '2024-02-15',
      totalJobs: 12,
      notes: 'Requires early morning service (6 AM start)'
    },
    {
      id: '2',
      name: 'The Johnson Residence',
      email: 'homeowner@email.com',
      phone: '(555) 987-6543',
      address: '456 Suburban St, Residential Area',
      serviceType: 'Residential Bi-weekly',
      status: 'active',
      lastService: '2024-01-20',
      nextService: '2024-02-03',
      totalJobs: 8,
      notes: 'Large bay windows, extra careful with plants'
    }
  ];

  const defaultPricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Basic Clean',
      description: 'Perfect for small homes and apartments',
      price: 89,
      frequency: 'One-time',
      features: [
        'Interior and exterior windows',
        'Window sills and frames',
        'Basic screen cleaning',
        'Free estimates'
      ]
    },
    {
      id: '2',
      name: 'Premium Clean',
      description: 'Our most popular service for regular maintenance',
      price: 149,
      frequency: 'Monthly',
      features: [
        'Everything in Basic Clean',
        'Deep frame cleaning',
        'Screen removal and washing',
        'Track and sill detailing',
        'Spot cleaning touch-ups',
        '15% discount for regular service'
      ],
      isPopular: true
    },
    {
      id: '3',
      name: 'Commercial Package',
      description: 'Comprehensive cleaning for businesses',
      price: 299,
      frequency: 'Monthly',
      features: [
        'High-rise window cleaning',
        'Safety equipment included',
        'Flexible scheduling',
        'Emergency cleaning services',
        'Monthly reports',
        'Fully insured and bonded'
      ]
    }
  ];

  const defaultSiteContent: SiteContent = {
    hero: {
      title: 'Crystal Clear Windows, Every Time',
      subtitle: 'Professional window cleaning services that make your windows sparkle. Residential and commercial cleaning with guaranteed satisfaction.',
      ctaText: 'Get Free Quote'
    },
    about: {
      title: 'About CrystalView Cleaning Services',
      content: 'Founded in 2014, CrystalView Cleaning Services has been providing exceptional window cleaning services to residential and commercial clients. Our team of trained professionals uses eco-friendly products and state-of-the-art equipment to ensure your windows are crystal clear.',
      mission: 'To provide the highest quality window cleaning services while building lasting relationships with our clients through reliability, professionalism, and exceptional results.',
      values: [
        'Quality workmanship in every job',
        'Reliable and punctual service',
        'Eco-friendly cleaning products',
        'Fully insured and bonded',
        'Customer satisfaction guaranteed'
      ]
    },
    contact: {
      address: '123 Crystal Lane, Clear City, CC 12345',
      phone: '(555) 123-CLEAN',
      email: 'info@crystalview.com',
      hours: 'Monday - Friday: 8AM - 6PM, Saturday: 9AM - 4PM'
    }
  };

  // Initialize localStorage with default data if empty
  if (!localStorage.getItem('crystalview_team')) {
    localStorage.setItem('crystalview_team', JSON.stringify(defaultTeamMembers));
  }
  if (!localStorage.getItem('crystalview_clients')) {
    localStorage.setItem('crystalview_clients', JSON.stringify(defaultClients));
  }
  if (!localStorage.getItem('crystalview_pricing')) {
    localStorage.setItem('crystalview_pricing', JSON.stringify(defaultPricingPlans));
  }
  if (!localStorage.getItem('crystalview_content')) {
    localStorage.setItem('crystalview_content', JSON.stringify(defaultSiteContent));
  }
  if (!localStorage.getItem('crystalview_contacts')) {
    localStorage.setItem('crystalview_contacts', JSON.stringify([]));
  }
};

// Generic localStorage functions
export const getFromStorage = <T>(key: string): T[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return [];
  }
};

export const saveToStorage = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Specific data functions
export const getTeamMembers = (): TeamMember[] => getFromStorage<TeamMember>('crystalview_team');
export const saveTeamMembers = (team: TeamMember[]): void => saveToStorage('crystalview_team', team);

export const getClients = (): Client[] => getFromStorage<Client>('crystalview_clients');
export const saveClients = (clients: Client[]): void => saveToStorage('crystalview_clients', clients);

export const getPricingPlans = (): PricingPlan[] => getFromStorage<PricingPlan>('crystalview_pricing');
export const savePricingPlans = (plans: PricingPlan[]): void => saveToStorage('crystalview_pricing', plans);

export const getContactSubmissions = (): ContactSubmission[] => getFromStorage<ContactSubmission>('crystalview_contacts');
export const saveContactSubmissions = (contacts: ContactSubmission[]): void => saveToStorage('crystalview_contacts', contacts);

export const getSiteContent = (): SiteContent => {
  try {
    const data = localStorage.getItem('crystalview_content');
    if (!data) {
      // Return default content if none exists
      const defaultContent: SiteContent = {
        hero: {
          title: 'Crystal Clear Windows, Every Time',
          subtitle: 'Professional window cleaning services that make your windows sparkle.',
          ctaText: 'Get Free Quote'
        },
        about: {
          title: 'About CrystalView',
          content: 'Professional window cleaning services since 2014.',
          mission: 'To provide exceptional window cleaning services.',
          values: ['Quality', 'Reliability', 'Eco-friendly']
        },
        contact: {
          address: '123 Crystal Lane, Clear City, CC 12345',
          phone: '(555) 123-CLEAN',
          email: 'info@crystalview.com',
          hours: 'Mon-Fri: 8AM-6PM'
        }
      };
      return defaultContent;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting site content from localStorage:', error);
    // Return default content on error
    return {
      hero: {
        title: 'Crystal Clear Windows, Every Time',
        subtitle: 'Professional window cleaning services that make your windows sparkle.',
        ctaText: 'Get Free Quote'
      },
      about: {
        title: 'About CrystalView',
        content: 'Professional window cleaning services since 2014.',
        mission: 'To provide exceptional window cleaning services.',
        values: ['Quality', 'Reliability', 'Eco-friendly']
      },
      contact: {
        address: '123 Crystal Lane, Clear City, CC 12345',
        phone: '(555) 123-CLEAN',
        email: 'info@crystalview.com',
        hours: 'Mon-Fri: 8AM-6PM'
      }
    };
  }
};

export const saveSiteContent = (content: SiteContent): void => {
  try {
    localStorage.setItem('crystalview_content', JSON.stringify(content));
  } catch (error) {
    console.error('Error saving site content to localStorage:', error);
  }
};

// Admin authentication
export const checkAdminAuth = (): boolean => {
  return localStorage.getItem('crystalview_admin_auth') === 'true';
};

export const setAdminAuth = (isAuthenticated: boolean): void => {
  localStorage.setItem('crystalview_admin_auth', isAuthenticated.toString());
};

// Initialize data on first load
initializeDefaultData();