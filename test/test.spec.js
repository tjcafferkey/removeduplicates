"use strict";
let expect = require("chai").expect;
let assert = require("chai").assert;
let removeDuplicates = require("../lib/index").default;

describe("removeDupicate should filter out duplicate objects from the given array", function() {
    it("should remove the last object", function() {
        let tempArray = [
            {
                id: 1234,
                selected: true,
                otherVal: 'abc'
            },
            {
                id: 5678,
                selected: false,
                otherVal: 'abc'
            },
            {
                id: 1234,
                selected: true,
                otherVal: 'def'
            }
        ];

        let uniqueArray = removeDuplicates(tempArray, "id");

        expect(uniqueArray).to.deep.equal(
            [
                {
                    id: 1234,
                    selected: true,
                    otherVal: 'abc'
                },
                {
                    id: 5678,
                    selected: false,
                    otherVal: 'abc'
                }
            ]
        );
    });

    it("should return false when given an int instead of an array as a first parameter", function() {
        let uniqueArray = removeDuplicates(1, "id");
        expect(uniqueArray).to.equal(false);
    });

    it("should return false when given an int instead of a string as the second parameter", function() {

        let tempArray = [
            {
                id: 1234,
                selected: true,
                otherVal: 'abc'
            },
            {
                id: 5678,
                selected: false,
                otherVal: 'abc'
            },
            {
                id: 1234,
                selected: true,
                otherVal: 'def'
            }
        ];

        let uniqueArray = removeDuplicates(tempArray, 1);
        expect(uniqueArray).to.equal(false);
    });

    it("should return the same array when given an array that has no duplicates", function() {
        let tempArray = [
            {
                id: 1234,
                selected: true,
                otherVal: 'abc'
            },
            {
                id: 5678,
                selected: false,
                otherVal: 'abc'
            },
            {
                id: 12345,
                selected: true,
                otherVal: 'def'
            }
        ];

        let uniqueArray = removeDuplicates(tempArray, "id");
        expect(uniqueArray).to.deep.equal(tempArray);
    });

    it("should not error, but ignore array items that are not objects", function() {
        let tempArray = [
            {
                id: 1234,
                selected: true,
                otherVal: 'abc'
            },
            {
                id: 5678,
                selected: false,
                otherVal: 'abc'
            },
            ["item1", "item2"]
        ];

        let uniqueArray = removeDuplicates(tempArray, "id");
        expect(uniqueArray).to.deep.equal(tempArray);
    });
});