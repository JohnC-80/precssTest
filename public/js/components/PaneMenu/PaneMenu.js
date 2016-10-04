import React from 'react'
import styles from './PaneMenu.css'

class PaneMenu extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        styles.use();
    }
    componentWillUnmount(){
        styles.unuse();
    }
    
    render(){
        const {locals} = styles;
        let style={};
        switch(this.props.align){
            case 'right':
                style.right = '4px';
                break;
            case 'left':
                style.left = '4px';
                break;
        }
        return(
                <div className={locals.PaneMenu} style={style}>
                    {this.props.children}
                </div>
                );
    }
}

PaneMenu.defaultProps = {
    align: 'right'
};

export default PaneMenu


