export const markStartEnd = () => {
	before(() => {
		console.log('========================== TEST SUITES START');
    });
    
	beforeEach(() => {
		browser.url('');

		console.log('================= TEST CASE STARTS');
	});

	afterEach(() => {
		console.log('================= TEST CASE ENDS');
	});

	after(() => {
		console.log('========================== TEST SUITES ENDS');
	});
};
