(function() {
    angular.module('models.ProductCategory', [])
        .factory('ProductCategory', function(Model) {
            function ProductCategory(object) {

                this.id = {
                    type: 'int',
                    save: false
                };

                this.name = {
                    type: 'string'
                };

                // Map the given object
                this._init(object);
            }

            angular.extend(ProductCategory.prototype, Model.prototype);

            return ProductCategory;
        });
})();