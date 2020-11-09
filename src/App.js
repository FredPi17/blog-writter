import React, { Component } from 'react';
import { init, exec } from 'pell';

import 'pell/dist/pell.css'

class App extends Component {
  editor = null

  constructor (props) {
    super(props)
    this.state = { html: null }
  }

  componentDidMount () {
    this.editor = init({
      element: document.getElementById('editor'),
      onChange: html => this.setState({ html }),
      defaultParagraphSeparator: "p",
      defaultContent: "Contenu par défault, changer ici !",
      actions: ['bold', 'italic', 'underline', 'strikethrough', 'paragraph', 'quote', 'heading1', 'heading2', 'olist', 'ulist', 'code', 'line', 'link', 'image',
    {
      name: 'justify full',
      icon: "J",
      title: 'Justify text',
      result: () => exec('justifyFull') 
    },
    {
      name: 'justify right',
      icon: "JR",
      title: 'Justify text right',
      result: () => exec('justifyRight') 
    },
    {
      name: 'justify left',
      icon: "JL",
      title: 'Justify text left',
      result: () => exec('justifyLeft')
    },
    {
      name: 'indent text',
      icon: "I",
      title: 'Indent text',
      result: () => exec('indent')
    },
    {
      name: 'outdent text',
      icon: "O",
      title: 'Outdent text',
      result: () => exec('outdent')
    },
  ],
    })
  }

  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">FP</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                  <span class="nav-item">Blog Writter</span>
                </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <div>
          <div className="App">
          <h3>Editor:</h3>
          <div id="editor" className="pell" />
          <br></br>
          <h3>HTML Output:</h3>
          <div id="html-output">{this.state.html}</div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;