import React from 'react';
import styles from './PaneHeader.css'

class PaneHeader extends React.Component{
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
        const {locals} = styles;
        var heading = this.props.heading;
        var menu = this.props.menu;
        var content;
        
        if(this.props.children){
            content=this.props.children;
        }else{
            content=<div className={locals.PaneHeader_content}>{heading}{menu}</div>;
        }
        
        return(<div className={locals.PaneHeader_headerbox}>
                {content}
                </div>);
    }
}

export default PaneHeader
