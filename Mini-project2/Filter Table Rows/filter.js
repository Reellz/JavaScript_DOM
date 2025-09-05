// Get references to DOM elements
const searchInput = document.querySelector("#search");
const clearBtn = document.querySelector("#clear-btn");
const tableRows = document.querySelectorAll("tbody tr");
const feedback = document.querySelector("#feedback");

// Function to filter table rows based on input
function filterTable() {
  const searchQuery = searchInput.value.toLowerCase().trim();
  let matchCounter = 0;
  const totalRows = tableRows.length;

  for (const row of tableRows) {
    const rowContent = row.textContent.toLowerCase();

    if (rowContent.includes(searchQuery)) {
      row.style.display = "";
      matchCounter++;
    } else {
      row.style.display = "none";
    }
  }

  // Update feedback
  if (matchCounter === 0) {
    feedback.innerText = "No results found";
  } else {
    feedback.innerText = `Showing ${matchCounter} of ${totalRows} results`;
  }
}

// Function to clear search input and show all rows
function clearSearch() {
  searchInput.value = "";

  for (const row of tableRows) {
    row.style.display = "";
  }

  feedback.innerText = `Showing ${tableRows.length} of ${tableRows.length} results`;
}

// Event listeners
searchInput.addEventListener('input', filterTable);
clearBtn.addEventListener('click', clearSearch);
