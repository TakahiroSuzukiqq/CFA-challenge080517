// Get tha data of a paticular user from github
// Show the parts of the datat I want to see (number of repos stc)
//Get user to be prompted for which username

// ##################################
// const axios = require('axios');

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// ##################################
// const axios = require('axios');
//
// axios.get('https://api.github.com/users/TakahiroSuzukiqq')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// ##################################
// const axios = require('axios');
//
// axios.get('https://api.github.com/users/TakahiroSuzukiqq')
//   .then(function (response) {
//     console.log(response["data"]["login"]);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// ##################################
// const axios = require('axios');
// var prompt = require('prompt');
//
//     prompt.start();
//     prompt.get(['username', 'email'], function (err, result) {
//
//         console.log('Command-line input received:');
//         console.log('  username: ' + result.username);
//         console.log('  email: ' + result.email);
//      });

// ##################################
// const axios = require('axios');
// var prompt = require('prompt');
//
// function getGithubh(username){
//       axios.get('https://api.github.com/users/${username}')
//         .then(function (response) {
//           console.log(response["data"]["name"]);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });}
//
// prompt.start();
//
// prompt.get(['username'], function (err, result) {
//           console.log('You entered: ' + result.username);
//           getGithub(result.username);
//         });
// ##################################
const axios = require('axios');
const prompt = require('prompt');

function getGithub(username){
  // Make a request for a user with a given ID
  axios.get(`https://api.github.com/users/${username}`)
       .then(function (response) {
        console.log('Full name:', response.data.name);
        console.log('Location:', response.data["location"]);
        console.log('Public Repos:', response.data["public_repos"]);
        // console.log('Follwers:', response.data["followers"]);
        console.log('Follwers:', response["data"]["followers"]);
      })
       .catch(function (error) {
        console.log(error);
        });
      }
  // Start the prompt
prompt.start();
  // Get two properties from the user: username and email
prompt.get(['username', 'email'], function (err, result) {
    // Log the results.
      console.log('You entered: ' + result.username);
      getGithub(result.username);
       console.log('  email: ' + result.email);
      });
