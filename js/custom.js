// Custom JavaScript document.addEventListener('DOMContentLoaded', function() { console.log('Custom JS loaded'); // Example: Add event listener to table rows const rows = document.querySelectorAll('#productTable tbody tr'); rows.forEach(row => { row.addEventListener('click', function() { alert('Row clicked: ' + this.cells[1].innerText); }); }); });