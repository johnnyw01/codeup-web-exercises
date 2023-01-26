// console.log('success');
// import { Octokit, App } from "https://cdn.skypack.dev/octokit";
// //
// const tempGithubApiToken = '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';
//
// const octokit = new Octokit({
//     auth: 'YOUR-TOKEN'
// })
//
// await octokit.request('GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}', {
//     owner: 'OWNER',
//     repo: 'REPO'
// })


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


// function lastCommit (username)  {
//     fetch(`https://api.github.com/users/${username}/`, {headers: {'Authorization': tempGithubApiToken }})
//         .then(response => console.log(response.json()));
// }
//
// lastCommit(userNames);
