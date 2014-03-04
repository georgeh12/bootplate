enyo.kind({
	name: "myapp.MainView",
	kind: "enyo.FittableRows",
	classes: "onyx",
	components:[
		{kind: "enyo.Scroller", fit: true, components: [
			{kind: "myapp.Header"},
			{name: "main"},
			{name: "myapp.Receiver", kind: "enyo.Signals", onTransmission: "transmission"}
		]}
	],
	transmission: function(inReceiver, inSender) {
		this.$.main.destroyClientControls();
		this.$.main.createComponent(inSender);
		this.$.main.render();
	},
});
