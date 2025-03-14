class CardsElement extends HTMLElement {

  static get observedAttributes (){
      return ['card1', 'card2', 'card3', 'card4', 'card5', 'cat6'];
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
          .card {
            display: block;
            background-color: white;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          
      </style>

        <div class="card">
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

customElements.define('cards-element', CardsElement)

export default CardsElement;
  