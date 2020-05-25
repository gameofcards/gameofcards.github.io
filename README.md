# gameofcards.github.io

This is a documentation site generated with Gatsby, a react based static site generator.

## Development
**All development should be done on the** `gatsby` **branch**. 
This branch will store the gatsby src code that we'll use to generate our `/public` folder. That folder is what github will serve for us. And the master branch should ONLY have that folder. So we'll store the code we use to __create__ that folder on a separate branch, so we don't lose it when we commit our `/public` folder!

When you are ready to commit your latest updates to the site, it's a two step process.

1. Commit to the gatsby branch
2. Commit the public folder to master\


## Getting Started
1. Clone the repository
2. Switch to the development branch by running `git checkout gatsby`
3. Make your changes, running `npm run develop` to see the new site
4. Commit your gatsby changes by running `git add . ; git commit -m 'your message' ; git push`
5. Commit the new `/public` folder by running `npm run commit`

