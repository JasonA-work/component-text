# Text Component

This package contains a single module that exports a `Text` component. The `Text` component is a versatile text rendering component that can render various HTML heading tags (`<h1>` to `<h6>`) or a paragraph `<p>`.

## Installation

To install the package, use pnpm:

```sh
pnpm dlx jsr add @witt/text
```

## Usage

Here is an example of how to use the Text component in your project:

```js
import React from "react"
import Text from "@witt/text"

function App() {
  return (
    <div>
      <Text tag="h1" className="heading">
        This is a heading
      </Text>
      <Text className="paragraph">This is a paragraph</Text>
    </div>
  )
}

export default App
```

## Props

The Text component accepts the following props:

1. tag (optional): Specifies the HTML tag to render. It can be one of "h1", "h2", "h3", "h4", "h5", "h6", or "p". The default value is "p".
2. className: A string of CSS class names to apply to the element.
3. children: The content to be rendered inside the element.
4. props: Any other standard HTML attributes for the rendered HTML element.

```js
import React from "react"
import Text from "@witt/text"

function Example() {
  return (
    <div>
      <Text tag="h2" className="title">
        Example Heading
      </Text>
      <Text className="body-text">
        This is an example paragraph demonstrating the usage of the Text
        component.
      </Text>
    </div>
  )
}

export default Example
```

## License

This project is licensed under the MIT License.
