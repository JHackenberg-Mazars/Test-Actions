const core = require('@actions/core')
const github = require('@actions/github')


async function run() {
    //Testing this action
    console.log('Hello, world');

    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);
    
    const {context = {}} = github;
    const { pull_request } = context.payload;


    await octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: 'this is a mere testmessage'
    })
}
run();