import React, {Component} from 'react';
const MyContext = React.createContext();


class MyProvider extends Component {
    state={
        city:'London'
    }
    
    render(){
        return(
            <MyContext.Provider value={{
                state:this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

/*
<div>
    <p passdata></p>
</div>
*/

class City extends Component{

    render(){
        return(
            <div className="city">
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi to {context.state.city}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class City1 extends Component{
    render(){
        return(
            <div className="city">
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi to {context.state.city} 2</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

const Country = () => {
    return(
        <div className="country">
           <span>This is my nested child 1</span><City/> 

           <p>This is my nested child 2</p><City1/>
           <p>Hi p1 </p><p>Hi p2 </p>
           <span>Hi p1 </span><span>Hi p2 </span>
        </div>

    )
}


class ContextComponent extends Component {
    render(){
        return(
            <MyProvider>
                <div>
                    <p>This is Context Component</p>
                    <Country/>
                </div>
            </MyProvider>
        )
    }
}


export default ContextComponent;