class HeaderElement extends HTMLElement {

    static get observedAttributes (){
        return ['tit', 'txt'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    //Default 
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this[name]=newValue; 
            this.render();
        }
    }


    render(){
        this.shadowRoot.innerHTML=`
        <style>
          header {
            background-color:rgb(0, 0, 0);
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          header {
    background-color:rgb(0, 0, 0);
    color: white;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    margin: 0;
    font-size: 24px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: 500;
}

nav a:hover {
    text-decoration: underline;
}
        </style>


        <header>
          <h1>${this.tit}</h1>
          <p>${this.txt}</p>
        </header>


        `;
    }
}

customElements.define('header-element', HeaderElement)

export default HeaderElement;