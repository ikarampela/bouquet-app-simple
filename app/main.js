$( document ).ready(function() {
    
    /*
     * API Setup
     */
    var API = squid_api.setup({
        "clientId" : "simple-app",
        "config" : {
            "project" : null,
            "bookmark" : null
        },
    });
    
    /*
     * Controller part
     */
    new API.controller.FiltersController();
    var analysis = (new API.controller.AnalysisController()).model;

    /*
     * Declare the views
     */
    new API.view.LoginView();
    new API.view.StatusView();
    
    /*
     * Start the App
     */
    API.init();
});
