import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Ad from './Ad'
import Article from './Article'
import ArticleBody from './ArticleBody'
import OtherArticles from './OtherArticles'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <Article />
        <ArticleBody />
      </div>

      <Ad />

      <div className="small-12 columns other-articles">
        <OtherArticles />
      </div>
    </main>

    <Footer />
      </div>
    );
  }
}

export default App;