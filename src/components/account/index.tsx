import React, { useState } from 'react';
import './index.css';

export function Account() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links (Navigieren)

    // Beispiel-URL für einen Server-Endpunkt mit GET-Anfrage
    const apiUrl = `http://37.221.93.114:25299/account?username=${username}&email=${email}&password=${password}`;

    // Anfrage an den Server senden
    try {
      const response = await fetch(apiUrl, {
        method: 'GET', // Änderung auf GET
      });

      // Überprüfen, ob die Anfrage erfolgreich war (Statuscode 200-299)
      if (response.ok) {
        const data = await response.json();
        if (data === 'next') {
          const setCookie = (cName: string, cValue: string, expDays: number) => {
            const date = new Date();
            date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
            const expires = "expires=" + date.toUTCString();
            document.cookie = `${cName}=${cValue}; ${expires}; path=/`;
          };
          setCookie("username", username, 30);
          setCookie("email", email, 30);
          setCookie('autoLogin', 'true', 30);
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
