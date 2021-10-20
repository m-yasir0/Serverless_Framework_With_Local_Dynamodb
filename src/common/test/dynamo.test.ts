import { DynameDb } from "../dynamo.class";
// import * as AWS from 'aws-sdk';
describe("Test dynamodb class", () => {
    let obj = new DynameDb(true, 'table');
    it("Obj tobe instance of DynamoDb", () => {
        expect(obj instanceof DynameDb).toBe(true);
    });
    it("Obj should have dynamodocument client instance", () => {
        expect(typeof obj.getDynamoInstance()).toBe("object")
    })
})