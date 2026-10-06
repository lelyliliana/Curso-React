import { Component } from "react";
export default class LimiteError extends Component {
  state = { fallo: false };
  static getDerivedStateFromError() {
    return { fallo: true };
  }
  render() {
    return this.state.fallo ? (
      <div role="alert">
        <p>Este componente no pudo mostrarse.</p>
        <button type="button" onClick={this.props.onReintentar}>
          Reintentar componente
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}
