import * as AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

export class DynameDb {
    client: any;
    table: string;
    constructor(IS_OFFLINE: string | boolean, table: string) {
        if (IS_OFFLINE == true) {
            let options = {
                region: 'localhost',
                endpoint: 'http://localhost:8000'
            }
            this.client = new AWS.DynamoDB.DocumentClient(options);
        }
        else {
            this.client = new AWS.DynamoDB.DocumentClient();
        }

        // set table
        this.table = table;
    }

    getAllRecords() {
        let body = this.client.scan({ TableName: this.table }).promise();
        return body;
    }
    getRecordById(id: string) {
        let record = this.client.get({
            TableName: this.table, Key: {
                id: id
            }
        }).promise();
        return record;
    }
    createRecord(body: { [key: string]: any }) {
        const { name, address, phone } = body;
        const id = uuid();
        let record = this.client.put({
            TableName: this.table, Item: {
                id: id,
                name: name,
                address: address,
                phone: phone
            }
        }).promise();
        return record;
    }
    deleteRecordById(id: string) {
        let record = this.client.delete({
            TableName: this.table, Key: {
                id: id
            }
        }).promise();
        return record;
    }
}