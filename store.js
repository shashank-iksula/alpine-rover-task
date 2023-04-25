import Alpine from 'alpinejs'
Alpine.store('headerItem', {
    items: [],
    showMenuBar:false,
    filteredData:[],
    changeImage: false,
    activeIndex: true,
    async init(){
        try{
        const response = await fetch('https://jsonware.com/api/v1/json/a660a1fb-3276-411d-957a-8d756d7fccc0?dynamic=true');
        const data = await response.json();
        this.items.push(data);
        this.items = this.items[0];
        }
        catch(err){
         console.log(err.message);
        }
     },
     getName(e){
        const name = e.textContent;
        this.showMenuBar = true;
         if(name){
         for(let key in this.items){
            if(key === name){
               this.filteredData = this.items[key];
            }
        }
        }
        else{
          this.filteredData = [];
        }
     
     },
     closeSubmenu(){
        this.showMenuBar = false;
    },
    openImage(index){
      this.activeIndex = index;
       this.changeImage = true;
    },
    closeImage(){
      this.changeImage = false;
    }
})