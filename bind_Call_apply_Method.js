const gfAgeCalculation = {
    girlFriendName: 'fahima',
    owner: 'fahim',
    ageDif: 0,
    ageDiff: function(boy, girl) {
        this.ageDif = boy - girl;
        return [this.owner, this.girlFriendName, this.ageDif];
    }
};
// console.log(gfAgeCalculation.ageDiff(24, 18));
const myFriend = {
    girlFriendName: 'Tania Islam',
    owner: 'Tanbir hasan'
};
// bind method 
// const myFriends = gfAgeCalculation.ageDiff.bind(myFriend);
// console.log(myFriends(25, 20));


// call method 
// gfAgeCalculation.ageDiff.call(myFriend, 20, 30)
// console.log(myFriend);

// apply method
// gfAgeCalculation.ageDiff.apply(myFriend, [20, 30])
// console.log(myFriend);