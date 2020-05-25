const ghpages = require('gh-pages')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your commit message: ', (message) => {
  console.log(`Thanks, building and deploying now! Yeehaw!`);

  ghpages.publish(
    'public', 
    { 
      branch: 'master', 
      repo: 'https://github.com/gameofcards/gameofcards.github.io.git', 
      message
    }, 
    () => { 
      console.log('Deploy Complete!') 
    } 
  );

  rl.close();
});

