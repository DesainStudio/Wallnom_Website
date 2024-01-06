import React, { useEffect, useState } from 'react';

export function WGame() {
  const [clickedFields, setClickedFields] = useState<Record<number, { color: string, gamer: { id: number, username: string } }>>({});

  useEffect(() => {
    const fieldElements = document.querySelectorAll('.place');

    function handlePlaceClick(event: Event): void {
      const clickedPlace = event.target as HTMLElement;

      if (!clickedPlace.classList.contains('place')) {
        console.error("Invalid place element");
        return;
      }

      const placeId = parseInt(clickedPlace.id);

      if (!Number.isInteger(placeId)) {
        console.error("Invalid placeId");
        return;
      }

      // Überprüfe, ob das Feld bereits geklickt wurde
      if (clickedFields[placeId]) {
        return;
      }

      // Hier kannst du asynchrone Logik für den Angriff implementieren
      const color = getRandomColor();

      // Speichere die Informationen im State
      setClickedFields((prevClickedFields) => ({
        ...prevClickedFields,
        [placeId]: {
          color: color,
          gamer: { id: placeId, username: 'exampleUsername' }
        }
      }));

      // Ändere die Hintergrundfarbe des geklickten Ortes nicht mehr
      clickedPlace.style.backgroundColor = color;

      // Hier kannst du auch die Logik für den Angriff implementieren
      console.log(`Angriff auf Feld ${field(placeId)}`);
    }

    // Füge Event Listener für jeden Ort hinzu
    fieldElements.forEach((placeElement) => {
      placeElement.addEventListener('click', handlePlaceClick);
    });

    // Entferne Event Listener, wenn die Komponente unmontiert wird
    return () => {
      fieldElements.forEach((placeElement) => {
        placeElement.removeEventListener('click', handlePlaceClick);
      });
    };
  }, [clickedFields]);

  return (
    <div id="game">
      <div id="field">
        <div className="rows">
          <div className="place" id="1">
            <p className="visible">1</p>
            {clickedFields[1] && `1 - ${clickedFields[1].gamer.username}`}
          </div>
          <div className="place" id="2">
            <p className="visible">2</p>
            {clickedFields[2] && `2 - ${clickedFields[2].gamer.username}`}
          </div>
          <div className="place" id="3">
            <p className="visible">3</p>
            {clickedFields[3] && `3 - ${clickedFields[3].gamer.username}`}
          </div>
          {/* Weitere Platz-Elemente hier */}
        </div>
        {/* Weitere Zeilen hier */}
      </div>
    </div>
  );
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function field(id: any): string {
  const number = document.getElementById(`${id}`);
  if (!number) {
    console.error(`Element with id ${id} not found`);
    return 'error';
  }
  return number.textContent || 'error';
}
