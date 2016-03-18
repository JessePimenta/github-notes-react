import axios from 'axios'

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`)
}
function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`)
}
//const is read only let is writable. const is good practice if possible. best practice: const, then let, then var.

export default function getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
    .then((arr) => ({repos: arr[0].data,bio: arr[1].data}))
  }
