class AdditionalSetupCost {
	get inputItemName() {
		return $('>>>[data-testid="itemField[0].itemName_testid"]');
	}

	get inputCost() {
		return $('>>>[data-testid="itemField[0].itemCost"]');
	}

	get btnAddAnotherCost() {
		return $('>>>[id="addOtherCostButton"]');
	}
}

module.exports = new AdditionalSetupCost()