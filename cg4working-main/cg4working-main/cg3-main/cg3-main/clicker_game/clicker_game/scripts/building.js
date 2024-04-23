// -Start of code provided by Steven Boyd-

class Building {
    constructor(buildingName, baseCps, baseCost, buttonId, buttonNumber) {
        this.amountOwned = 0;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cps = 0;
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.buildingName = buildingName;

        // -End of code provided by Steven Boyd-

        this.clicksPerSecond = baseCps;
        this.buttonNumber = buttonNumber;
    }
    
    // Triggered when the player buys a Building
    purchase() {
        hidePurchaseEnergyText();
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.baseCost * 1.15 ** this.amountOwned);
        clicksps += this.clicksPerSecond;
        factNumber = this.buttonNumber;
        updateFactNumber(factNumber);
        updateFactAbout(this.buttonNumber);
    }

    //-Start of code provided by Steven Boyd-

    buttonState() {
        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }
        document.getElementById(this.buttonId).innerHTML =
            'Buy ' +
            this.buildingName +
            ' (Cost: ' +
            Math.ceil(this.cost).toLocaleString() +
            ') <br> Adds ' +
            (this.baseCps * (1000 / tickRate)).toLocaleString() +
            ' Per Second <br> [Owned: ' +
            this.amountOwned +
            ']';

            //-End of code provided by Steven Boyd-
    }
}
