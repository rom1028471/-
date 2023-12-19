let addedItems = JSON.parse(localStorage.getItem('addedItems')) || [];
function displayAddedItems() {
  let comparisonTable = document.getElementById("comparison-table");
  comparisonTable.innerHTML = ""; // Clear the table
  let columnNames = ["Image & Name", "Category", "Date", "Architect", "Tech Process", "Core", "Threads", "Clock", "IGP", "TDP", "Price"];
  let headerRow = comparisonTable.insertRow(0);
  columnNames.forEach((columnName, index) => {
  let headerCell = headerRow.insertCell(-1);
  headerCell.textContent = columnName;
  if (index === 0) {
   headerCell.colSpan = 2;
  }
  });
 
  addedItems.forEach((item) => {
    // Insert a row at the end of the table
    let newRow = comparisonTable.insertRow(-1);
    
 
    let imageCell = newRow.insertCell(0);
    imageCell.className = "wide-cell";
    imageCell.colSpan = 2;
    let imageElement = document.createElement("img");
    imageElement.src = item.image;
    imageCell.appendChild(imageElement);

    let nameElement = document.createElement("p");
    nameElement.textContent = item.name;
    imageCell.appendChild(nameElement);



    let deleteButton = document.createElement("button");
   deleteButton.textContent = "Удалить";
   deleteButton.addEventListener("click", function() {
       removeFromComparisonList(item);
   });
   imageCell.appendChild(deleteButton);
 
   let nameCell = newRow.insertCell(1);
   nameCell.textContent = item.name;

   let categoryCell = newRow.insertCell(2);
   categoryCell.textContent = item.category;

   let dateCell = newRow.insertCell(3);
   dateCell.textContent = item.date;

   let architectCell = newRow.insertCell(4);
   architectCell.textContent = item.architect;

   let techprocessCell = newRow.insertCell(5);
   techprocessCell.textContent = item.techprocess;

   let coreCell = newRow.insertCell(6);
   coreCell.textContent = item.core;

   let threadsCell = newRow.insertCell(7);
   threadsCell.textContent = item.threads;

   let clockCell = newRow.insertCell(8);
   clockCell.textContent = item.clock;

   let IGPCell = newRow.insertCell(9);
   IGPCell.textContent = item.IGP;

   let TDPCell = newRow.insertCell(10);
   TDPCell.textContent = item.TDP;

   let priceCell = newRow.insertCell(11);
   priceCell.textContent = item.price + "р";


    
  });
 }

function removeFromComparisonList(item) {
  let index = addedItems.indexOf(item);

  // Удалить 
  if (index > -1) {
      addedItems.splice(index, 1);
  }
  localStorage.setItem('addedItems', JSON.stringify(addedItems));
  displayAddedItems();
}

document.addEventListener("DOMContentLoaded", displayAddedItems);
