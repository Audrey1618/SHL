let PropertyDetails = require('../pageobjects/SHL/PropertyDetailsPage')
let AdditionalSetupCost = require('../pageobjects/SHL/AdditionalSetupCost')
let EstimatedResults = require('../pageobjects/SHL/EstimatedResultsPage')
import { mockStampDutyResponse } from '../../../src/utils/stampDuty-utils';
import { markStartEnd } from '../../../src/utils/markStartEnd-utils';

describe('Test SHL with DOM', () => {
    markStartEnd()

    it('Should return correct estimated costs', async () => {
        console.log('====== TC001');
		// const mockStampDutyGraphQL = await browser.mock('**' + '/home-loan-calc-bff', { method: 'post' });

        // 1. Input property price - PASSED
        await PropertyDetails.waitPropertyPriceForDisplayed();
        await PropertyDetails.inputPropertyPrice('88888');
        // await expect(PropertyDetails.propertyPrice).toHaveValue('88888');
        
        // 2. Choose State/Territory
        await PropertyDetails.chooseStateAndTerritory(1);
        
        // 3. Choose Property Use
        await PropertyDetails.chooseProperyUse(1);

        // 4. Choose First home buyer
        await PropertyDetails.chooseFirstHomeBuyer(1);

        // 5. Choose Property type
        await PropertyDetails.choosePropertyType(1);

        // 6. Add other setup costs
        await PropertyDetails.radioAddOtherCosts(0)
        await PropertyDetails.inputAdditionalCostsInfo(0, 'Hello', 7000000)


        // 7. Mock GraphQL response
        await mockStampDutyResponse()

        // 7. Expect
        await browser.url('');

        // 10. Verify the cost is equal to the API response
		await expect(EstimatedResults.estimatedCost).toHaveText('$111,111');
		await expect(EstimatedResults.stampDuty).toHaveText('$40,070');
		await expect(EstimatedResults.mortageRegistration).toHaveText('$119');
		await expect(EstimatedResults.transferFee).toHaveText('$1,851');
		await expect(EstimatedResults.additionalCost).not.toBePresent();

    });
});