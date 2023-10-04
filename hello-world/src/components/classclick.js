import React,{Component} from "react";

class ClassClick extends Component{
    clickhandle(){
        console.log('btn2')
    }

    render(){
        return (
            <div>
                <button onClick={this.clickhandle}>Click</button>
            </div>
        )
    }
}

export default ClassClick