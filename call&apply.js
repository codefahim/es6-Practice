const monthlyCost = {
        carPrice: 70000,
        mobilePrice: 15000,
        homeRent: 6250,
        totalCost: function() {
            const income = 200000;
            const save = income - (this.carPrice + this.mobilePrice + this.homeRent);
            return save;
        }
    }
    // console.log(monthlyCost.totalCost());

const yearlyCost = {
    homeRent: 2300 * 12,
    mobileBill: 8000 * 12,
    home: 0,
    food: 5000 * 12,
    totalSave: 0,
    saveMoney: function(yearlyIncome) {
        this.totalSave = yearlyIncome - (this.homeRent + this.mobileBill + this.home + this.food);
        return this.totalSave;
    }
}
yearlyCost.saveMoney(240000);
// console.log(yearlyCost.totalSave);