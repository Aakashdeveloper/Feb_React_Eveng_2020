import React,{Component} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews,galleryNews} from '../actions';
import { bindActionCreators } from 'redux';

import LatestDisplay from '../component/Home/latestdisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';
import GalleryDisplay from '../component/Home/GalleyDisplay';



class Home extends Component{
    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews();
        this.props.galleryNews();
    }

    render(){
        return(
            <div>
                <LatestDisplay latdata={this.props.datalist.latestdata}/>
                <ArticleDisplay artdata={this.props.datalist.articledata}/>
                <GalleryDisplay galdata={this.props.gallist.gallerydata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallist:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);