export default function removeDuplicates(arr, key) {
    return arr.filter((obj, index, arr) => {
        return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === index;
    });
}