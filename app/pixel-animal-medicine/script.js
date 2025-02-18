// Array of animal objects
const animals = [
  {
    name: "Cat",
    image: "assets/cat.png",
    medicine: "Cats are sensitive to aspirin. Always consult a vet for proper medication."
  },
  {
    name: "Dog",
    image: "assets/dog.png",
    medicine: "Dogs can take certain painkillers, but dosage must be carefully monitored."
  },
  {
    name: "Rabbit",
    image: "assets/rabbit.png",
    medicine: "Rabbits require specialized care. Never give them human medications."
  }
];

// Function to handle button click
function drawCard() {
  const animalImageContainer = document.getElementById("animal-image");
  const medicineSummaryContainer = document.getElementById("medicine-summary");

  // Randomly select an animal
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  // Update the DOM
  animalImageContainer.innerHTML = `<img src="${randomAnimal.image}" alt="${randomAnimal.name}" title="${randomAnimal.name}">`;
  medicineSummaryContainer.textContent = randomAnimal.medicine;

  // Handle missing image
  const imgElement = animalImageContainer.querySelector("img");
  imgElement.onerror = () => {
    animalImageContainer.innerHTML = `<p>Error: Image not found</p>`;
  };
}

// Add event listener to the button
document.getElementById("draw-card-button").addEventListener("click", drawCard);

// Initial draw to display a card when the page loads
drawCard();