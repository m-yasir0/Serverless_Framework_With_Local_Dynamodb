import { createRecord } from "@functions/createUser/handler";
import mock from './mock';
test(
    'Entered Correct Body. Event should return 200, with a body Object', async () => {
        expect((await createRecord(mock, null, null)).statusCode).toBe(200)
    }
)