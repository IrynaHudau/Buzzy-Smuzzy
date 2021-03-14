import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component{
        state = {
            compoment:null
        }

        componentDidMount(){
            importComponent()
                .then(cmp => {
                        this.setState({compoment:cmp.default});
                });
        }

        render(){
            const C = this.state.compoment;
            return C ? <C {...this.props}/> : null;
        }
    }
}

export default asyncComponent;