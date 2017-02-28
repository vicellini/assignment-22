import Backbone from 'backbone'

export const ThanksView = Backbone.View.extend({
  el: '.page-content',

  _createThankYouHTML: function(){
    return `
      <h1>Thank You For Your Submission</h1
    `
  },

  render: function(){
    this.el.innerHTML = this._createThankYouHTML()
  },



})
