(function() {
    angular.module('partials.products', [])
        .config(Route);

    /* @ngInject */
    function Route($stateProvider) {
        $stateProvider
            .state('products', {
                url: "/products?category",
                templateUrl: 'partials/products/templates/list.html',
                controller: 'ProductsCtrl',
                controllerAs: 'vm',
                resolve: {
                    /* @ngInject */
                    products: function (api, $stateParams) {
                        if (angular.isDefined($stateParams.category)) return api.products.get({category: $stateParams.category});
                        return api.products.get();
                    },
                    /* @ngInject */
                    productCategory: function (api, $stateParams) {
                        if (angular.isDefined($stateParams.category)) return api.productcategories.get({id: $stateParams.category});
                        return null
                    }
                }
            })
            .state('productdetail', {
                url: "/products/:code",
                templateUrl: 'partials/products/templates/detail.html',
                controller: 'ProductsDetailCtrl',
                controllerAs: 'vm',
                resolve: {
                    /* @ngInject */
                    product: function (api, $stateParams) {
                        return api.products.get({code: $stateParams.code});
                    }
                }
            })
            .state('productcategories', {
                url: "/productcategories",
                templateUrl: 'partials/products/templates/categories.html',
                controller: 'ProductCategoriesCtrl',
                controllerAs: 'vm',
                resolve: {
                    /* @ngInject */
                    productCategories: function (api) {
                        return api.productcategories.get();
                    }
                }
            })
    }
})();

