import React, { useState, useEffect } from "react";
import { Cookie } from "../../components/cookies/index";
import { WGame } from "../../components/game/gameFunction";

export default function Game () {

  function changeTilte(name: string) {
    useEffect(() => {
      document.title = `${name}`;
    })
  }
  changeTilte('Wallnom');

  return (
    <>
    <WGame />
    <Cookie />
    </>
  );
}