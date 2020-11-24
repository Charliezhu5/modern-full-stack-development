This app was finished following the tutorial.
I have also added an update contact button.
The frontend was created with React and webpack.
I hard coded the IMAP and SMTP to be MS outlook mail API.
To run this app locally, you will need to install dependencies.
simply go to server/ run $npm install.
Go to client/ run $npm install as well.
Then build frontend app using $npx webpack.
Then go to server/ run $ npm run compile.

Dont forget to supply ENV below:
PORT, USERNAME, PASSWORD

Also, I have encountered a great problem to implement Build once deploy anywhere 
philosophy, I did not know at the moment how to tell frontend the correct backend
API without hardcoding it. Thus I will use a very dirty trick, document.URL.
So that when first connecting to root page, the URL of that page will be set to the
config file for frontend to connect to the backend API which should be running on the
same server in this app.

Use the dockerfile to build image:
Before building image, make sure the frontend and backend codes are both compiled
and in dist/ folder.

Docker:
Docker should run fine, pull image from fullcount/node-mailbag.

Docker run ENV must have:
PORT, USERNAME, PASSWORD