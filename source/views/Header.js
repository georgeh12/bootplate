enyo.kind({
	name: "myapp.Header",
	kind: "enyo.FittableRows",
	components:[
		{kind: "onyx.Toolbar", components: [
			{kind: "enyo.Image", src: "", alt: "GH&A, Inc."},
			{kind: "myapp.Button"},
			{kind: "myapp.Resume"},
			{kind: "myapp.Projects"},
			{kind: "myapp.Drupal"},
			{kind: "myapp.Team"},
			{kind: "myapp.Social"},
			{kind: "myapp.Login"}
		]}
	],
	headerButtonTap: function(inSender, inEvent) {
		enyo.Signals.send("onTransmission", inSender.mainContent);
	}
});
