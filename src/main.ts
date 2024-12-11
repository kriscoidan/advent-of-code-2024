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

let similarityScore: number = 0;

for (const i in listOne) {
    const listOneNumber: number = listOne[i];
    let appearances: number = 0;

    for (const j in listTwo) {
        if (listTwo[j] === listOneNumber) {
            appearances++;
        }
    }

    similarityScore += (listOneNumber * appearances);
}

document.querySelector('#app').innerHTML = `The total distance: ${totalDistance}`;
document.querySelector('#app').innerHTML = `<br />Similarity score: ${similarityScore}`;
