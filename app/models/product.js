(function() {
    angular.module('models.product', [])
        .factory('Product', function(Model) {
            function Product(object) {

                this.code = {
                    type: 'int',
                    save: false
                };

                this.name = {
                    type: 'string'
                };

                // Map the given object
                this._init(object);
            }

            angular.extend(Product.prototype, Model.prototype);

            return Product;
        });
})();