// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { _200_formatJSONResponse, _400_formatJSONResponse } from '@libs/apiGateway';
import { Handler } from 'aws-lambda';
import { middyfy } from '@libs/lambda';
import { DynameDb } from '../../common/dynamo.class';

// import schema from './schema';

const createRecord: Handler = async (event) => {
    try {
        let record = await new DynameDb(process.env.IS_OFFLINE, 'Users').createRecord(event.body);
        return _200_formatJSONResponse({
            New_User: record,
        });
    } catch (e) {
        return _400_formatJSONResponse({
            Error: e,
        });
    }

}

export const main = middyfy(createRecord);
