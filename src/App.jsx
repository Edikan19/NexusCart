import { getAIRecommendations } from './Utils/aiService';
import { extractProductNames, searchProductImage, getStoreLinks } from './Utils/productSearch';
import { useState } from 'react';
import { Sparkles, Send, User } from 'lucide-react';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

 const handleSendMessage = async (e) => {
  e.preventDefault();
  console.log("1. Form submitted");
  
  if (userInput.trim()) {
    const userMessage = userInput;
    setMessages([...messages, { type: 'user', text: userMessage }]);
    setUserInput('');
    
    console.log("2. Showing loading message");
    setMessages(prev => [...prev, { type: 'ai', text: 'Thinking...', loading: true }]);
    
    console.log("3. Calling AI...");
    const aiResponse = await getAIRecommendations(userMessage);
    console.log("4. AI Response received:", aiResponse.substring(0, 100));
    
    console.log("5. Extracting product names...");
    const productNames = extractProductNames(aiResponse);
    console.log("6. Extracted product names:", productNames);
    
    console.log("7. Fetching images...");
    const productsWithImages = await Promise.all(
      productNames.map(async (name) => ({
        name,
        image: await searchProductImage(name),
        stores: getStoreLinks(name)
      }))
    );
    console.log("8. Products with images:", productsWithImages);
    
    console.log("9. Updating messages...");
    setMessages(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = { 
        type: 'ai', 
        text: aiResponse,
        products: productsWithImages,
        loading: false
      };
      return updated;
    });
    console.log("10. Done!");
  }
};

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-10 h-10 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              NexusCart
            </h1>
          </div>
          <p className="text-gray-600 text-center mb-6">
            AI-powered shopping recommendations
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              NexusCart
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">{username}</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-6 text-white">
          <h2 className="text-xl font-bold mb-2">Tell me what you're looking for!</h2>
          <p className="text-purple-100">
            Describe any product you need and I'll recommend the best options for you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4 min-h-96 max-h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Start a conversation to get personalized recommendations</p>
            </div>
    ) : (
      <div className="space-y-4">
        {messages.map((msg, idx) => {
          console.log(`Message ${idx}:`, msg);
          return (
            <div key={idx}>
              <div className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-2xl px-4 py-3 rounded-lg ${msg.type === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
              
              {msg.type === 'ai' && (
                <div className="mt-4 ml-4">
                  {msg.products ? (
                    <div className="space-y-4">
                      <p className="text-green-600">Products found: {msg.products.length}</p>
                      {msg.products.map((product, prodIdx) => (
                        <div key={prodIdx} className="bg-white rounded-lg shadow-md p-4 max-w-2xl">
                          <div className="flex gap-4">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-32 h-32 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                              <p className="text-sm text-gray-600 mb-3">Available at:</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {product.stores.map((store, storeIdx) => (
                                  <a
                                    key={storeIdx}
                                    href={store.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors inline-block"
                                  >
                                    {store.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-red-600">No products data</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    )}
</div>

<form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            placeholder="E.g., I need running shoes under ₦50,000"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}