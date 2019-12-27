import React, { Component } from 'react'

const withSplitting = (getComponent) => {
  // getComponent is callback with ` () => require('./COMPONENT') `
  class LoadedComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Splitted: null
      }
      getComponent().then(({ default: Splitted }) => {
        this.setState({
          Splitted
        });
      });
    }

    render() {
      if (!this.state.Splitted) return null
      else return <this.state.Splitted {...this.props} />
    }
  }

  return LoadedComponent
}

export default withSplitting
