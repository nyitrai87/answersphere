
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);


    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {

    // Make a request to the ChatGPT API with the user input
        const response = await axios.post(
         'https://api.openai.com/v1/chat/completions',
        {
          messages: [
             { role: 'system', content: 'You are a helpful assistant.' },
             { role: 'user', content: input },
             ],

         },

         {
          headers: {
             'Content-Type': 'application/json',
             Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
         }
        );

     // Update the conversation history with the response from ChatGPT
        setMessages([...messages, { role: 'assistant', content: response.data.choices[0].message.content }]);

     // Clear the input field
     setInput('');

  };


  return (

    <div>
     <div>
         {messages.map((message, index) => (

          <div key={index} className={message.role}>

            {message.content}

          </div>
         ))}
     </div>
     <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
     </div>

    </div>
  );

};


export default Chat;