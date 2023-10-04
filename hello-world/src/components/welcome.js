import React,{Component} from "react";

// const Hello = () => <div><h1>Hello From Vrutti</h1></div>
class Welcome extends Component{
    render() {
        return <h1>{this.props.name}</h1>
    }
}


export default Welcome