import React, { useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';

const retellWebClient = new RetellWebClient();

const AIReceptionist = () => {
  const [isCalling, setIsCalling] = useState(false);

 const toggleConversation = async () => {
  if (isCalling) {
    retellWebClient.stopCall();
    setIsCalling(false);
  } else {
    try {
      // 1. Get the token from your backend
      const response = await fetch('/api/register-call', { method: 'POST' });
      const data = await response.json();
      
      // 2. Start the call using the dynamic token
      if (data.access_token) {
        await retellWebClient.startCall({
          accessToken: data.access_token,
        });
        setIsCalling(true);
      }
    } catch (err) {
      console.error("Failed to start AI call:", err);
    }
  }
};

  return (
    <div className="ai-assistant-link" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
      <button 
        onClick={toggleConversation}
        className="ac_btn" // Using your existing button style
        style={{ borderRadius: '50%', width: '40px', height: '40px', padding: '0' }}
      >
        {isCalling ? '📴' : '🤖'}
      </button>
    </div>
  );
};

export default AIReceptionist;