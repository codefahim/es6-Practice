// if else shorthand
let money = 51;
let food = money < 40 ? 'birani' : money > 50 ? 'komla' : 'alur borta';
// console.log(food);


// ifElse and value 

// let active = true;
// let addClass = '';
// if (active) {
//     addClass = 'active';
// } else {
//     addClass = 'inactive';
// }
// console.log(addClass);

let addClass = active ? 'active' : 'inactive';
// console.log(addClass);


// function shorthand 2 condition 
let active = true;

const userActive = () => {
    console.log('Active');
}
const userInactive = () => {
    console.log('Inactive');
};
// const user = active ? userActive() : userInactive();

// function shorthand with one condition

// const user = active && userActive(); [when user is active then userActive will run]

// const user = active || userInactive();

// [when user is Inactive then userInactive will run]


// convert string to int


// const number = '45';
// console.log(+number);

// convert int to string


// const number = 45;
// console.log(45 + '');