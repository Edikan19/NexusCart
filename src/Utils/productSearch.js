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
  // For now, we'll use a placeholder image service
  // You can replace this with actual API calls to image search services
  
  try {
    // Using DuckDuckGo image search would require CORS proxy
    // For demo purposes, we'll use placeholder images based on product category
    
    const lowerName = productName.toLowerCase();
    
    // Determine category and return relevant placeholder
    if (lowerName.includes('nike') || lowerName.includes('adidas') || lowerName.includes('shoe')) {
      return `https://source.unsplash.com/400x300/?running+shoes,${encodeURIComponent(productName)}`;
    } else if (lowerName.includes('laptop') || lowerName.includes('computer')) {
      return `https://source.unsplash.com/400x300/?laptop,${encodeURIComponent(productName)}`;
    } else if (lowerName.includes('phone') || lowerName.includes('smartphone')) {
      return `https://source.unsplash.com/400x300/?smartphone,${encodeURIComponent(productName)}`;
    } else if (lowerName.includes('watch')) {
      return `https://source.unsplash.com/400x300/?smartwatch,${encodeURIComponent(productName)}`;
    } else if (lowerName.includes('headphone') || lowerName.includes('earphone')) {
      return `https://source.unsplash.com/400x300/?headphones,${encodeURIComponent(productName)}`;
    } else {
      return `https://source.unsplash.com/400x300/?product,${encodeURIComponent(productName)}`;
    }
  } catch (error) {
    console.error('Error fetching product image:', error);
    return 'https://source.unsplash.com/400x300/?product';
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