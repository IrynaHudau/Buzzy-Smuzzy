import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Auxilliry';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSidedrawer:false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSidedrawer:false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer}
        });
    }

    render(){
        return(
            <Aux>
            {/* <div>
                Toolbar,SideDraver,Backdrop
            </div> */}
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSidedrawer} 
                    closed={this.sideDrawerCloseHandler}
                />
                <main className={'Content'}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);