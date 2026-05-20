// create a web component to achieve a task of your choice.

//example at https://jsfiddle.net/lairdp/o475u9zL

<click-counter></click-counter>

<script>
class ClickCounter extends HTMLElement {
  connectedCallback() {
    this._n = 0;
    this.innerHTML = `<button>Clicked 0 times</button>`;
    this.querySelector('button').addEventListener('click', () => {
      this._n++;
      this.querySelector('button').textContent = `Clicked ${this._n} times`;
    });
  }
}
customElements.define('click-counter', ClickCounter);
</script>
