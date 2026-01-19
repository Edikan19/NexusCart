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

// Function to get store links for a product
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