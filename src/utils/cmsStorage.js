import { ALL_PRODUCTS, PRODUCTS } from '../data/products';

const STORAGE_KEYS = {
  PRODUCTS: 'ws_cms_products',
  TESTIMONIALS: 'ws_cms_testimonials',
  LOGOS: 'ws_cms_logos',
  INQUIRIES: 'ws_cms_inquiries'
};

export const INITIAL_TESTIMONIALS = [
  {
    id: 'test-1',
    name: "Marcus Vance",
    role: "Head of People & Culture, Apex Global Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "The quality of the customized leather sets exceeded our expectations. Our executive clients were genuinely impressed, and the fulfillment process was flawless from start to finish."
  },
  {
    id: 'test-2',
    name: "Ali Bohri",
    role: "Director Operations, SAIF UL BURHAN",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "MashAllah kiya dealing hai! Best rates, best quality, straight commitment wale log. The custom leather keychains and wooden gift sets for our annual corporate milestone were praised by all board members."
  },
  {
    id: 'test-3',
    name: "Farhan Ahmed",
    role: "Head of Admin & HR",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Ordered 500 customized full-grain leather keychains with precision company logo debossing. Delivered 2 days ahead of schedule in luxury velvet presentation boxes. Outstanding experience!"
  }
];

export const INITIAL_LOGOS = [
  { id: 'logo-1', name: 'Corporate Partner 1', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhJtpbvOYqc0NkwwsMLhKqxQhaioywq53TXv-526bOA&s' },
  { id: 'logo-2', name: 'DRS Logistics', logoUrl: 'https://www.drs.com.pk/wp-content/uploads/2025/10/Untitled-1-1.png' },
  { id: 'logo-3', name: 'Meezan Bank', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57Sr4uImEfq9qF-mwrrpa1mrJqw1OljRMEB77cB7ahg&s' },
  { id: 'logo-4', name: 'TUC Cracker', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Tuc_cracker_logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original' },
  { id: 'logo-5', name: 'Lucky Cement', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Lucky_Cement_logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original' },
  { id: 'logo-6', name: 'HBL', logoUrl: 'https://companieslogo.com/img/orig/HBL.PK-3c9ca012.png?t=1720244492' },
  { id: 'logo-7', name: 'Unilever', logoUrl: 'https://images.seeklogo.com/logo-png/14/2/unilever-logo-png_seeklogo-145123.png' },
  { id: 'logo-8', name: 'Swvl', logoUrl: 'https://iconlogovector.com/uploads/images/2025/02/lg-67add1f115927-Swvl.webp' },
  { id: 'logo-9', name: 'Khaadi', logoUrl: 'https://i.dawn.com/large/2021/12/61caa7175be6b.png' },
  { id: 'logo-10', name: 'Engro', logoUrl: 'https://www.logo.wine/a/logo/Engro_Corporation/Engro_Corporation-Logo.wine.svg' },
  { id: 'logo-11', name: 'MCB Bank', logoUrl: 'https://images.seeklogo.com/logo-png/20/1/mcb-bank-logo-png_seeklogo-202822.png' }
];

// Helper functions for Products
export function getCMSProducts() {
  if (typeof window === 'undefined') return ALL_PRODUCTS;
  const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (!data) return ALL_PRODUCTS;
  try {
    const stored = JSON.parse(data);
    if (!Array.isArray(stored)) return ALL_PRODUCTS;
    const storedIds = new Set(stored.map(p => p.id));
    let hasNew = false;
    ALL_PRODUCTS.forEach(defaultItem => {
      if (!storedIds.has(defaultItem.id)) {
        stored.push(defaultItem);
        hasNew = true;
      }
    });
    if (hasNew) {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(stored));
    }
    return stored;
  } catch (e) {
    return ALL_PRODUCTS;
  }
}

export function saveCMSProducts(products) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    window.dispatchEvent(new Event('cms_data_updated'));
  }
}

// Helper functions for Testimonials
export function getCMSTestimonials() {
  if (typeof window === 'undefined') return INITIAL_TESTIMONIALS;
  const data = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
  if (!data) return INITIAL_TESTIMONIALS;
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_TESTIMONIALS;
  }
}

export function saveCMSTestimonials(testimonials) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    window.dispatchEvent(new Event('cms_data_updated'));
  }
}

// Helper functions for Corporate Logos
export function getCMSLogos() {
  if (typeof window === 'undefined') return INITIAL_LOGOS;
  const data = localStorage.getItem(STORAGE_KEYS.LOGOS);
  if (!data) return INITIAL_LOGOS;
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_LOGOS;
  }
}

export function saveCMSLogos(logos) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.LOGOS, JSON.stringify(logos));
    window.dispatchEvent(new Event('cms_data_updated'));
  }
}

// Helper functions for Inquiries / Quotes
export function getCMSInquiries() {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

export function addCMSInquiry(inquiry) {
  if (typeof window !== 'undefined') {
    const list = getCMSInquiries();
    const updated = [{ id: 'inq-' + Date.now(), timestamp: new Date().toLocaleString(), ...inquiry }, ...list];
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
    window.dispatchEvent(new Event('cms_data_updated'));
  }
}
