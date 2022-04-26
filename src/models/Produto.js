class Produto {

    constructor(sku, product_name, price, desc) {
        this.sku = sku;
        this.product_name = product_name;
        this.price = price;
        this.desc =  desc;
    }

    // Getters

    verifiyProductExists() {
        return true;
    }

}