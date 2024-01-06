import React, { useState, useEffect } from "react";
import { Header } from '../components/header/header';
import { Cookie } from "../components/cookies/index";
import { AWindow } from "../components/anmelden";

export default function Anmelden() {

  function changeTilte(name: string) {
    useEffect(() => {
      document.title = `${name}`;
    })
  }
  changeTilte('Wallnom');

  return (
    <>
    <AWindow />
    <Cookie />
    </>
  );
}