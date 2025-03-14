import * as components from './src/indexpapa.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render ();
    }

    render () {
        this.shadowRoot.innerHTML = `
        <style>


        </style>

        <header-element
        

        tit="Blog"
        bot1="Home"
        bot2="About"
        bot3="Contact"
        >
        </header-element>

        <search-element
        cat1= "All categories"
        cat2= "Company"
        cat3= "Product"
        cat4= "Design"
        cat5= "Engineering"
        cat6= "🔍 "
        >
        </search-element>
        
        
        
        
        
        
        
        
        
        
        
        
        <dial-element
        dia1="1"
        dia2="2"
        dia3="3"
        >
        </dial-element>


        `
    }
}

customElements.define('app-container', AppContainer);