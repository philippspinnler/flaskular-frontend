(function() {
    angular.module('app',
        [
            'ngResource',
            'restclient',
            'ui.router',

            'models.Product',
            'models.ProductCategory',

            'partials.products'
        ])

        .controller('AppCtrl', function(api, $scope) {
        })

        .config(function(apiProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/products");

            apiProvider.baseRoute('http://localhost:5000');

            apiProvider.endpoint('products')
                .route('/products/:code')
                .model('Product');
            apiProvider.endpoint('productcategories')
                .route('/productcategories/:id')
                .model('ProductCategory');
        });
})();