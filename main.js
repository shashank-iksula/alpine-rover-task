import Alpine from 'alpinejs'
import header from "./component/header";
import product from "./component/product"
import "./store";
window.Alpine = Alpine

Alpine.data('header', header);
Alpine.data('product', product);

Alpine.start()