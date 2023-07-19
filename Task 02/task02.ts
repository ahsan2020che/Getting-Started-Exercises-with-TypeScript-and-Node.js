import promptSync from 'prompt-sync';
const prompt = promptSync();
const name = prompt("Please Enter your name:");
console.log('Hello '+name+'!, would you like to learn some Python today?');