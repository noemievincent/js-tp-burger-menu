(function (){
    const oBurger ={
        init(){
            document.documentElement.classList.add('js-enabled');
            document.querySelector('.nav-button').addEventListener('click',(event)=> {
                this.eMain =document.querySelector('main');
                this.eMain.classList.toggle('is-opened');
            });
        }
    }
    oBurger.init();
})();