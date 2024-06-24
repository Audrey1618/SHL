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

	inputAdditionalItemName(num) {
		return $(`>>>[data-testid="itemField[${num}].itemName_testid"]`);
	}

	inputAdditionalCost(num) {
		$(`>>>[data-testid="itemField[${num}].itemCost"]`);
		return this;
	}

	get btnAddAnotherCost() {
		return $('>>>[id="addOtherCostButton"]');
	}

	async radioAddOtherCosts(number) {
		await $(`>>>[data-testid="itemField[${number}].itemCost"]`);
		return this;
	}

	async waitPropertyPriceForDisplayed() {
		await this.propertyPrice.waitForDisplayed();
	}

	async inputPropertyPrice(price) {
		await this.propertyPrice.clearValue();
		await this.propertyPrice.setValue(price);
	}

	async chooseStateAndTerritory(num) {
		await this.dropdownListState.$(`li:nth-child(${num})`).click();
		return this;
	}

	async chooseProperyUse(num) {
		await this.radioPropertyUse.$(`label:nth-child(${num})`).click();
		return this;
	}

	async chooseFirstHomeBuyer(num) {
		await this.radioFirstHomeBuyer.$(`label:nth-child(${num})`).click();
		return this;
	}

	async choosePropertyType(num) {
		await this.radioPropertyType.$(`label:nth-child(${num})`).click();
		return this;
	}

	async inputAdditionalCostsInfo(num, name, price) {
		await this.inputAdditionalItemName(num).setValue(name);
		await this.inputAdditionalCost(num).setValue(price);
	}
}

module.exports = new PropertyDetails();
