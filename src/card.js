class CardsElement extends HTMLElement {

  static get observedAttributes (){
      return [ 'img', 'title', 'des', 'aut', 'cag', 'img2', 'date'];
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
            background-color: white;
            border-radius: 10px;
            border-color: #000000;
            border: 10px;
            width: 90%;
            height: auto;
            margin-left: 70px;
            margin-right: 70px;
          }

          .autor{
            display: flex;
            justify-content: space-between;
          }
          
          .autor3{
          display: flex;
          }

          .autor2{
          }

          .img22{
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin: 5px;
          }

          .text{
          margin: 30px 0px;
          }

          .img{
          width: 100%;
          border-top: 10px;

          }

          .datee{
          margin-right: 10px;
          }

          .text{
          margin: 10px;
          
          }

          cat{
          font-size: small;
          }

          
      </style>

        <div class="card">
          <div class="image">
            <img src="${this.img}" alt="" class="img">
          </div>


          <div class="text"
            <p class="cat">${this.cag}</p>
            <h1 class="tit">${this.title}</h1>
            <p class="desc">${this.des}</p>
          </div>
          
          <div class="autor">
          <div class="autor3">
            <img src="${this.img2}" alt="" class="img22">
            <p class="autor1">${this.aut}</p>
          </div>
              <div class="autor2">
              <p class="datee">${this.date}</p>
              </div>
          </div>
        </div>

      `;
  }
}

customElements.define('cards-element', CardsElement)

export default CardsElement;
  