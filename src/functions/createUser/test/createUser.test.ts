import { main } from "@functions/createUser/handler";
import mock from './mock';
test(
    'Entered Correct Body. Event should return 200, with a body string', async () => {
        let response: any = await main(mock, null, null);
        expect(response.statusCode).toBe(200);
        expect(typeof response.body).toBe('string')
    }
)