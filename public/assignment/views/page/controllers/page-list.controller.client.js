/**
 * Created by berti on 7/25/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;
        model.userId = $routeParams["userId"];
        model.websiteId = $routeParams["websiteId"];

        function init() {
            pageService
                .findPagesForWebpage(model.userId, model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }
        init ();
    }
})();