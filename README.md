# Data Persistence - Meg's List
##Description
Create a craigslist clone where users can upload miscellaneous items for sale. 
Users will be able to see current listings, and create listings, 

## Objectives

After completing this assignment, you should be able to:

* Use Backbone.Views to render a view template for a form
* Use Backbone.Views to capture form data from the `submit` event
* Save data from a submit event to a backend database
* Fetch and render the data.


##Setup 

##### 1. In `~/TIY/assignments`, clone this repo
```
git clone  git@github.com:TIY-Charleston-Front-End-Engineering/assignment-backbone-data-persistence-megs-list.git «your-project»
```

##### 2. Install the packages
```
npm install
```

##### 3. Set the project name so that we can create an exclusive section in the database for data related to this project.
You should be prompted to provide a project name in the terminal.

```
npm run set-project-name
```

##### 4. Seed the database with the fake data.
You only have to do this once. control-c when done
```
npm run gen-seed-data
```

##### 5. Checkout «your-project-name»\_dev in MongoChef to see if the seeded data is there.


##### 6. Workflow
Do scss and javascript work in the `src/` directory. It will compile to the `dist/` with the taskrunner.

`index.html` pages are served out of the `dist/`

### Deliverables

* A repository on github
* Site styles written in SCSS in the `src/`  and compiled to the dist
* JS written in `src/` and compiled to the dist folder

### Requirements

* No JS errors in the browser
* All functions and code should work according to the following description.

### Normal Mode
Create the following routes:

```
''         (shows all listings)
'new'      (shows a form to create a listing)
'item/:id' (shows a single listing)
```


The data saved to the backend should have the following structure:

```
{
	item: STRING,
	price: NUMBER,
	forSale: BOOLEAN,
	description: STRING,
	imgLink: STRING
	category: STRING ('optional')
}
```

### Explorer Mode
Create a route and view that will allow a user to edit an input.

In Backbone Router:
```
'item/:id/edit'
```


### Adventure Mode
+ Create routes for categories
```
'category/:category'
```

+ Provide form validation that gives feedback as to whether a user submitted valid input for a field. (e.g. the price should be a number, no fields can be blank, etc.)

### Epic Mode
Allow users to upload images from their file system to [filestack](https://www.filestack.com/), and use the returned image link as the value for the `imageLink` property. .