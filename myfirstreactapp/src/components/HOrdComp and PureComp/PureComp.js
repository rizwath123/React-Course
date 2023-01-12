import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    
    console.log("Purecomp")
    return (
      <div>PURE COMPONETN{this.props.name}</div>
    )
  }
}

export default PureComp