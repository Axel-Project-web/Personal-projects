# Notepad
### Web notes application with support for user registration.  
To clone the repository, open a terminal, go to the directory where you want to download the files and copy the following command:

  <pre>git clone https://github.com/Axel-Project-web/Notepad</pre>

After cloning the repository, you will need to install the necessary dependencies for it to work properly. To do this, use the command: 

  <pre>npm install</pre>

### Preparing the database
1. The first step is to install docker to access the image that will build the database. Click on this [link](https://www.docker.com/get-started/) to go to the download page.
2. Go to the repository containing the image. Click on this [link](https://hub.docker.com/r/axelweb/writeonme-image/tags)
3. You can search for the image mentioned from the docker desktop application using the navigation bar, or you can start the docker application, open the terminal and add the following command:
<pre>docker pull axelweb/writeonme-image:latest</pre>
That's all!
### The steps to start the application are described below.
1. Start the docker engine and create an instance of the downloaded image. Remember to select port 3306.
2. From the terminal of your code editor, go to the server folder (cd server) and execute the command "npm start".
3. As a last step, go to the root folder of the project to start the application with vite and the command "npm run dev".
### Technologies for application development.
#### Front-end 
- CSS
- React
- TypeScript
- Dependencies
  - React
  - React-router-dom
- DevDependencies
  - Vite
  - TypeScript
#### Back-end
- JavaScript
- Dependencies
  - ajv
  - cors (dev)
  - express
  - jose
  - mysql2
  - nodemon
  - uuid
  
