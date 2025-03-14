class DialElement extends HTMLElement {

    static get observedAttributes (){
        return ['dia1', 'dia2', 'dia3'];
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

         .dial {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px 0;
          }
          label {
            margin-bottom: 8px;
            font-weight: 500;
          }
          select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

        </style>

        <div class="dial">
            <div>
                <select>
                <option value="1">${this.dia1}</option>
                <option value="2">${this.dia2}</option>
                <option value="3">${this.dia3}</option>
                </select>
            </div>
        </div>

        `;
    }
}

customElements.define('dial-element', DialElement)

export default DialElement;