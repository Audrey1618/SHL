describe('SHL assignment', () => {
	it('Should show error message of Property Price', async () => {
		// GET ELEMENTS
		const getPropertyPriceInput = await $('>>>[data-testid="propertyPrice"]');
		const getStateDropdown = await $('>>>[data-testid="stateAndTerritory-testid"]');
		const getStateAndTerritory = await $('>>>[id="dropdown-listbox-stateAndTerritory"');
		const getPropertyUse = await $('>>>[data-testid="propertyUse-testid"]');
		const getFirstHomeBuyer = await $('>>>[data-testid="firstHomeBuyer-testid"]');
		const getPropertyType = await $('>>>[data-testid="propertyType-testid"]');
		const getAddOtherCosts = await $('>>>[data-testid="addOtherCost-testid"]');

		// EXECUTE TESTS
		await browser.url('');
		// 1. input property price
		await getPropertyPriceInput.clearValue();
		await getPropertyPriceInput.setValue('999,999');
		// 2. select state
		await getStateDropdown.click();
		await getStateAndTerritory.$('li:nth-child(4)').click();
		// await expect(getCurrentState).toHaveText('New South Wales');
		// 3. select property use
		await getPropertyUse.$('label:nth-child(1)').click();
		// 4. Select First home buyer
		await getFirstHomeBuyer.$('label:nth-child(2)').click();
		// 5. Select Property type
		await getPropertyType.$('label:nth-child(1)').click();
		// 6. Add other costs
		await getAddOtherCosts.$('label:nth-child(1)').click();
		// await browser.pause(30000);
	});
	it('should verify Estimated Setup Costs', async () => {
		// MOCK GRAPHQL RESPONSE
		// @ts-ignore
		const mockStampDutyGraphQL = await browser.mock('**' + '/home-loan-calc-bff', { method: 'post' });

		const getEstimatedCost = (await $('>>>[data-testid="estimate-cost"]')).$('>>>span');
		const getTableResult = await $('>>>[class^="TableResultWrapper"]');
		const getStampDuty = await getTableResult.$$('>>>dd')[0];
		const getMortageRegistration = await getTableResult.$$('>>>dd')[1];
		const getTransferFee = await getTableResult.$$('>>>dd')[2];
		const getAdditionalCost = await $('>>>[data-testid="additional-cost"]');

		mockStampDutyGraphQL.respond(
			{
				data: {
					getStampDutyDetails: {
						setupCost: '111111',
						costDetails: {
							stampDuty: '40070.00',
							registrationFee: '118.90',
							transferFee: '1851.00',
							otherCosts: null,
							___typename: 'CostDetails',
						},
						__typename: 'StampDutyResponse',
					},
				},
			},
			{
				statusCode: 200,
				fetchResponse: false,
			}
		);

		await browser.url('');

		// Verify the cost is equal to the API response
		await expect(getEstimatedCost).toHaveText('$111,111');
		await expect(getStampDuty).toHaveText('$40,070');
		await expect(getMortageRegistration).toHaveText('$119');
		await expect(getTransferFee).toHaveText('$1,851');
		await expect(getAdditionalCost).not.toBePresent();
	});
});
