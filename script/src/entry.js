

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [1,2,3],
      en: ['aa', 'bb', 'cc']
    }
  }

  click() {
    this.state.list.reverse()
    this.setState({})
  }
  render() {
    return (
            <ul>
            fff
                {
                  this.state.list.map(function(item) {
                    return (
                            <li >
                                {item}
                                <div>{this.state.en[item]}</div>
                            </li>
                    )
                  })
                }
            </ul>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))




// import React from 'react';

// export default class App extends React.Component {
//   constructor() {
//     super();
//     const aa = 11
//     this.state = {
//       ischeck: false,
//       bb: `${aa}`
//     }
//     this.change = this.change.bind(this)
//   }

//   change() {
//     this.setState({
//       ischeck: !this.state.ischeck
//     })
//   }
//   componentDidMount () {
//     console.log('done')
//   }
  
//   render() {
//     return (<label>
//       <input
//       type="checkbox"
//       checked={this.state.ischeck}
//       onChange={this.change}
//       />
//       {this.state.ischeck ? this.props.labelon : this.props.labeloff}
//     </label>);
//   }
// }
// App.displayName = 'App';


