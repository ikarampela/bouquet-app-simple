$( document ).ready(function() {

    /*
     * API Setup
     * You need to set here your project and bookmark ids
     */

    var API = squid_api.setup({
        "clientId" : "simple-app",
        "config" : {
            "project" : 'dvdrental',
            "bookmark" : '5745be1d15abcc230650bf06'
        },
    });

    /*
     * Default Controllers
     */

    // define default filters behavior
    new API.controller.FiltersController();
    // define a base analysis
    var analysis = (new API.controller.AnalysisController()).model;

    /*
     * Default Views
     */

    new API.view.LoginView();
    new API.view.StatusView();

    /*
     * Custom code
     */

    // listen for analysis changes
    analysis.on("change", function(a1) {
        var results = a1.get("results");
        if (results) {
            var data = results;
            //$("#main").html("<pre>"+JSON.stringify(data, null, ' ')+"</pre>");
        } else {
          //  $("#main").html("Analysis status : "+a1.get("status"));
        }
    });


    /*
     * Start the API
     */

    API.init();
});

function changeIconOn() {

  $("#toggle").html('<i class="fa fa-toggle-on fa-lg" aria-hidden="true" onClick="changeIconOff();">');

}

function changeIconOff() {

  $("#toggle").html('<i class="fa fa-toggle-off fa-lg" aria-hidden="true" onClick="changeIconOn();">');

}

	function expand() {

		$("#parent").html('<i class="fa fa-minus" aria-hidden="true" onClick="collapse();"></i> Parent');
		$("#child").show();
	}

	function collapse() {

		$("#parent").html('<i class="fa fa-plus" aria-hidden="true" onClick="expand();"></i> Parent');
		$("#child").hide();
	}
