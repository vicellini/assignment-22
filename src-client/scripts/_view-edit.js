import Backbone from 'backbone'
import {MegListingModel} from './_model/models.js'

export const EditView = Backbone.View.extend({
  el: '.page-content',

  events : {
    "blur input[name='image']" : 'handleImagePreview',
		'submit #form_edit' : 'handleFormEdit',
	},

  _renderFlashMessage: function(flashMsgEl, someObj){
    if(someObj.isValidImput === false){
      flashMsgEl.classList.add('input-incorrect')
      flashMsgEl.classList.remove('input-correct')
      flashMsgEl.innerHTML = someObj.message
    }else{
      flashMsgEl.classList.remove('input-incorrect')
      flashMsgEl.classList.add('input-correct')
      flashMsgEl.innerHTML = `&#10003;&#10003;&#10003;`
    }
  },

  _validateItemField: function(formEl){
    let itemInputVal = formEl.item.value
    let flashMsgEl = document.querySelector(".field_item .flash-msg")
      if(itemInputVal.length === 0){
        this._renderFlashMessage(flashMsgEl, {
        isValidImput: false,
        message:`Input must be longer than nothing`
        })
      }else{
        this._renderFlashMessage(flashMsgEl, {
          isValidImput: true
        })
      }
  },

  _validatePriceField: function(formEl){
    let priceInputVal = formEl.price.value
    let flashMsgEl = document.querySelector(".field_price .flash-msg")
      if( isNaN(priceInputVal) === true || priceInputVal.length === 0){
        this._renderFlashMessage(flashMsgEl, {
          isValidImput: false,
          message: `Please Input a Number`
        })
      } else {
        this._renderFlashMessage(flashMsgEl, {
          isValidImput: true,
        })
      }
  },

  handleImagePreview: function(evt){
    let newUrl = evt.target.value
    let previewImageEl = document.querySelector('.image-preview-contaner')
    if(newUrl.length === 0){
      previewImageEl.src = `https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Image%20Listed&w=300&h=200`
    }
    previewImageEl.src = `${newUrl}`
  },

  _determineNewInput: function(formElProp, placeholderVal){
    if(formElProp.length === 0){
      return placeholderVal
    }else{
      return formElProp
    }
  },

  _determineSaleStatus: function(formProp, placeholderVal){
    if(formProp === false){
      return placeholderVal
    }else{
      return true
    }
  },

  _determineNewImage: function(newVal, oldUrl){
    if(newVal.length === 0){
      return parseInt(oldUrl);
    }else{
      return newVal
    }
  },

	handleFormEdit: function(evt){
		evt.preventDefault();
    let formEl = evt.target
    let listingIdVal = evt.currentTarget.attributes[1].textContent
    let oldImageEl = document.querySelector('.image-preview-contaner')
    this._validatePriceField(formEl)

		let updatedData = {
      _id : listingIdVal,
			item : this._determineNewInput(formEl.item.value, formEl.item.placeholder),
			price : parseInt(this._determineNewInput(formEl.price.value, formEl.price.placeholder)),
			forSale : this._determineSaleStatus(formEl.forsale.checked, formEl.forsale.placeholder),
			description : this._determineNewInput(formEl.description.value, formEl.description.placeholder),
			imgLink : this._determineNewImage(formEl.image.value, oldImageEl.src),
			category : this._determineNewInput(formEl.category.value, formEl.category.placeholder).toLowerCase(),
		}
    console.log(updatedData)

		let listingModelToEdit = new MegListingModel()
    newListingModel.save().then(function(){
		window.location.hash = 'thankyou'
		})

	},

	_htmlTemplate: function(singleMod){
		return `
			<h2>Edit Listing</h2>
			<form id="form_edit" data-itemid="${singleMod._id}">
				<div class="field_item">
					<label>Item Name</label>
					<input type="text" name="item" placeholder="${singleMod.item}"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_price">
					<label>Item Price</label>
					<input type="text" name="price" placeholder="$${singleMod.price}"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_for-sale">
					<label>For Sale?</label>
					<input type="checkbox" name="forsale" placeholder="${singleMod.forSale}"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_description">
					<label>Item Description</label>
					<input type="text" name="description" placeholder="${singleMod.description}"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_image">
					<label>Item Image URL</label>
					<input type="text" name="image" placeholder="New Image?"/>
          <div>
            <p>Image Preview</p>
            <img class="image-preview-contaner" src="${singleMod.imgLink}">
          </div>
				</div>
        </hr>
        <div class=" field_category">
          <label>Item Category</label>
          <input type="text" name="category" placeholder="${singleMod.category}"/>
          <p class="flash-msg"></p>
        </div>
					<button class="btn btn-success" type="submit">Submit</button>
				</div>
			</form>

		`
	},

	render: function(singleModel){
		this.el.innerHTML = this._htmlTemplate(singleModel)
	}
})
