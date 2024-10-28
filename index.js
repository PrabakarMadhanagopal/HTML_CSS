function fetchData() {
    fetch('https://671f2a561dfc429919842765.mockapi.io/training/v1/status')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            // selectElement.innerHTML = ''; 
            let optionSelect = document.querySelector('#tempOptions');

            data.forEach(status => {
                const newElement = document.createElement('option');
                newElement.value = status.id;
                newElement.textContent = status.name; 

            
                optionSelect.appendChild(newElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

}

fetchData()

// Define the API URL
const apiUrl = 'https://671f2a561dfc429919842765.mockapi.io/training/v1/content';

// Fetch data from API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Call a function to create and append a table
        createTable(data);
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));

// Function to create and append a table
function createTable(data) {
    const container = document.getElementById('table-container');
    
    // Create the table and the header row
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Define the column headers (adjust as needed)
    const headers = ['ID', 'Title', 'avatar', 'created by', 'created at']; // Add relevant headers

    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    // Add rows based on data
    data.forEach(item => {
        const row = document.createElement('tr');

        // Create cells for each column in the row
        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = item.title;
        row.appendChild(titleCell);

        const bodyCell = document.createElement('td');
        const avatar = document.createElement('img');
        bodyCell.textContent = item.avatar;
        row.appendChild(bodyCell);

        const userIdCell = document.createElement('td');
        userIdCell.textContent = item.createdBy;
        row.appendChild(userIdCell);

        const CreatedAt = document.createElement('td');
        CreatedAt.textContent = item.createdAt;
        row.appendChild(CreatedAt);-

        // Append the row to the table
        table.appendChild(row);
    });

    // Append the table to the container
    container.appendChild(table);
}
