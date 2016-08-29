(function() {
    angular.module('models.Product', [])
        .factory('Product', function(Model) {
            function Product(object) {

                this.code = {
                    type: 'int',
                    save: false
                };

                this.name = {
                    type: 'string'
                };

                this.shortDescription = {
                    type: 'string'
                };

                this.description = {
                    type: 'string'
                };

                this.availability = {
                    type: 'string'
                };

                this.currency = {
                    type: 'string'
                };

                this.manufacturer = {
                    type: 'string'
                };

                this.price = {
                    type: 'float'
                };

                // Map the given object
                this._init(object);
            }

            angular.extend(Product.prototype, Model.prototype);

            return Product;
        });
})();