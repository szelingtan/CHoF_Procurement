// Chart variables
let lunchChart, teabreakChart;

function updateCharts() {
    const lunchData = lunchCaterers.map(caterer => {
        const costs = calculateTotalCost(caterer, currentGuestCount);
        return {
            name: caterer.name.split(' ')[0] + ' ' + caterer.name.split(' ')[1],
            cost: costs.totalCost
        };
    });
    
    const teabreakData = teabreakCaterers.map(caterer => {
        const costs = calculateTotalCost(caterer, currentGuestCount);
        return {
            name: caterer.name.split(' ')[0] + ' ' + caterer.name.split(' ')[1],
            cost: costs.totalCost
        };
    });

    // Destroy existing charts
    if (lunchChart) lunchChart.destroy();
    if (teabreakChart) teabreakChart.destroy();

    // Create new charts
    const lunchCtx = document.getElementById('lunchChart').getContext('2d');
    lunchChart = new Chart(lunchCtx, {
        type: 'bar',
        data: {
            labels: lunchData.map(d => d.name),
            datasets: [{
                label: 'Total Cost ($)',
                data: lunchData.map(d => d.cost),
                backgroundColor: [
                    'rgba(147, 197, 253, 0.8)',
                    'rgba(167, 243, 208, 0.8)',
                    'rgba(253, 186, 116, 0.8)'
                ],
                borderColor: [
                    'rgba(147, 197, 253, 1)',
                    'rgba(167, 243, 208, 1)',
                    'rgba(253, 186, 116, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cost ($)'
                    }
                }
            }
        }
    });

    const teabreakCtx = document.getElementById('teabreakChart').getContext('2d');
    teabreakChart = new Chart(teabreakCtx, {
        type: 'bar',
        data: {
            labels: teabreakData.map(d => d.name),
            datasets: [{
                label: 'Total Cost ($)',
                data: teabreakData.map(d => d.cost),
                backgroundColor: [
                    'rgba(153, 246, 228, 0.8)',
                    'rgba(153, 246, 228, 0.8)',
                    'rgba(153, 246, 228, 0.8)'
                ],
                borderColor: [
                    'rgba(153, 246, 228, 1)',
                    'rgba(153, 246, 228, 1)',
                    'rgba(153, 246, 228, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cost ($)'
                    }
                }
            }
        }
    });
}
