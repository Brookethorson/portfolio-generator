const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);



const printProfileDate = (profileDataArr) => {
    console.log(profileDataArr);
};

printProfileData(profileDataArgs);
