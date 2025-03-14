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

        .container{
        display: flex;
        align-items: center;
        gap: 5px;
        }


        </style>

        <header-element
        tit="Blog"
        txt="Stay in the loop with the latest about our products"
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

        <div class="container">
        
        <cards-element

        
        img="https://mui.com/static/images/avatar/2.jpg"
        cag="Engineer"
        title= "The future of AI in software engineering" 
        des="Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing developm avatar: "avatar"
        autor="Remy Sharp, Travis Howard", date: "July 14, 2021"
        cag="Hola"
        img2="https://mui.com/static/images/avatar/2.jpg"
        aut="Jorgito Perez"
        date="Hoy"
        >
        </cards-element>

        <cards-element

        
        img="https://mui.com/static/images/avatar/2.jpg"
        cag="Engineer"
        title= "The future of AI in software engineering" 
        des="Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing developm avatar: "avatar"
        autor="Remy Sharp, Travis Howard", date: "July 14, 2021"
        cag="Hola"
        img2="https://mui.com/static/images/avatar/2.jpg"
        aut="Jorgito Perez"
        date="Hoy"
        >
        </cards-element>

        </div>
        
        
        
        
        
        
        
        
        
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