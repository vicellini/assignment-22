#ES6 Module Bundler Setup

##Setup 

##### 1. In `~/TIY/assignments`, clone this repo
```
git clone  git@github.com:TIY-Charleston-Front-End-Engineering/assignment-backbone-data-persistence-megs-list.git «your-project»
```

##### 2. Install the packages
```
npm install
```

##### 3. Run the taskrunner & run the local server
You should be prompted to provide a project name in the terminal.

```
npm run go
```

##### 4. Seed the database
You only have to do this once
```
npm run gen-seed-data
```

##### 5. Checkout localhost:27017 connection in MongoChef to see if the data is there


##### 6. Workflow
Do scss and javascript work in the `src/` directory. It will compile to the `dist/` with the taskrunner.

`index.html` pages are served out of the `dist/`
