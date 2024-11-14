// Dati dei viaggi
const travelData = [
    {
        name: "Parigi",
        description: "La città dell'amore e delle luci. Perfetta per una fuga romantica.",
        image: "https://via.placeholder.com/300"
    },
    {
        name: "Roma",
        description: "Storia, arte e cultura in una città antica e moderna.",
        image: "https://via.placeholder.com/300"
    },
    {
        name: "Tokyo",
        description: "La fusione perfetta tra tradizione e modernità.",
        image: "https://via.placeholder.com/300"
    }
];

// Funzione per generare le card HTML
function renderCards() {
    const travelCardsContainer = document.getElementById('travel-cards');
    travelCardsContainer.innerHTML = ''; // Svuota il contenitore delle card

    travelData.forEach(travel => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${travel.image}" alt="${travel.name}">
            <h2>${travel.name}</h2>
            <p>${travel.description}</p>
        `;

        travelCardsContainer.appendChild(card);
    });
}

// Chiama la funzione al caricamento della pagina
document.addEventListener('DOMContentLoaded', renderCards);
