# Data Persistence - Meg's List - Part 1
##Description
Create a craigslist clone where users can upload items for sale in a casual unstructured, garage-sale style manner. In Part 1, you will need to build a UI-form that communicates with a REST API so that users will be able to save new postings to a backend.

## Objectives

After completing this assignment, you should be able to:

* Use Backbone.Views to render a view template for a form
* Use Backbone.Views to capture form data from the `submit` event
* Save data from a submit event to a backend database


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

##### 5. Checkout «your-project-name_dev» in MongoChef to see if the seeded data is there.


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

## Normal Mode
Create a Backbone View builds an html string template of a form. The view should listen for a submit event and capture relevant data. Data should be saved by creating a new model instance.


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

## Explorer Mode
Integrate with Backbone Router. (Give a root path that shows something like: 'site under construction')
```
'item/new'
'' 
```

## Adventure Mode
Provide form validation that gives feedback as to whether a user submitted valid input.

## Epic Mode
Create a route to edit an input: 
```
'item/new'
'item/:id/edit'
''
```

It will populate the form and 