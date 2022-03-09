const users = [
    {
      name: "Aufa",
      age: 22,
      major: "Frontend Engineer",
    },
    {
      name: "Isfa",
      age: 20,
      major: "Android Engineer",
    },
    {
      name: "Agung",
      age: 24,
      major: "Data Engineer",
    },
    {
      name: "Nurul",
      age: 24,
      major: "English",
    },
    {
      name: "Jaki",
      age: 27,
      major: "English",
    },
  ];
  


    const format = users.filter(maj => {
        return maj.major == "English" ;
    })

console.log(format);


var heroes = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
];

var marvelHeroes =  heroes.filter(function(hero) {
    return hero.franchise == "Marvel";
});

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]



// const title = "Mr/Mrs.";
// const format = (title) => {
//     const format = users.map(item => {
//         const data = {};
//         data["name"] = `${title} ${item.name}`;
//         data.age = item.age;
//         data.major = item.major; 

//         return data;
//     })
    
//     return format;
// }

// console.log(format(title));


// const myUsers = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ]

// const usersByLikes = myUsers.map(item => {
//     const container = {};

//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;

//     return container;
// })

// console.log(usersByLikes);