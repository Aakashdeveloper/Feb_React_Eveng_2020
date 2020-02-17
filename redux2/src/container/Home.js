import React,{Component} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews} from '../actions';
import { bindActionCreators } from 'redux';

import LatestDisplay from '../component/Home/latestdisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';


class Home extends Component{
    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews()
    }

    render(){
        return(
            <div>
                <LatestDisplay latdata={this.props.datalist.latestdata}/>
                <ArticleDisplay artdata={this.props.datalist.articledata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);