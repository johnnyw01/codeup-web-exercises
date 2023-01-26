const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


    const threeLanguages = users.filter((user) =>{
    if(user.languages.length >= 3){
        return user;
    }
})
// console.log(threeLanguages);

const userEmail = users.map(function (user){
    return user.email;
})

// console.log(userEmail);


  const getYears = users.reduce((years, user)=>{
      return years + user.yearsOfExperience / users.length
  },0)

// console.log(getYears);

const  longestEmail = users.reduce((longestEmailAddress, user)=>{
    if(user.email.length > longestEmailAddress.length){
        return user.email;
    }else{
        return longestEmailAddress
    }
}," ")

// console.log(longestEmail)

    const getNames = users.reduce((names, user, index) => {
        if (index === users.length - 1) {
            return names + user.name;
        } else {
            return names + user.name + ', ';
        }
    }, "Your instructors are: ");

console.log(getNames);

const languages = [...new Set(users.reduce((languages, user) => {
    return languages.concat(user.languages);
}, []))];

console.log(languages);