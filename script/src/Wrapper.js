import React from 'react'

    static childContextTypes = {
	    addInner: React.PropTypes.any
	}

export default class Wrapper extends React.Component{


	constructor(props, context) {
		super(props)
		this.state = {
			inners: []
		}
		this.addInner = this.addInner.bind(this)
	}

	getChildContext() {
		return {
			addInner: this.addInner.bind(this)
		}
	}

	addInner(inner) {
		this.state.inners.push(inner)
	}

	render() {
		console.log('children', this.props.children)
		console.log('state', this.state.inners)
		return (
			<div>
			 {this.props.children}
             {
             	this.state.inners.map((item, index) => {
             		console.log('item', item);
             		return <div key={index}>
             		    aaaa
             		</div>
             	})
             }
            </div>
		)
	}
}

Wrapper.childContextTypes = {
	addInner: React.PropTypes.any
}