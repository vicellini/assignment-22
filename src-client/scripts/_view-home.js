import {MegListingModel, MegListingCollection} from './_model/models.js'

export const MainPageView = Backbone.View.extend({
  el: '.page-content',

  events: {
    'click .thumbnail' : 'handleSingleItem'
  },

  handleSingleItem: function(evt){
    let singleItemCard = evt.currentTarget
    window.location.hash = `item/${singleItemCard.dataset.itemid}`
  },

  _singleHTMLTemplate: function(listOfModels){
    let bigHTMLString = listOfModels.map(function(eachObj){
      return`
          <div class="col-xs-12 col-sm-4 single-item">
            <div class="thumbnail" data-itemid="${eachObj._id}">
              <img src="${eachObj.imgLink}" >
              <div class="caption">
                <h3>${eachObj.item} - $${eachObj.price}</h3>
              </div>
            </div>
          </div>
          `
      }).join('')
      return bigHTMLString
    },

  _HTMLTemplate: function(listOfModels){
    return `
      <h2 class= "page-title">Welcome to Meg's List</h2>
      <div class="row">
        ${ this._singleHTMLTemplate(listOfModels) }
      </div>
    `
  },

  render: function(listOfModels){
    console.log(listOfModels)
    this.el.innerHTML = this._HTMLTemplate(listOfModels)

  },

})
