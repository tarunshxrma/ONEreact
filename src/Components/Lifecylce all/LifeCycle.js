import React, {Component} from 'react'

class LifeCycleMethods extends Component {
    constructor(){
         super();
    this.state={
        count:0
    }
}
componentDidMount(){
    console.log("Hello World Component is Mounted");
}
componentDidUpdate(){
    console.log("Hello World component is updated");
}
componentWillUnmount(){
    console.log("Component is unmounted");
}
increment(){
    this.setState({count:this.state.count+1})
}
render(){
    return (
        <div>LifeCycle Methods:
            <div>{this.state.count}</div>
            <button onClick={()=>{this.increment()}}>Click Me</button>
            {/* <div style={{color:'red',backgroundColor:'blue'}}>{this.props.data}</div> */}
        </div>
    )
}

}

export default LifeCycleMethods
   
