// Check if there is existing data in localStorage
let guestHouses = JSON.parse(localStorage.getItem('guestHouses')) || [];

// Function to save guest house data
function saveGuestHouse() {
    const guestHouse = {
        name: document.getElementById('name').value,
        location: document.getElementById('location').value,
        costPerNight: parseFloat(document.getElementById('costPerNight').value),
        acCostPerNight: parseFloat(document.getElementById('acCostPerNight').value),
        truckCostPerKm: parseFloat(document.getElementById('truckCostPerKm').value),
        carCostPerKm: parseFloat(document.getElementById('carCostPerKm').value),
        motorbikeCostPerKm: parseFloat(document.getElementById('motorbikeCostPerKm').value),
    };

    // Add the new guest house to the array
    guestHouses.push(guestHouse);

    // Save the array to localStorage
    localStorage.setItem('guestHouses', JSON.stringify(guestHouses));

    // Update the guest houses list
    updateGuestHousesList();

    // Clear the form
    document.getElementById('guestHouseForm').reset();
}

// Function to update the guest houses list
function updateGuestHousesList() {
    const guestHousesList = document.getElementById('guestHousesList');
    guestHousesList.innerHTML = '';

    guestHouses.forEach((guestHouse, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <p><strong>Name:</strong> ${guestHouse.name}</p>
            <p><strong>Location:</strong> ${guestHouse.location}</p>
            <p><strong>Cost per Night:</strong> ${guestHouse.costPerNight}</p>
            <p><strong>AC Cost per Night:</strong> ${guestHouse.acCostPerNight}</p>
            <p><strong>Truck Cost per Km:</strong> ${guestHouse.truckCostPerKm}</p>
            <p><strong>Car Cost per Km:</strong> ${guestHouse.carCostPerKm}</p>
            <p><strong>Motorbike Cost per Km:</strong> ${guestHouse.motorbikeCostPerKm}</p>
            <button onclick="editGuestHouse(${index})">Edit</button>
            <button onclick="deleteGuestHouse(${index})">Delete</button>
        `;
        guestHousesList.appendChild(listItem);
    });
}

// Function to delete a guest house
function deleteGuestHouse(index) {
    guestHouses.splice(index, 1);
    localStorage.setItem('guestHouses', JSON.stringify(guestHouses));
    updateGuestHousesList();
}

// Function to edit a guest house
function editGuestHouse(index) {
    const guestHouse = guestHouses[index];

    // Fill the form with the data of the selected guest house
    document.getElementById('name').value = guestHouse.name;
    document.getElementById('location').value = guestHouse.location;
    document.getElementById('costPerNight').value = guestHouse.costPerNight;
    document.getElementById('acCostPerNight').value = guestHouse.acCostPerNight;
    document.getElementById('truckCostPerKm').value = guestHouse.truckCostPerKm;
    document.getElementById('carCostPerKm').value = guestHouse.carCostPerKm;
    document.getElementById('motorbikeCostPerKm').value = guestHouse.motorbikeCostPerKm;

    // Delete the guest house from the array
    deleteGuestHouse(index);
}
