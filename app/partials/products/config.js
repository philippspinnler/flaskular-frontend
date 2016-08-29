(function() {
    angular.module('partials.products', [])
        .config(Route);

    /* @ngInject */
    function Route($stateProvider) {
        $stateProvider
            .state('products', {
                url: "/products",
                templateUrl: 'partials/products/templates/list.html',
                controller: 'ProductsCtrl',
                controllerAs: 'vm',
                resolve: {
                    bookings: ['api', function (api) {
                        return api.products.get();
                    }]
                }
            })
    }
})();

