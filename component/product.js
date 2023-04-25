export default () => ({
        products: [],
        items: [],
        filterByColor: false,
        clearFilter: false,
        initialProduct: [],
        async init(){
          try{
             const response = await fetch('https://jsonware.com/api/v1/json/88c6fb82-b7ed-4a74-a826-200f44900df7?dynamic=true');
             const data = await response.json();
             const {products} = data;
             this.products.push(products);
             this.initialProduct.push(products);
          }
          catch(err){
             console.log(err)
          }
        },
        filteredByColorHandler(e){
          let color = e.textContent.toLowerCase().trim();
          this.items = this.products[0].filter((item)=>item.color === color);
          this.products = [];
          this.products.push(this.items);
          return this.products;
        },
        refreshHandler(e){
          setTimeout(()=>{
            window.location.reload();
            window.scrollTo(0,0);
          }, 2000)  
        },
        resetHandler(){
          this.products = [];
          this.init();
          this.clearFilter = false;
          return this.products;
        },
        clearFilterHandler(){
          this.clearFilter = true;
        },
        filterByPrice(val){
          
          if(val === 'pos'){ 
             this.products = [];
             this.init();
             this.products.push(this.initialProduct);
             this.products.pop()
             return this.products;
          }
          if(val === 'asc'){
           this.items = this.products[0].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          this.products = [];
          this.products.push(this.items);
          return this.products;
          }
          if(val === 'desc'){
            this.items = this.products[0].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            this.products = [];
            this.products.push(this.items);
            return this.products;
          }
          if(val ==='nameasc'){
            this.items = this.products[0].sort((a, b) => a.title.localeCompare(b.title))
            this.products = [];
            this.products.push(this.items);
            return this.products;
          }
          if(val === 'namedesc'){
            this.items = this.products[0].sort((a,b)=> b.title.localeCompare(a.title))
            this.products = [];
            this.products.push(this.items);
            return this.products;
          }
        },
})