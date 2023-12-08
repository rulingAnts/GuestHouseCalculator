// Check if there is existing data in localStorage
let guestHouses = JSON.parse(localStorage.getItem('guestHouses')) || [];

// Populate the dropdown with guest houses
const guestHouseSelect = document.getElementById('guestHouseSelect');
guestHouses.forEach((guestHouse, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = guestHouse.name;
    guestHouseSelect.add(option);
});

// Function to estimate the cost
function estimateCost() {
    const selectedIndex = guestHouseSelect.value;
    
    if (selectedIndex === "") {
        alert("Please select a Guest House.");
        return;
    }

    const selectedGuestHouse = guestHouses[selectedIndex];
    const nights = parseInt(document.getElementById('nights').value);
    const truckKm = parseInt(document.getElementById('truckKm').value);
    const carKm = parseInt(document.getElementById('carKm').value);
    const motorbikeKm = parseInt(document.getElementById('motorbikeKm').value);

    const totalCost = (nights * selectedGuestHouse.costPerNight) +
                      (nights * selectedGuestHouse.acCostPerNight) +
                      (truckKm * selectedGuestHouse.truckCostPerKm) +
                      (carKm * selectedGuestHouse.carCostPerKm) +
                      (motorbikeKm * selectedGuestHouse.motorbikeCostPerKm);

    // Display the estimated cost
    const estimatedCostDiv = document.getElementById('estimatedCost');
    estimatedCostDiv.innerHTML = `<p>Estimated Total Cost: $${totalCost}</p>`;
}
