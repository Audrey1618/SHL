let PropertyDetails = require('../pageobjects/SHL/PropertyDetailsPage')
let AdditionalSetupCost = require('../pageobjects/SHL/AdditionalSetupCost')

describe('Test SHL with DOM', () => {
    before(() => {
        console.log('========================== TEST SUITES START');
       
    })
    beforeEach(() => {
        browser.url('')
      
        console.log('================= TEST CASE STARTS');
    })

    afterEach(() => {
        console.log('================= TEST CASE ENDS');
    })

    after(() => {
        console.log('========================== TEST SUITES ENDS');
    })

    it('Should input property price', async () => {
        console.log('====== TC001');
        // 1. Input property price - PASSED
        await PropertyDetails.waitPropertyPriceForDisplayed();
        await PropertyDetails.inputPropertyPrice('88888');
        await expect(PropertyDetails.propertyPrice).toHaveValue('88888');
        
        // 2. Choose Property Use

        // 3. Choose First home buyer

        // 4. Choose Property type

        // 5. Choose Add other setup costs

        // 6. Input setup costs (if choose Add other costs)

      
    });
});