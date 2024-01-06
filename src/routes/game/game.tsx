import React, { useState, useEffect } from "react";
import { Cookie } from "../../components/cookies/index";

export default function Game () {

  function changeTilte(name: string) {
    useEffect(() => {
      document.title = `${name}`;
    })
  }
  changeTilte('Wallnom');

  return (
    <>
    <Cookie />
    </>
  );
}