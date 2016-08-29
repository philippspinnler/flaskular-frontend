(function() {
    angular.module('partials.products')
        .controller('ProductsCtrl', ProductsCtrl);

    /* @ngInject */
    function ProductsCtrl(products) {
        var vm = this;

        vm.products = products;
    }
})();