import React, { Component } from 'react'

class ClassCountUse extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
        name:''
      }
    }
    //INIT TITLE TAG
    componentDidMount(){
        document.title =`Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevprop,prevstate){
        if(prevstate.count !== this.state.count ){
            console.log("UPDATE")
            document.title =`Clicked ${this.state.count} Times`
        }
    }

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e => {
            this.setState({
                name:e.target.value
            })
        }}/>
        <button onClick={() => this.setState({count: this.state.count + 1})}> Click {this.state.count} times </button>
      </div>
    )
  }
}

export default ClassCountUse
