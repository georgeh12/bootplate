enyo.kind({
	name: "myapp.IFrame",
	published: {
		url: ""
	},
	components: [
		{
			name: "iframe",
			classes: "enyo-fill",
			style: "border: none;"
		}
	],
	rendered: function () {
		this.inherited(arguments);
		this.urlChanged();
	},
	urlChanged: function () {
		if (this.url) this.$.iframe.setSrc(this.url);
	}
});
