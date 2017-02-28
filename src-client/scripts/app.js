import Backbone from 'backbone'
import $ from 'jquery'
import {MainPageView} from './_view-home'
import {SingleView} from './_view-single'
import {NavView} from './_view-nav'
import {FormView} from './_view-form'
import {ThanksView} from './_view-thank_you'
import {EditView} from './_view-edit'
import {MegListingModel, MegListingCollection} from './_model/models.js'

const AppRouter =  Backbone.Router.extend({
  el: '#app-container',

  initialize: function(){
    let navView = new NavView()
		Backbone.history.start()
	},

	routes: {
    'item/:id/edit' : 'showEditPage',
    'category/:category': 'showCategoryPage',
    'item/:id' : 'showSingleItem',
    'thankyou' : 'showThankYou',
		'new' : 'showNewItemForm',
		'' : 'showAllItems'
	},

  showAllItems: function(){
    let allListings = new MegListingCollection()
    allListings.fetch().then(function(serverRes){
    let newViewInstance = new MainPageView()
    newViewInstance.render(serverRes)
    })
  },

  showSingleItem: function(idValue){
    let itemModel = new MegListingModel()
    itemModel.set({ _id: idValue})
    itemModel.fetch().then(function(serverRes){
      let currentViewInstance = new SingleView()
      currentViewInstance.render(serverRes)
    })
  },

  showNewItemForm: function(){
    let newViewInstance = new FormView()
    newViewInstance.render()
  },

  showThankYou: function(){
    let newViewInstance = new ThanksView()
    newViewInstance.render()
  },

  showEditPage: function(idValue){
    let itemModel = new MegListingModel()
    itemModel.set({ _id: idValue})
    itemModel.fetch().then(function(serverRes){
      let currentViewInstance = new EditView()
      currentViewInstance.render(serverRes)
    })
  },

  // showCategoryPage: function(categoryVal){
  //   let itemCollection = new MegListingCollection()
  //   itemCollection.set({category: categoryVal})
  //   console.log(itemCollection)
  //   itemCollection.fetch().then(function(serverRes){
  //     console.log(serverRes)
  //   })
  // },

})

let app = new AppRouter()
