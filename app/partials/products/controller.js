(function() {
    angular.module('partials.products')
        .controller('ProductsCtrl', ProductsCtrl)
        .controller('ProductsDetailCtrl', ProductsDetailCtrl)
        .controller('ProductCategoriesCtrl', ProductCategoriesCtrl);

    /* @ngInject */
    function ProductsCtrl(products, productCategory) {
        var vm = this;

        vm.products = products;
        vm.productCategory = productCategory;
    }
    /* @ngInject */
    function ProductsDetailCtrl(product) {
        var vm = this;

        vm.product = product;
    }
    /* @ngInject */
    function ProductCategoriesCtrl(productCategories) {
        var vm = this;

        vm.productCategories = productCategories;
    }
})();