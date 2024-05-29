class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Exquisite menu, inviting atmosphere</h1>
          <p class="hero-tagline">
            Indulge in tantalizing culinary sensations with our selection of
            high-quality dishes and charming ambiance at our restaurant
          </p>
        </div>
      </div>
          `;
  }
}

customElements.define('hero-bar', Hero);
