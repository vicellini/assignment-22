import Backbone from 'backbone'

export const SingleView = Backbone.View.extend({
  el: '.page-content',

  events: {
    'click .btn_edit' : 'handleEditPage',
    'click .btn_category' : 'handleCategoryPage'
  },

  handleEditPage: function(evt){
    let itemIdVal = evt.target.dataset.itemid
    window.location.hash = `item/${itemIdVal}/edit`
  },

  handleCategoryPage: function(evt){
    console.log(evt)
    let categoryVal = evt.target.dataset.route
    window.location.hash = `category/${categoryVal}`
  },

  _isForSale: function(val){
    if(val === 1){
      return `Item is For Sale`
    }else{
      return `Sold Out...`
    }
  },

  _itemHTMLTemplate: function(someMod){
    return`
      <div class="row single-item">
        <div class="col-xs-12 col-sm-6 single-item_image">
          <img src="${someMod.imgLink}">
        </div>
        <div class="col-xs-12 col-sm-6 single-item_information">
          <h2>${someMod.item}</h2>
          <div class="row item_second-row">
            <div class="col-xs-6">
              <p class="single-item_price">$${someMod.price}</p>
            </div>
            <div class="col-xs-6">
              <p class="single-item_sale">${this._isForSale(someMod.forSale)}</p>
            </div>
          </div>
          <p class="single-item_description">${someMod.description}</p>
          <div class="row item_third-row">
            <button class="col-xs-6 btn_category" data-route="${someMod.category}">Similar Items</button>
            <button class="col-xs-6 btn_edit" data-itemid="${someMod._id}">Edit Listing</button>
          </div>
        </div>
      </div>
      `
  },

  render: function(someMod){
    this.el.innerHTML = this._itemHTMLTemplate(someMod)
  },

})
