import type { Translations } from './es'

export const en: Translations = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    projects: 'Projects',
    testimonials: 'Testimonials',
    contact: 'Contact',
    quote: 'Get a Quote',
    role: 'Electrical Engineer',
  },
  hero: {
    badge: 'Certified Electrical Engineer · 15+ years of experience',
    titleLine1: 'Electrician',
    titleLine2: 'Services',
    subtitle:
      'Electrical installations, repairs and maintenance for homes and businesses. Emergency service available 24/7.',
    cta1: 'Request Service',
    cta2: 'Call Now',
    cta3: 'Free Quote',
    strip: 'Safety and Service, Always Our Priority',
  },
  trust: {
    title: 'Why choose us?',
    items: [
      {
        title: 'Licensed & Certified',
        desc: 'We hold all required licenses and professional certifications.',
      },
      {
        title: 'Fully Insured',
        desc: 'Your property is protected under our comprehensive insurance coverage.',
      },
      {
        title: '15+ Years of Experience',
        desc: 'Over 15 years solving all kinds of electrical problems.',
      },
      {
        title: 'Work Guarantee',
        desc: 'Every job is backed by a written satisfaction guarantee.',
      },
    ],
  },
  services: {
    title: 'Our Services',
    subtitle: 'Complete electrical solutions for homes and businesses.',
    cta: 'Request this service',
    allServices: 'View all services',
    items: [
      {
        title: 'Electrical Installations',
        desc: 'Full residential and commercial electrical system installation to the highest safety standards.',
      },
      {
        title: 'Repairs',
        desc: 'Fast diagnosis and repair of electrical failures — we find the problem and fix it efficiently.',
      },
      {
        title: 'Preventive Maintenance',
        desc: 'Periodic maintenance of electrical installations to prevent failures and ensure safety.',
      },
      {
        title: '24/7 Emergencies',
        desc: 'Emergency electrical service available around the clock, 7 days a week.',
      },
      {
        title: 'Electrical Panels',
        desc: 'Installation, upgrade and repair of residential and commercial distribution panels.',
      },
      {
        title: 'LED Lighting',
        desc: 'Upgrade your lighting with efficient LED technology and save up to 80% on energy costs.',
      },
      {
        title: 'Security & CCTV',
        desc: 'Installation of alarm systems, security cameras and access control.',
      },
      {
        title: 'Solar Energy',
        desc: 'Solar panel installation and maintenance to cut your electricity bill.',
      },
    ],
  },
  about: {
    title: 'About Jairo Donis',
    subtitle: 'Professional electrical engineer with over 15 years of experience.',
    story1:
      'Jairo Donis is a certified electrical engineer originally from El Salvador, with more than 15 years of experience in residential, commercial and industrial installations. His commitment to quality, safety and customer satisfaction have made him one of the most trusted professionals in the country.',
    story2:
      'He founded his company with the mission of delivering high-quality electrical services at fair prices, always prioritizing the safety of people and their properties. Every project receives the same level of dedication and professionalism, regardless of its size.',
    stats: [
      { value: '15+', label: 'Years of Experience' },
      { value: '500+', label: 'Completed Projects' },
      { value: '200+', label: 'Satisfied Clients' },
      { value: '24/7', label: 'Availability' },
    ],
    certs: {
      title: 'Certifications',
      items: [
        'Certified Electrical Engineer',
        'OSHA 30 Construction',
        'NFPA 70E Electrical Safety',
        'EPA 608 Refrigerants',
      ],
    },
  },
  projects: {
    title: 'Completed Projects',
    subtitle: 'Discover some of our most outstanding work.',
    items: [
      {
        title: 'Full Residential Installation',
        desc: 'Complete electrical installation in a 3-story home, including three-phase panel and special circuits.',
        category: 'Residential',
      },
      {
        title: 'Commercial Three-Phase Panel',
        desc: 'Three-phase panel upgrade in a commercial space with 12 independent circuits.',
        category: 'Commercial',
      },
      {
        title: 'Corporate LED System',
        desc: 'Lighting modernization across 3 floors of corporate offices using LED technology.',
        category: 'Commercial',
      },
      {
        title: 'Residential Solar Plant',
        desc: 'Installation of 20 × 400W solar panels in a family home with backup battery.',
        category: 'Solar',
      },
      {
        title: '16-Camera CCTV',
        desc: '4K 16-camera video surveillance system in a residence with remote monitoring.',
        category: 'Security',
      },
      {
        title: 'Emergency Repair',
        desc: 'Diagnosis and repair of a short circuit in an active business with minimal downtime.',
        category: 'Emergency',
      },
    ],
  },
  testimonials: {
    title: 'What our clients say',
    subtitle: "Our clients' satisfaction is our greatest reward.",
    items: [
      {
        name: 'María González',
        role: 'Homeowner',
        text: 'Excellent work. Jairo arrived on time, was very professional and the price was fair. He solved the problem quickly. 100% recommended!',
        rating: 5,
      },
      {
        name: 'Carlos Mendoza',
        role: 'Business owner',
        text: 'He handled a 2am emergency without any issues. Very grateful for the speed and professionalism he showed.',
        rating: 5,
      },
      {
        name: 'Ana López',
        role: 'Architect',
        text: 'High quality and very organized work. I always recommend him to my clients for electrical installations on new builds.',
        rating: 5,
      },
      {
        name: 'Roberto Silva',
        role: 'Office owner',
        text: 'He installed the entire electrical system for our new offices. Impeccable, tidy work delivered on time.',
        rating: 5,
      },
      {
        name: 'Laura Ramos',
        role: 'Homeowner',
        text: "The best electrical engineer I've hired. Honest, punctual and every job comes with a guarantee.",
        rating: 5,
      },
      {
        name: 'Miguel Torres',
        role: 'Store manager',
        text: "Upgraded our electrical panel and solved problems others couldn't. Very satisfied with the result.",
        rating: 5,
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We are ready to help. Contact us today and get your free quote.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Your full name',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+503 7829-7951',
      service: 'Service Type',
      servicePlaceholder: 'Select a service',
      message: 'Message',
      messagePlaceholder: 'Describe your problem or the service you need...',
      submit: 'Send Request',
      submitting: 'Sending...',
      success: 'Request sent successfully! We will contact you soon.',
      serviceOptions: [
        'Electrical Installation',
        'Repair',
        'Maintenance',
        'Emergency',
        'Electrical Panel',
        'LED Lighting',
        'Security / CCTV',
        'Solar Energy',
        'Other',
      ],
    },
    info: {
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      hours: 'Business Hours',
      hoursValue: 'Mon – Sat: 7:00am – 7:00pm',
      hoursEmergency: 'Emergencies: 24 / 7',
      address: 'Location',
      addressValue: 'El Salvador, San Salvador',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    tagline: 'Professional and reliable electrical solutions.',
    pages: 'Pages',
    contactUs: 'Contact',
  },
}
