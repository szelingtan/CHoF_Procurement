// Cost calculation functions
function calculateTotalCost(caterer, guestCount) {
    if (guestCount < caterer.minPax) {
        guestCount = caterer.minPax;
    }
    const foodCost = caterer.pricePerPerson * guestCount;
    
    // Special rule for Liang Food Tea Reception B: waive delivery if food > $1000 before GST
    let deliveryCharge = caterer.deliveryCharge;
    if (caterer.name === "Liang Food Caterer Tea Reception B") {
        // Assuming price includes GST (7%), so food before GST = foodCost / 1.07
        const foodCostBeforeGST = foodCost / 1.07;
        if (foodCostBeforeGST > 1000) {
            deliveryCharge = 0;
        }
    }
    
    const totalCost = foodCost + deliveryCharge;
    return { foodCost, totalCost, adjustedGuestCount: guestCount, deliveryCharge };
}

function renderCaterers(caterers, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    caterers.forEach(caterer => {
        const costs = calculateTotalCost(caterer, currentGuestCount);
        const isMinimumAdjusted = costs.adjustedGuestCount > currentGuestCount;
        
        const card = document.createElement('div');
        card.className = 'caterer-card';
        
        card.innerHTML = `
            <div class="caterer-name">
                ${caterer.name}
                <span style="font-size: 0.7em; background: #e2e8f0; padding: 4px 8px; border-radius: 10px; color: #4a5568;">
                    Min ${caterer.minPax} pax
                </span>
            </div>
            
            <div class="price-badge">$${caterer.pricePerPerson.toFixed(2)} per person</div>
            
            ${isMinimumAdjusted ? `
                <div class="warning">
                    ⚠️ Using minimum ${caterer.minPax} guests (you entered ${currentGuestCount})
                </div>
            ` : ''}
            
            <div class="menu-highlights">
                ${Object.entries(caterer.highlights).map(([category, items]) => `
                    <div class="menu-category">
                        <strong>${category}:</strong>
                        <div class="menu-items">${items}</div>
                    </div>
                `).join('')}
            </div>
            
            <ul class="features-list">
                ${caterer.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid #e2e8f0;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>Food Cost (${costs.adjustedGuestCount} pax):</span>
                    <strong>$${costs.foodCost.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>Delivery Charge:</span>
                    <strong>$${costs.deliveryCharge.toFixed(2)}</strong>
                </div>
            </div>
            
            <div class="total-cost">
                Total Cost: $${costs.totalCost.toFixed(2)}
            </div>
            
            ${caterer.note ? `
                <div class="budget-alert">
                    💡 <strong>Note:</strong> ${caterer.note}
                </div>
            ` : ''}
        `;
        
        container.appendChild(card);
    });
}

function updateRecommendations() {
    // Calculate best options
    const lunchCosts = lunchCaterers.map(caterer => ({
        ...caterer,
        ...calculateTotalCost(caterer, currentGuestCount)
    }));
    
    const teabreakCosts = teabreakCaterers.map(caterer => ({
        ...caterer,
        ...calculateTotalCost(caterer, currentGuestCount)
    }));

    const bestLunch = lunchCosts.reduce((best, current) => 
        current.totalCost < best.totalCost ? current : best
    );

    const bestTeabreak = teabreakCosts.reduce((best, current) => 
        current.totalCost < best.totalCost ? current : best
    );

    const totalBestCost = bestLunch.totalCost + bestTeabreak.totalCost;

    const recommendationsHtml = `
        <h3>💡 Smart Recommendations for ${currentGuestCount} Guests</h3>
        
        <div class="recommendation-item">
            <strong>Best Value Lunch:</strong> ${bestLunch.name} - $${bestLunch.totalCost.toFixed(2)}
        </div>
        
        <div class="recommendation-item">
            <strong>Best Value Tea Break:</strong> ${bestTeabreak.name} - $${bestTeabreak.totalCost.toFixed(2)}
        </div>
        
        <div class="recommendation-item">
            <strong>Total Recommended Cost:</strong> $${totalBestCost.toFixed(2)} for both events
        </div>
    `;

    document.getElementById('recommendations').innerHTML = recommendationsHtml;
}
