import React, { useState } from 'react';
import './index.css';

export function Account() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links (Navigieren)

    // Beispiel-URL für einen Server-Endpunkt
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // Anfrage an den Server senden
    try {
      const response = await fetch(apiUrl, {
        method: 'POST', // Beispiel: Verwende POST anstelle von GET
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Überprüfen, ob die Anfrage erfolgreich war (Statuscode 200-299)
      if (response.ok) {
        const data = await response.json();
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
