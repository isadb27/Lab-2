class MyDial extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
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
          <label>My Dial</label>
          <select>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
            <option value="3">Opción 3</option>
          </select>
        </div>
      `;
    }
  }
  
  customElements.define('my-dial', MyDial);
  