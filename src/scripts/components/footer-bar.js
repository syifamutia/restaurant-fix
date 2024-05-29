class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright &#169; 2024 | Syifa Rizki Mutia</p>
        `;
  }
}

customElements.define('footer-bar', footerBar);
