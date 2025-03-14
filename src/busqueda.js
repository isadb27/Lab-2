class SearchElement extends HTMLElement {

  static get observedAttributes (){
      return ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'];
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
          .search-container {
            display: flex;
            justify-content: center;
            margin: 20px 0;
          }
          input[type="text"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 300px;
            font-size: 16px;
          }
          button {
            padding: 10px 15px;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 4px;
            margin-left: 10px;
            cursor: pointer;
            font-size: 16px;
          }
          button:hover {
            background-color: #155a8a;
          }

          
      </style>

        <div class="button">
        <button class="butoption">${this.cat1}</button>
        <button class="butoption">${this.cat2}</button>
        <button class="butoption">${this.cat3}</button>
        <button class="butoption">${this.cat4}</button>
        <button class="butoption">${this.cat5}</button>

        </div>

        <div class="search-container">
          <input type="text" placeholder="Buscar">
          <button class="butsearch">${this.cat6}</button>
        </div>

      `;
  }
}

customElements.define('search-element', SearchElement)

export default SearchElement;