import React, { Component} from 'react'
import './Ad.css'
import AdBody from './AdBody'

class Ad extends Component {
    render() {
        return (
            <aside className="large-4 medium-12 columns">
                <div className="ad">
                    <h3>The Last Hammer You'll Ever Need</h3>
                    <div className="ad-image">
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer" />
                        <a href="#">visit sponsor</a>
                    </div>
                    <AdBody />
                </div>
            </aside>

        )
    }
}

export default Ad