import Backbone from 'backbone'
import $ from 'jquery'

export const NavView = Backbone.View.extend({
	el: '#app-container',

  events : {
		'click .navbar' : 'handleNavClick'
	},

	handleNavClick: function(evt){
    window.location.hash = `${evt.target.dataset.route}`
	},

	render: function(){}

})
