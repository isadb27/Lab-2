class MySearch extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
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
        <div class="search-container">
          <input type="text" placeholder="Buscar...">
          <button>Buscar</button>
        </div>
      `;
    }
  }
  
  customElements.define('my-search', MySearch);
  