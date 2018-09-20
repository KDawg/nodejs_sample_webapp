# Simple "Hello World" Web Server in NodeJS

This source code repo is a sample app showing how to do the simplest possible web server app in NodeJS. 

It's mean to be a learning exercise, and demonstrate this amazing web technology. JavaScript is the primary language of web frontend, and it can be on the backend as well. 

You can be a fullstack web developer by knowing JavaScript well.   

## Setting-up the Sample App

There are a few one-time only steps for installing pre-requisites listed below. 

## Installing NodeJS

This sample webapp is written using NodeJS. Running it means having the NodeJS run-time setup on your computer. Never installed NodeJS? No problem. Refer to the [Node Foundation](https://nodejs.org/en/download/) and find an installer matching your O/S.

## Cloning with Git

Take a copy of the source code from [the repo on GitHub](https://github.com/KDawg/nodejs_sample_webapp). Looking at this sample app repo you’ll find the green button labeled “clone”. Clicking it reveals the URL you’ll use to git clone, which is how source code is first copied down from the server to your computer.

I'm assuming you're familiar with `git` revision control. If you haven't used it much there's a [ton of resources online](https://git-scm.com/doc) that you can search for. It's worth getting comfortable with it!

## Installing Project Dependencies

To summarize. 

* You’ve installed NodeJS
* You've pulled down a copy of the source code

Now install the app’s dependencies. Run this command in your local copy of the repo:

`npm install`

This tells npm (Node Package Manager) to pull down copies of the open-source libraries this app uses. Could take a few minutes.

## Running the Sample App

Your copy of the app is ready to run. Run this command in your local copy of the repo:

`npm start`

## Open the WebPage

Launch your favorite web browser and enter the URL your local web server is running on:

`http://0.0.0.0:8080/`

## Code Reading 

Start at the beginning, [`app.js`](https://github.com/KDawg/nodejs_sample_webapp/blob/master/app.js), and notice how the NodeJS web server is spun up and gets working. This function [`SetupRoutes`](https://github.com/KDawg/nodejs_sample_webapp/blob/master/app.js#L37) is particularly interesting because it establishes a `GET` action response for the default route.

Look at [`/views/main.html`](https://github.com/KDawg/nodejs_sample_webapp/blob/master/views/main.html) seeing how to setup a page for the template engine to work.

  
## Accelerate Your Learning

Use this sample app to accelerate your learning. Play around in it. Change things. Make it your own. It should be enough to get your inventive self going strong.

Be sure to [reach out to me on Twitter](https://twitter.com/KenTabor) and tell me when you've done something cool. 

Good luck, have fun!
