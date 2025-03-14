class MyNews extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .news-item {
            border-bottom: 1px solid #e0e0e0;
            padding: 10px 0;
          }
          .news-title {
            font-size: 1.25em;
            margin: 0;
            color: #1976d2;
          }
          .news-summary {
            color: #555;
            margin-top: 4px;
          }
        </style>
        <div class="news-item">
          <h2 class="news-title">My News</h2>
          <p class="news-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      `;
    }
  }
  
  customElements.define('my-news', MyNews);
  