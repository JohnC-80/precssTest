import React from 'react';
import styles from './PaneButton.css';


class PaneButton extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentWillMount(){
      styles.use();
    }
    componentWillUnmount(){
        styles.unuse();
    }
    
    handleClick(e){
        e.preventDefault();
        this.props.onClick? this.props.onClick(e):null;
        
    }   
    
    render(){
        const {locals} = styles;
        return(<button className={locals.PaneButton} onClick={this.handleClick.bind(this)} title={this.props.title} >{this.props.children}</button>);
    }
}

export default PaneButton

