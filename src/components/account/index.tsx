import React, { useState } from 'react';
import './index.css';

export function Account() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
  
    const apiUrl = `http://37.221.93.114:25299/account?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET', // GET-Anfrage beibehalten
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data === 'next') {
          // ... (dein Code für Cookies setzen)
        }
        console.log('Daten vom Server erhalten:', data);
      } else {
        console.error('Fehler beim Abrufen der Daten:', response.statusText);
      }
    } catch (error) {
      console.error('Fehler beim Senden der Anfrage:', error);
    }
  };

  return (
    <div id="account">
      <div id="elements">
        <div id="top">
          <h1>Karkade Account</h1>
        </div>
        <div id="inf">Bitte gebe die Benutzerdaten an.</div>
        <div id="main">
          <div className="input">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <a id='submit' href="#" onClick={handleFormSubmit}>
            Submit
          </a>
        </div>
      </div>
    </div>
  );
}
