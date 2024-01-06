import React, { useState, useEffect } from "react";
import { Cookie } from "../components/cookies/index";
import { RWindow } from '../components/register/index';

export default function Register() {

  function changeTilte(name: string) {
    useEffect(() => {
      document.title = `${name}`;
    })
  }
  changeTilte('Wallnom');

  return (
    <>
    <RWindow />
    <Cookie />
    </>
  );
}