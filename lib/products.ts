export const products = [
  {
    id: 1,
    name: 'AB Animation - Anti-ageing',
    price: '$79.99',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    description: 'A revolutionary cellular rejuvenation formula developed through AI-driven molecular modeling. AB Animation focuses on reversing oxidative stress and enhancing skin elasticity at a genomic level.',
    benefits: ['Reverses cellular aging', 'Increases collagen synthesis', 'Protects against UV damage'],
    ingredients: ['Bio-active Peptides', 'Hyaluronic Acid', 'Resveratrol', 'Vitamin E'],
  },
  {
    id: 2,
    name: 'Virucidine',
    price: '$59.99',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1584017906815-7f2e605d39d9?auto=format&fit=crop&w=800&q=80',
    description: 'Our flagship clinical-grade botanical extract designed for powerful immune modulation. Virucidine uses state-of-the-art synthesis to maximize the bioavailability of therapeutic compounds.',
    benefits: ['Intense immune system support', 'Broad-spectrum antiviral properties', 'Rapid recovery acceleration'],
    ingredients: ['Standardized Botanical Extracts', 'Zinc Gluconate', 'Natural Immune Boosters'],
  },
  {
    id: 3,
    name: 'Ab-mal',
    price: '$44.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611078511252-87063cc1e47c?auto=format&fit=crop&w=800&q=80',
    description: 'A precision-engineered herbal formulation targeting biological markers associated with seasonal illnesses. Ab-mal provides comprehensive systemic support during periods of high physiological stress.',
    benefits: ['Targets systemic inflammation', 'Regulates body temperature', 'Fast-acting botanical relief'],
    ingredients: ['Artemisinin Extract', 'Natural Alkaloids', 'Systemic Balancing Herbs'],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === parseInt(id));
}
