// Function to extract product names from AI response
export function extractProductNames(aiResponse) {
  const products = [];
  const lines = aiResponse.split('\n');
  
  // Look for lines that start with ### followed by a number (e.g., "### 1. Nike Revolution 6")
  lines.forEach(line => {
    const match = line.match(/^###\s*\d+\.\s*(.+)$/);
    if (match) {
      products.push(match[1].trim());
    }
  });
  
  return products;
}

// Function to search for product image using a placeholder service
// In production, you'd use Google Custom Search API, Bing Image Search, or scrape e-commerce sites
export async function searchProductImage(productName) {
  try {
    const lowerName = productName.toLowerCase();
    
    // Using UI Avatars API which is CORS-friendly
    // Format: https://ui-avatars.com/api/?name=Text&size=300&background=color&color=fff
    
    if (lowerName.includes('nike') || lowerName.includes('adidas') || lowerName.includes('shoe') || lowerName.includes('sneaker')) {
      return 'https://ui-avatars.com/api/?name=Shoes&size=300&background=9333EA&color=fff&bold=true&format=png';
    } else if (lowerName.includes('laptop') || lowerName.includes('computer')) {
      return 'https://ui-avatars.com/api/?name=Laptop&size=300&background=2563EB&color=fff&bold=true&format=png';
    } else if (lowerName.includes('phone') || lowerName.includes('smartphone')) {
      return 'https://ui-avatars.com/api/?name=Phone&size=300&background=EC4899&color=fff&bold=true&format=png';
    } else if (lowerName.includes('watch')) {
      return 'https://ui-avatars.com/api/?name=Watch&size=300&background=10B981&color=fff&bold=true&format=png';
    } else if (lowerName.includes('headphone') || lowerName.includes('earphone')) {
      return 'https://ui-avatars.com/api/?name=Audio&size=300&background=F59E0B&color=fff&bold=true&format=png';
    } else {
      return 'https://ui-avatars.com/api/?name=Product&size=300&background=6B7280&color=fff&bold=true&format=png';
    }
  } catch (error) {
    console.error('Error fetching product image:', error);
    return 'https://ui-avatars.com/api/?name=NexusCart&size=300&background=9333EA&color=fff&bold=true&format=png';
  }
}

// Function to search for stores selling the product
// Function to search for stores selling the product
export function getStoreLinks(productName) {
  const encodedProduct = encodeURIComponent(productName);
  
  return [
    {
      name: 'Jumia',
      url: `https://www.jumia.com.ng/catalog/?q=${encodedProduct}`
    },
    {
      name: 'Konga',
      url: `https://www.konga.com/search?search=${encodedProduct}`
    },
    {
      name: 'Jiji',
      url: `https://jiji.ng/search?query=${encodedProduct}`
    },
    {
      name: 'Alibaba',
      url: `https://www.alibaba.com/trade/search?SearchText=${encodedProduct}`
    },
    {
      name: 'Slot',
      url: `https://slot.ng/?s=${encodedProduct}`
    },
    {
      name: 'PayPorte',
      url: `https://payporte.com/search?q=${encodedProduct}`
    }
  ];
}