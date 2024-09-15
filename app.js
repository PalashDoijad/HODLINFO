document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('crypto-data');
            tableBody.innerHTML = data.map((row, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${row.platform}</td>
                    <td>${row.lastPrice}</td>
                    <td>${row.buySellPrice}</td>
                    <td>${row.difference}</td>
                    <td>${row.savings}</td>
                </tr>
            `).join('');
        });
});