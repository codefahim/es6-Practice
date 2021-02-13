const fullName = {
    name: function(name) {
        console.log(this);
        this.name = name;
        return name;
    }
};

// console.log(fullName);

const basicInfo = {
    name: function(name, age) {
        this.name = name;
        this.age = age;
        return [name, age];
    }
};

// console.log(basicInfo.name('fahim', 24));

// fariha.name = basicInfo.name;
// console.log(fariha.name('fariha', 20));