import * as React from 'react'

export type ToggleProps = {
  on: boolean,
  toggle: () => void,
}

type Props = {
  initialState?: boolean,
  children: any,
  onToggle?: (nextState: boolean) => void,
}

/* Usage: 

<Toggle>
  {({ on, toggle }: ToggleProps) => (
    <Box />
  )}
</Toggle>

*/

export default class Toggle extends React.Component<Props> {

  constructor( props: Props ) {
    super(props)
    this.state.on = props.initialState ? props.initialState : false
  }

  state = {
    on: false,
  }

  render() {
    const childrenProps: ToggleProps = {
      on: this.state.on,
      toggle: this.toggle
    }
    return this.props.children(childrenProps)
  }

  toggle = () => {
    const { onToggle } = this.props
    const nextState = !this.state.on

    this.setState({ on: nextState })
    if (onToggle) onToggle(nextState)
  }

}
