# Notes(React + Express) - RESTful API

### Manage your notes... add, view, edit or delete them easily. The simplest way to keep notes!

<img src='https://img.shields.io/badge/dynamic/json?color=%2361DBFB&label=react%20%20&prefix=v&query=dependencies.react&suffix=%20%20&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsiddheshkothadi%2Fnotes-frontend%2Fmaster%2Fpackage.json' alt='react-version'/>

<p>This repository contains the code for the front end of <b>Notes</b>. Refer the <a href='https://github.com/siddheshkothadi/notes-backend'>express app</a> for the back end side and making a RESTful API using Express.js and Node.js.

<p align='center'>
  <img src='https://github.com/siddheshkothadi/notes-frontend/blob/preview/preview/Notes-Intro.gif' alt=':(' />
</p>

### Installing

<ul>
  <li><p>Clone the repository:</p>
    
   ```
   git clone https://github.com/siddheshkothadi/notes-frontend
   ```
   ```
   cd notes-frontend
   ```

  </li> 
  <li><p>Install the dependencies:</p>
    
   ```
   npm install
   ```

  </li>
  <li><p>After all the dependencies are installed, start the website on localhost:3000 by running:</p>
    
   ```
   npm start
   ```

  </li>
</ul>

### Component tree:

```
      App
      / \
     /   \
Header   Dashboard
            /\
           /  \
     Textbox   Notes
     (To Add   (Contains 
      a Note)      Notes)
```
