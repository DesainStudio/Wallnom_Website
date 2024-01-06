import React, { useEffect, useState } from 'react';
import './index.css';

export function Account () {
    useEffect(() => {

    })

    return (
        <div id="account">
            <div id="elements">
                <div id="top">
                    <h1>
                        Karkade Account
                    </h1>
                </div>
                <div id="inf">
                    Bitte gebe die benutzer Daten an.
                </div>
                <div id="main">
                    <div className="input">
                        <label>Username:</label>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <label>Email:</label>
                        <input type="email" />
                    </div>
                    <div className="input">
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <a id='submit' href="">Submit</a>
                </div>
            </div>
        </div>
      );
};