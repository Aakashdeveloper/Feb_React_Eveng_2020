// Get Default State
// Set Initial State
// Before Get Created
// Render Jsx
// After get created
// Before Losing context

import React, {Component} from 'react';

class LifeCycle extends Component {
    //1 Get Default State
    constructor(props){
        console.log(">>>>Inside constructor")
        super(props)

        //2 Set Initial State
        this.state={
            title:'Lifecycle'
        }
    }

    //3 Before Get Created
    componentWillMount(){
        console.log(">>>>Inside componentWillMount")
    }

    componentWillUpdate(){
        console.log(">>>>Inside componentWillUpdate")
    }

    componentDidUpdate(){
        console.log(">>>>Inside componentDidUpdate")
    }

    /////
    shouldComponentUpdate(nextProps, nextState){
        console.log(">>>>>Inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }
    ///////

    //4 Render Jsx
    render(){
        console.log(">>>>Inside render")
        return(
            <div>
                <h1>React Component {this.state.title}</h1>
                <div onClick={()=>{this.setState({title:'Something else'})}}>
                    Click
                </div>
            </div>
        )
    }

    //5 After get created
    componentDidMount(){
        console.log(">>>>Inside componentDidMount")
    }

    //6 Before Losing context
    componentWillUnmount(){
        alert('Your are leaving the page')
    }
}

export default LifeCycle;