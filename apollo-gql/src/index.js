import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
});

const GET_PRODUCTS = gql`
query product($id:Int)
{
    product(id:$id){
      name
      rating
    }
}`;


class ProductList extends Component {
    constructor(){
        super()

        this.state={
            id:4
        }
    }


    render(){
        return(
            <div>
                <Query query={GET_PRODUCTS} client={client} variables={{id:this.state.id}}>
                    {({loading,error,data}) => {
                        if(loading) return <p>Loading....</p>
                        if(error) return <p>error...</p>
                        return(
                            <React.Fragment>
                                <center>
                                    <h3>GraphQl</h3>
                                    <p>{data.product.name}</p>
                                    <p>{data.product.rating}</p>
                                </center>
                            </React.Fragment>
                        )
                    }}
                </Query>
            </div>
        )
    }
}


ReactDOM.render(<ProductList/>,document.getElementById('root'));