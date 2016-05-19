$( document ).ready(function() {
    
    /*
     * API Setup
     * You need to set here your project and bookmark ids
     */
    
    var API = squid_api.setup({
        "clientId" : "simple-app",
        "config" : {
            "project" : null,
            "bookmark" : null
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
            $("#main").html("<pre>"+JSON.stringify(data, null, ' ')+"</pre>");
        } else {
            $("#main").html("Analysis status : "+a1.get("status"));
        }
    });

    
    /*
     * Start the API
     */
    
    API.init();
});
