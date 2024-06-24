import { data } from '../../fixtures/mockStampDuty';

export const mockStampDutyResponse = async () => {
    const mockStampDutyGraphQL = await browser.mock('**' + '/home-loan-calc-bff', { method: 'post' });
	mockStampDutyGraphQL.respond(
		{
			data,
		},
		{
			statusCode: 200,
			fetchResponse: false,
		}
	);
};
