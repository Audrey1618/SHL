// const PROPERTY_PRICE_INPUT = $('>>>[data-testid="propertyPrice"]');
// const STATE_DROPDOWN = $('>>>[data-testid="stateAndTerritory-testid"]');
// const STATE_DROPDOWN_LIST = $('>>>[id="dropdown-listbox-stateAndTerritory"]');
// const PROPERTY_USE_RADIO_BTN = $('>>>[data-testid="propertyUse-testid"]');
// const FIRST_HOME_BUYER_RADIO_BTN = $('>>>[data-testid="firstHomeBuyer-testid"]');
// const PROPERTY_TYPE_RADIO_BTN = $('>>>[data-testid="propertyType-testid"]');
// const ADD_OTHER_COSTS_RADIO_BTN = $('>>>[data-testid="addOtherCost-testid"]');

// const ADD_OTHER_COSTS_NAME_INPUT = $('>>>[data-testid="itemField[0].itemName_testid"]');

// const ADD_OTHER_COSTS_COST_INPUT = $('>>>[data-testid="itemField[0].itemCost"]');

// const ADD_OTHER_COSTS_BTN = $('>>>[id="addOtherCostButton"]');

class PropertyDetails {
	get propertyPrice() {
		return $('>>>[data-testid="propertyPrice"]');
	}

	get dropdownState() {
		return $('>>>[data-testid="stateAndTerritory-testid"]');
	}

	get dropdownListState() {
		return $('>>>[id="dropdown-listbox-stateAndTerritory"]');
	}

	get radioPropertyUse() {
		return $('>>>[data-testid="propertyUse-testid"]');
	}

	get radioFirstHomeBuyer() {
		return $('>>>[data-testid="firstHomeBuyer-testid"]');
	}

	get radioPropertyType() {
		return $('>>>[data-testid="propertyType-testid"]');
	}

	get radioAddOtherCosts() {
		return $('>>>[data-testid="itemField[0].itemCost"]');
	}

	async chooseRadio(radio) {
		await $(`li:nth-child(${radio})`);
		return this;
	}

	async waitPropertyPriceForDisplayed() {
		await this.propertyPrice.waitForDisplayed();
	}

	async inputPropertyPrice(price) {
		await this.propertyPrice.clearValue();
		await this.propertyPrice.setValue(price);
	}

	async chooseState(radio) {
		await this.dropdownState.click();
		await this.dropdownListState.chooseRadio(radio).click();
	}
}

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

module.exports = new PropertyDetails();
module.exports = new AdditionalSetupCost();
