import React, { useEffect, useState } from 'react';

export function WGame () {
    const [clickedFields, setClickedFields] = useState<Record<number, { color: string, gamer: { id: number, username: string } }>>({});
    
    useEffect(() => {
        const fieldElements = document.getElementsByClassName('place');
        async function handlePlaceClick(event: Event): void {
            
        }
    });
};