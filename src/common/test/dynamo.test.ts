import { DynameDb } from "../dynamo.class";
// import * as AWS from 'aws-sdk';
describe("Test dynamodb class", () => {
    let obj = new DynameDb(true, 'table');
    it("Obj tobe instance of DynamoDb", () => {
        expect(obj instanceof DynameDb).toBe(true);
    });
    it("Obj instance should have getter method to get dynamodocument instance", () => {
        expect(typeof obj.getDynamoInstance()).toBe("object")
    })
})