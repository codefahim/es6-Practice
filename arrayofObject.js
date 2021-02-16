const people = [{
    name: 'abdullah',
    id: 01,
    cost: 250
}, {
    name: 'fahim',
    id: 2,
    cost: 260
}, {
    name: 'fahima',
    id: 3,
    cost: 280
}, {
    name: 'fahhim',
    id: 4,
    cost: 200
}, {
    name: 'ffahim',
    id: 5,
    cost: 360
}, {
    name: 'fahiim',
    id: 6,
    cost: 2600
}];


// map and forEach 
// const result = people.map(element => element.id);
// const result2 = people.map(element => { return element.id });
// console.log(result2);
// people.forEach(element => console.log(element.id));

// map and forEach


// filter and map and find
// const lowCost = people.filter(cost => cost.cost >= 240);
// console.log(lowCost);
// const lowCost2 = people.map(cost => cost.cost >= 240);
// console.log(lowCost2);
// const lowCost3 = people.find(cost => cost.cost >= 240);
// console.log(lowCost3);

// filter and map and find

// remove a object by filter 

const removeByFilter = people.filter(cost => cost.id != 3);
console.log(removeByFilter);


// find some one by find method

const findName = people.find(name => name.name === 'fahim');
console.log(findName);