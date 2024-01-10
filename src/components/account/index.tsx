import React, { useEffect, useState } from 'react';
import './index.css';

export function Account() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeUsername, checkusername] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
        console.log(typeUsername)
    }, 1000);

    return () => clearTimeout(delay)
  }, [typeUsername])

  const handleFormSubmit = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
  
    const apiUrl = `http://37.221.93.114:25299/getaccount?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    const apiUrlUsername = `http://37.221.93.114:25299/getaccount?username=${encodeURIComponent(username)}`; // &email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.text();
        if (data === 'next') {
          console.log('erfolg')
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
            <input autoFocus autoComplete='off' type="text" value={username} onChange={(e) => setUsername(e.target.value) } onChangeCapture={(e) => checkusername(e.target.value) } />
          </div>
          <div className="input">
            <label>Email:</label>
            <input autoFocus autoComplete='off' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label>Password:</label>
            <input autoFocus autoComplete='off' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <a id='submit' href="#" onClick={handleFormSubmit}>
            Submit
          </a>
        </div>
      </div>
    </div>
  );
}
