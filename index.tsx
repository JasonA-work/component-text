/**@module This is the only module of the package. It is a text component that renders various HTML heading tags or a paragraph. */

import React from "react"

interface Props extends React.HTMLAttributes<HTMLElement> {
  /** HTML tag to render. Defaults to "p". */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"

  /** CSS class name(s) to apply to the element. */
  className: string

  /** The content to be rendered inside the element. */
  children: React.ReactNode
}

/**
 * This component accepts all standard HTML attributes for an HTMLElement
 * via the `props` object, thanks to extending `React.HTMLAttributes<HTMLElement>`.
 *
 * @param {Props} props - Props for the component.
 * @returns {React.ReactElement } The rendered HTML element.
 */
export default function Text({
  tag = "p",
  className = "",
  children,
  ...props
}: Props): React.ReactElement {
  const Element = tag

  return (
    <Element className={className ? className : ""} {...props}>
      {children}
    </Element>
  )
}
