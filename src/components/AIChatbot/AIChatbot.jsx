// src/components/AIChatbot/AIChatbot.jsx
import React, { useState } from 'react';
import './AIChatbot.css';
import Button from '../Button/Button';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'AI', text: "Hello, I'm your AI Email Strategist. I can help you: \n1. Generate campaign ideas.\n2. Draft subject lines.\n3. Analyze list performance.\n\nWhat can I do for you today?" },
    ]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: 'User', text: input };
        setMessages(prev => [...prev, userMessage]);

        // Mock AI Response Logic (Simulating an API call)
        const mockResponse = getMockAIResponse(input);
        
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'AI', text: mockResponse }]);
        }, 1000);

        setInput('');
    };

    const getMockAIResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        if (lowerQuery.includes('subject line') || lowerQuery.includes('draft')) {
            return "Based on your 'Land Scaping' campaign, here are 3 subject lines:\n1. 🌳 **Transform Your Yard: Exclusive Summer Offers Inside!**\n2. 🏡 **Is Your Landscape Ready? See 3 Pro Tips.**\n3. **[NAME], Your Personal Landscaping Quote Awaits!**";
        }
        if (lowerQuery.includes('list') || lowerQuery.includes('performance')) {
            return "Your 'test360marco' list has 5 active contacts and a 0% open rate last week. I recommend verifying the domain health and checking for bouncebacks.";
        }
        if (lowerQuery.includes('campaign idea')) {
            return "Try a 'Seasonal Maintenance Sequence':\nEmail 1: Early-Bird Discount on Spring Cleanup (Urgency)\nEmail 2: 3 Low-Cost Ways to Boost Curb Appeal (Value)\nEmail 3: Customer Showcase Photos (Social Proof)";
        }
        return "That's a great question! I'm still learning. Try asking me to 'draft subject lines' or give 'campaign ideas'!";
    };

    return (
        <>
            {/* Floating Button */}
            <button className="floating-ai-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✖️' : '🧠 AI'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="ai-chatbot-window">
                    <div className="chatbot-header">
                        AI Strategist (Online)
                        <button onClick={() => setIsOpen(false)}>✖️</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-bubble message-${msg.sender.toLowerCase()}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <form className="chatbot-input-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask the AI Strategist a question..."
                        />
                        <Button type="submit" style={{padding: '8px 12px'}}>
                            Send
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default AIChatbot;