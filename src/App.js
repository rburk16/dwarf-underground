import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Ad from './Ad'
import Article from './Article'
import ArticleBody from './ArticleBody'
import OtherArticles from './OtherArticles'

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

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>
      </div>
    );
  }
}

export default App;
