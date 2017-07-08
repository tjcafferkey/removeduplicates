export default function removeDuplicates(arr, key) {
    if (!(arr instanceof Array) || typeof key !== 'string' ) {
        return false;
    }

    return arr.filter((obj, index, arr) => {
        return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === index;
    });
}