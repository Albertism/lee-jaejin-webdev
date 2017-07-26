/**
 * Created by berti on 7/23/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    var users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
    ]

    var user = users[0];

    function configuration($routeProvider) {
        $routeProvider
            // .when("/", {
            //     templateUrl: "views/home.view.client.html",
            //     controller:  "homeController",
            //     controllerAs: "model"
            // })
            .when("/", {
                templateUrl: "views/user/login.view.client.html",
                controller:  "loginController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller:  "loginController",
                controllerAs: "model"
            })
            .when("/profile/:userId", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
        //website routes
            .when("/user/:userId/website", {
                templateUrl: "views/website/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "views/website/website-new.view.client.html",
                controller: "websiteNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/website-edit.view.client.html",
                controller: "websiteEditController",
                controllerAs: "model"
            })
        //page routes
            .when("/user/:userId/website/:websiteId/page", {
                templateUrl: "views/page/page-list.view.client.html",
                controller: "pageListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/new", {
                templateUrl: "views/page/page-new.view.client.html",
                controller: "pageNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId", {
                templateUrl: "views/page/page-edit.view.client.html",
                controller: "pageEditController",
                controllerAs: "model"
            })
        //widget routes
            .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
                templateUrl: "views/widget/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
                templateUrl: "views/widget/widget-chooser.view.client.html",
                controller: "widgetNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
                templateUrl: "views/widget/widget-chooser.view.client.html",
                controller: "widgetNewController",
                controllerAs: "model"
            })
            .otherwise({redirectTo : "/login"});

    }

})();
