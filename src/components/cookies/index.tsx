import React, { useEffect } from "react";
import "./index.css";

export const Cookie: React.FC = () => {
  const acceptCookie = () => {
    const cookieBanner = document.getElementById("accept");
    const blackScreen = document.getElementById('black-screen');

    if (cookieBanner) {
      cookieBanner.style.display = "none";
      blackScreen!.style.display = 'none';
      setCookie("cookie", "true", 30);
    }
  };

  const setCookie = (cName: string, cValue: string, expDays: number) => {
    const date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cName}=${cValue}; ${expires}; path=/`;
  };

  const getCookie = (cName: string) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
  };

  useEffect(() => {

    // Überprüfen Sie, ob der Cookie noch nicht akzeptiert wurde

    if (!getCookie("cookie")) {
      const cookieBanner = document.getElementById("accept");
      const blackScreen = document.getElementById('black-screen');

      if (cookieBanner) {
        cookieBanner.style.display = "block";
        blackScreen!.style.display = 'block';
      }

        // überprüfen der Auto login
        if (!getCookie("autoLogin")) {

            // Setzen der User datas
            setCookie("username", "none", 30);
            setCookie("email", "none", 30);
        }
    }

    const acceptButton = document.querySelector("#acceptCookie");
    acceptButton?.addEventListener("click", acceptCookie);

    return () => {
      acceptButton?.removeEventListener("click", acceptCookie);
    };
  }, []);

  return (
    <div id="cookies">
      <div id="black-screen"></div>
      <div id="accept">
        <p>
          This website uses cookies to ensure you get the best experience on our
          website. <a href="#">More Info</a>
        </p>
        <a id="acceptCookie">That's fine!</a>
      </div>
    </div>
  );
};
