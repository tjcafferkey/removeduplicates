# removeDuplicates
Function that removes duplicates from an array.

## Install

```bash
npm install removeduplicates
```

## Usage

```javascript
var removeDuplicates = require('removeDuplicates');
```

### Remove duplicate items

```javascript
var tempArray = ["tom", "jack", "jake", "tom"];

var uniqueArray = removeDuplicates(tempArray);
```

uniqueArray will now equal the following

```javascript
["tom", "jack", "jake"];
```

### Remove duplicate objects

Passing in your array of objects as the first parameter, and the key you're checking against as the second parameter. The function will remove any duplicate values based on this key.

```javascript
var tempArray = [
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

var uniqueArray = removeDuplicates(tempArray, 'id');
```

uniqueArray will now equal the following

```javascript
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
];
```