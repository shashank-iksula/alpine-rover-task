export default () => ({  
        showMenuBar: false,
        showColor: false,
        activeIndex: null,
        showLogo: false,
        isMenuBarOpen: false,
        isFooterOpen: false,
        activeTarget: null,
        initialState: false,
        isBasketOpen: false,
       
        colorToggleHandler(){
         this.showColor = !this.showColor;
        },
        getIndex(index){
         this.activeIndex = index;
         console.log("hello")
        },
        openHemburger(){
            const id = document.getElementById('hemburger');
            const menu = document.getElementById('targetMenu');
            const logobar = document.getElementById('logobar');
            this.isMenuBarOpen = true;
            
            
              this.isMenuBarOpen = true;
           
            document.addEventListener('click', ()=>{
              menu.style.transform = "translateX(0)";
              menu.style.transition = "all 0.1s linear";
              logobar.style.opacity = "1";
             
            })
            console.log()
        },
        closeHemburger(){
          const id = document.getElementById('hemburger1');
          const menu = document.getElementById('targetMenu');
          const logobar = document.getElementById('logobar');
          document.addEventListener('click', ()=>{
            menu.style.transform = "translateX(-1200px)";
            menu.style.transition = "all 0.3s linear";
            logobar.style.opacity = "0";
          })
         
            this.isMenuBarOpen = false;
          
        },
        openFooter(e){
          this.isFooterOpen = true;
          this.activeIndex = e;
        },
        closeFooter(){
          this.isFooterOpen = false;
          this.activeIndex = null;
        },
        toggleBasket(){
          this.isBasketOpen = !this.isBasketOpen;
        }
})


