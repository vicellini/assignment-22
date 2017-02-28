import Backbone from 'backbone'
import {MegListingModel} from './_model/models.js'

export const FormView = Backbone.View.extend({
  el: '.page-content',

  events : {
    "blur input[name='image']" : 'handleImagePreview',
		'submit #form_new-listing' : 'handleFormSubmit',
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

	handleFormSubmit: function(evt){
		evt.preventDefault();
    let formEl = evt.target
    this._validateItemField(formEl)
    this._validatePriceField(formEl)

    console.log(filepicker.value)

		let dataToBeSaved = {
			item : formEl.item.value,
			price : parseInt(formEl.price.value),
			forSale : formEl.forsale.checked,
			description : formEl.description.value,
			imgLink : formEl.image.value,
			category : formEl.category.value.toLowerCase(),
		}

		let newListingModel = new MegListingModel()
		newListingModel.set(dataToBeSaved)
    newListingModel.save().then(function(){
		window.location.hash = 'thankyou'
		})

	},


	_finalHtmlTemplate: function(){
		return `
			<h2>List Your Item</h2>
			<form id="form_new-listing">
				<div class="field_item">
					<label>Item Name</label>
					<input type="text" name="item" placeholder="Name of Item"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_price">
					<label>Item Price</label>
					<input type="text" name="price" placeholder="$"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_for-sale">
					<label>For Sale?</label>
					<input type="checkbox" name="forsale" placeholder="$$"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_description">
					<label>Item Description</label>
					<input type="text" name="description" placeholder="Short Description"/>
					<p class="flash-msg"></p>
				</div>
				<hr/>
				<div class=" field_image">
					<label>Item Image URL</label>
					<input type="text" name="image" placeholder="Insert URL"/>
          <input type="filepicker" data-fp-apikey="A9VDSJMoIQgKxNS7JOeURz" data-fp-mimetypes="image/*" data-fp-container="modal" data-fp-services="COMPUTER">
          <div>
            <p>Image Preview</p>
            <img class="image-preview-contaner" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Image%20Listed&w=300&h=200">
          </div>
				</div>
        </hr>
        <div class=" field_category">
          <label>Item Category</label>
          <input type="text" name="category" placeholder="Category?"/>
          <p class="flash-msg"></p>
        </div>
					<button class="btn btn-success" type="submit">Submit</button>
				</div>
			</form>

		`
	},

	render: function(){
		this.el.innerHTML = this._finalHtmlTemplate()
	}
})
