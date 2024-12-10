import {listOne, listTwo} from "./input.ts";

const sortFn = (a: number, b: number): number => (a - b);

const sortedListOne = listOne.sort(sortFn);
const sortedListTwo = listTwo.sort(sortFn);
let totalDistance: number = 0;

for (const index in sortedListOne) {
    if (sortedListOne[index] >= sortedListTwo[index]) {
        totalDistance += (sortedListOne[index] - sortedListTwo[index]);
    } else {
        totalDistance += (sortedListTwo[index] - sortedListOne[index]);
    }
}

document.querySelector('#app').innerHTML = `The total distance: ${totalDistance}`;
