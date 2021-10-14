import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { _200_formatJSONResponse, _400_formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { DynameDb } from 'src/modules/dynamo.class';

import schema from './schema';

const getRecordById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        let record = await new DynameDb(process.env.IS_OFFLINE, 'Users').getAllRecords();
        return _200_formatJSONResponse({
            Users: record,
        });
    } catch (e) {
        return _400_formatJSONResponse({
            Error: e,
        });
    }

}

export const main = middyfy(getRecordById);
