#!/usr/bin/env node

const request = require('superagent');
const Preferences = require('preferences');

const repoOwner = 'goodwid';
const repoName = 'issue-test';

if (process.env.GITHUB_TOKEN) const token = process.env.GITHUB_TOKEN;
else {
  console.log('env variable GITHUB_TOKEN not set!');
  process.exit(1);
}
const prefs = new Preferences('issue-test');

const issue = {
  title: 'Test Issue Title',
  body: 'body goes here',
  assignee: 'goodwid',
  milestone: '',
  labels: [];
};

function makeGithubIssue(issue) {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

}
