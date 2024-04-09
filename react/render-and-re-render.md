# Render and Re-render

## Render

Render is just all about JSX component. You `trigger` to render, React `renders`, and the component `commits` to the DOM.

See [this](https://react.dev/learn/render-and-commit).

What is rendering though?

It is a term for process, where React creates/manipulates the elements in the DOM.

### `trigger`

The rendering is triggered when:

1. The component is initialized. (first loaded to browser)
2. The [state](./state.md) of the component or parents' is updated.

Basically, either component init or state update -> render -> commit to DOM.

### `render`

React renders the component, and its child, and its child, and so forth, which is- recursive.

On re-renders, React calculates the diff between previous render, and move to the `commit` phase.

### `commit`

React uses ([appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) on the initial render, which creates the needed elements.
