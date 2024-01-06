import './index.css';

export function AWindow () {

  return (
    <div className='window'>
      <div id="top">
        <h1>
          Wallnom Login
        </h1><br />
        <p>
          Erstelle jetzt deinen eigenen Wallnom Account!
        </p>
      </div>
      <div id="main">
        <div className="feld">
          <p>
            Email:
          </p>
          <input type="email" placeholder='Hier eingeben.' />
        </div>
        <div className="feld">
          <p>
            Passwort:
          </p>
          <input type="password" placeholder='Hier eingeben.'/>
        </div>
      </div>
      <div id="footer">
        <div id="agb">
          <input type="checkbox" name="agb" /> Angemeldet bleiben.
        </div>
        <a id='submitButton'>Account erstellen</a>
      </div>
    </div>
  )
}