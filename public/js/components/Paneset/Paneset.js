import React from 'react'
import styles from './Paneset.css'

class Paneset extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
      styles.use();
    }
    componentWillUnmount(){
        styles.unuse();
    }
    
    render(){
        const {locals} = styles
        return(
                <div className={locals.Paneset} >{this.props.children}</div>
                );
    }
}

export default Paneset
    