const urlParams = new URLSearchParams(location.search);
let github_code = urlParams.get('code');

const getGithubAccessToken = async() => {
    let response = await axios.get(`http://localhost:3000/github-access-token/${github_code}`);
    console.log('github response>>>', response);
}

if (github_code) getGithubAccessToken();