import "../index.css";
import { IMain } from "./main";

export function Top() {
  return (
    <div id="top">
      <div id="top-container">
        <div id="cMain">
          <div id="name">
            <section>
              <p className="row">
                <h1>Wallnom</h1>
                <h3>, erstellt von Rene Hellmuth</h3>
              </p>
              <br />
              <section>
                <p>
                  <h4>
                    Werde jetzt ein Mitglied und sicher dir schnell die Alpha abzeichen!
                  </h4>
                </p>
                <br />
                <a id="bigger">Anmelden</a>
              </section>
            </section>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-lock"
          width="1200px"
          height="1200px"
          viewBox= "-1 2 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path strokeWidth={0.8} d="M1 14v2 0 0 0 6 +1h14a 2 0 0 1 2" />
          <path strokeWidth={0.8} d="M15 19v0 0 0 0 4 -9h-14a 2 0 0 1 2" />
          <path strokeWidth="1" d="M16 24.5h-16a10 2 0 0 1 2 0" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-code svg-margin"
          width="400"
          height="400"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M 0h100v100H0z" fill="none" />
          <path d="M5 8l-4 4l4 4" />
          <path d="M15 8l4 4l-4 4" />
          <path d="M12 4l-4 16" />
        </svg>
      </div>
      <>
        <IMain />
      </>
    </div>
  );
}
