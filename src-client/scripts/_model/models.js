import Backbone from 'backbone'
import $ from 'jquery'

export const MegListingModel = Backbone.Model.extend({
  urlRoot: '/api/item',
  idAttribute: '_id',
  catAttribute: 'category'
})

export const MegListingCollection = Backbone.Collection.extend({
  model: MegListingModel,
  url: '/api/item'
})
