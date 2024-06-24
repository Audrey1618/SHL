// const getEstimatedCost = (await $('>>>[data-testid="estimate-cost"]')).$('>>>span');
// const getTableResult = await $('>>>[class^="TableResultWrapper"]');
// const getStampDuty = await getTableResult.$$('>>>dd')[0];
// const getMortageRegistration = await getTableResult.$$('>>>dd')[1];
// const getTransferFee = await getTableResult.$$('>>>dd')[2];
// const getAdditionalCost = await $('>>>[data-testid="additional-cost"]');

class EstimatedResults {
    get estimatedCost() {
        return $('>>>[data-testid="estimate-cost"]').$('>>>span');
    }

    get tableResults() {
        return $('>>>[class^="TableResultWrapper"]');
    }

    get stampDuty() {
        return this.tableResults.$$('>>>dd')[0];
    }

    get mortageRegistration() {
        return this.tableResults.$$('>>>dd')[1];
    }

    get transferFee() {
        return this.tableResults.$$('>>>dd')[2];
    }

    get additionalCost() {
        return $('>>>[data-testid="additional-cost"]')
    }


    
}

module.exports = new EstimatedResults();
