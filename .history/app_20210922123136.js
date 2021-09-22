const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];
console.log(generatePage(name,github));



// const printProfileData = profileDataArr => {
//     //This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i])
//     }

//     console.log('=============');

//     //Is the sam as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// const generatePage = (userName, githubName) => {
//     return `
//     Name:${userName}
//     Github: ${githubName}
//     `;
// };
// console.log(generatePage('Jane','janehub'));


