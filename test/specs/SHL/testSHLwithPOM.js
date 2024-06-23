let PropertyDetails = require('../pageobjects/SHL/PropertyDetailsPage')

describe('Test SHL with DOM', () => {
    before(() => {
        browser.url('')
    })

    it('Should input property price', async () => {
        await PropertyDetails.waitPropertyPriceForDisplayed();
        await PropertyDetails.inputPropertyPrice('88888');
        await expect(PropertyDetails.propertyPrice).toHaveValue('88888');
        // browser.pause(30000)
    });
});