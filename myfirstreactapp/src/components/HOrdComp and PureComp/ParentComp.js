import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
export class ParentComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "its me"
        }
      }
      componentDidMount(){
        setInterval(()=>{
            this.setState({name:"igdcgfxdts me"})
        },2000)
      }
  render() {
    return (
      <div>this is ParentComp
        <PureComp name={this.state.name}/>
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp