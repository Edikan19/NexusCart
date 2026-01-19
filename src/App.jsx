import { getAIRecommendations } from './utils/aiService';
import { extractProductNames, getStoreLinks } from './utils/productSearch';
import { useState } from 'react';
import { Sparkles, Send, User, ExternalLink } from 'lucide-react';

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
    
    if (userInput.trim()) {
      const userMessage = userInput;
      setMessages([...messages, { type: 'user', text: userMessage }]);
      setUserInput('');
      
      setMessages(prev => [...prev, { type: 'ai', text: 'Thinking...', loading: true }]);
      
      const aiResponse = await getAIRecommendations(userMessage);
      const productNames = extractProductNames(aiResponse);
      
      const productsWithStores = productNames.map((name) => ({
        name,
        stores: getStoreLinks(name)
      }));
      
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { 
          type: 'ai', 
          text: aiResponse,
          products: productsWithStores,
          loading: false
        };
        return updated;
      });
    }
  };

  const renderAIMessage = (msg) => {
    if (!msg.products || msg.products.length === 0) {
      return <div className="whitespace-pre-wrap">{msg.text}</div>;
    }

    const lines = msg.text.split('\n');
    const elements = [];
    let currentProductIndex = -1;

    lines.forEach((line, idx) => {
      const productMatch = line.match(/^###\s*\d+\.\s*(.+)$/);
      
      if (productMatch) {
        currentProductIndex++;
        const productName = productMatch[1].trim();
        const product = msg.products[currentProductIndex];
        
        elements.push(
          <div key={`line-${idx}`} className="mb-4 mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{productName}</h3>
            {product && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
                <p className="text-xs font-semibold text-purple-900 mb-2 flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Check availability:
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.stores.map((store, storeIdx) => (
                    <a
                      key={storeIdx}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 bg-white text-purple-700 border border-purple-300 rounded-full text-xs font-medium hover:bg-purple-100 hover:border-purple-400 transition-colors shadow-sm"
                    >
                      {store.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      } else if (line.trim().startsWith('*')) {
        elements.push(
          <div key={`line-${idx}`} className="ml-4 mb-2">
            <p className="text-gray-700 text-sm leading-relaxed">{line}</p>
          </div>
        );
      } else if (line.trim()) {
        elements.push(
          <p key={`line-${idx}`} className="mb-2 text-gray-800">
            {line}
          </p>
        );
      } else {
        elements.push(<div key={`line-${idx}`} className="mb-2"></div>);
      }
    });

    return <div>{elements}</div>;
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
          <h2 className="text-xl font-bold mb-2">Tell me what you are looking for!</h2>
          <p className="text-purple-100">
            Describe any product you need and I will recommend the best options for you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4 min-h-96 max-h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Start a conversation to get personalized recommendations</p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((msg, idx) => (
                <div key={idx}>
                  <div className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                    <div className={`max-w-full px-4 py-3 rounded-lg ${msg.type === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-50 text-gray-800'}`}>
                      {msg.type === 'user' ? (
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                      ) : (
                        renderAIMessage(msg)
                      )}
                    </div>
                  </div>
                </div>
              ))}
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