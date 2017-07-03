import React, { Component} from 'react'
import './ShareArticle.css'

class ShareArticle extends Component {
    render() {
        return (
            <div>
                <div className="article-links">
                    <a className="article-link" href="#">
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default ShareArticle