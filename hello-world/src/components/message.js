import React,{Component} from "react";

// const Hello = () => <div><h1>Hello From Vrutti</h1></div>
class Message extends Component{
    constructor(){
        super()
        this.state = {
            Message:'hello'
        }
    }
    changemsg(){
        this.setState({
            Message:'thanks'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changemsg()}>Suscribe</button>
            </div>
        )
    }
}


export default Message