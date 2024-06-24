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
        
        // 3. Choose Property Use
        await PropertyDetails.chooseProperyUseByIndex(1);

        // 4. Choose First home buyer

        // 5. Choose Property type

        // 6. Choose Add other setup costs

        // 7. Input setup costs (if choose Add other costs)

        // 8. Mock GraphQL response
        await mockStampDutyResponse()

        // 9. Expect
        await browser.url('');

        // 10. Verify the cost is equal to the API response
		await expect(EstimatedResults.estimatedCost).toHaveText('$111,111');
		await expect(EstimatedResults.stampDuty).toHaveText('$40,070');
		await expect(EstimatedResults.mortageRegistration).toHaveText('$119');
		await expect(EstimatedResults.transferFee).toHaveText('$1,851');
		await expect(EstimatedResults.additionalCost).not.toBePresent();

    });
});