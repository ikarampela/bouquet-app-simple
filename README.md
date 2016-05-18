Bouquet Simple App
==================

Base skeleton App for JSSDK. 

Handles user login and displays a status message in a sample widget.  
Download/Clone a release and use it as a skeleton for your project.  

It uses the standard stack : 
* [Bootstrap](http://getbootstrap.com/) for html layout.
* [Bower](http://bower.io/) for js libraries management.
* [Grunt](http://gruntjs.com/) for building the app.
* [Backbone.js](http://backbonejs.org/) as the js MVC.

Along with our JSSDK components :  
* [JSSDK](https://github.com/squidsolutions/jssdk2)
* [Core Widgets](https://github.com/squidsolutions/jssdk-core-widgets)

## running

Install the dependencies
```
npm install
bower install
```

Build (without cache busting)
```
grunt build
````

Watch for future code changes (and automatically rebuild)
```
grunt watch
````

Edit the app/main.js file to match your Project's settings


View the build results
```
open dist/index.html
`````
