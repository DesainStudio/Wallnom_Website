import { useEffect } from "react";
import { Header } from '../components/header/header';

export default function Website() {

  function changeTilte(name: string) {
    useEffect(() => {
      document.title = `${name}`;
    })
  }
  changeTilte('Wallnom');

  return (
    <>
    <Header />
    </>
  );
}