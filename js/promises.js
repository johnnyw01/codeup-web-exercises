// console.log('success');

// const getGithubUsernames = async () => {
//     try {
//         let response = await fetch('https://api.github.com/users', {headers: {'Authorization': tempGithubApiToken}})
//         let data = await response.json();
//         let users = await data;
//         return users;
//     } catch(err) {
//         console.log('error', err);
//     }
//
// }
//
// const userNames = [];
// // getGithubUsernames();
// const logGithubUsernames = async () => {
//     try {
//         let users = await getGithubUsernames();
//         users.forEach(userObj => {
//             userNames.push(userObj.login);
//             console.log(userObj.login);
//             console.log(userObj.events_url);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
// logGithubUsernames();

// .then(events => {
//     for (let event of events) {
//         if (event.type === "PushEvent") {
//             let mostRecentPush = event;
//             console.log(mostRecentPush[0]['created_at']);
//         }
//     }
// })

 const key = keys.tempGithubApiToken
const test = async (userName) => {
    try {
        let response = await fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': key}});
        let data = await response.json();
        let newestPush = (data.find((item) => item.type === 'PushEvent'));
        let newestCommit = new Date(newestPush['created_at']).toLocaleDateString();
        //console.log(newestCommit);
        return newestCommit;
    } catch(err){
        console.log(err);
    }
}
(async () => {
    let newestCommit = await test('johnnyw01');
    console.log(newestCommit);
})();

const wait = (number) => {
    let milliseconds = number * 1000;
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(number > 0){
                // let message = `It took ${milliseconds} for the function to print this message!`
                // return message
                console.log(`It took ${milliseconds} milliseconds for the function to print this message!`)
                resolve();
            }else{
                console.log(`You entered an invalid value. Please enter a value greater than 0.`)
                reject();
            }
        }, number)
    }).catch(error => {
        console.log(error)
    });
}
// wait(1000);
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
