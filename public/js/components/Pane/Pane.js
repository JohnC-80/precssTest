import React from 'react'
import Transition from '../../util/transition'
import PaneHeader from '../PaneHeader/PaneHeader'
import styles from './Pane.css';

class Pane extends React.Component{
    constructor(props){
        super(props);
        
           
        this.state={
            width: this.props.slideOpen? "0%" : this.props.defaultWidth
        };
    }
    
    componentWillMount(){
      styles.use();
    }
    componentWillUnmount(){
      styles.unuse();
    }
    
    componentDidMount(){
      if(this.props.slideOpen){ 
        new Transition(this, "width", this.props.defaultWidth, true);
      }
         
    }
    
    render(){
        
        const {locals} = styles;
        var {children, ...headerProps} = this.props;
        
        var header = this.props.header || <PaneHeader {...headerProps}></PaneHeader>;
        var content = this.props.content || [];
        
        return(
                
                <div className={locals.Pane} style={{width: this.state.width}}>
                    {header}
                    <div className={locals.Pane_content}>
                      {content}
                    </div>
                    <div className={locals.Pane_resizer}></div>
                </div>
              );
    }
}

Pane.propTypes = {
    defaultWidth: React.PropTypes.string,
    slideOpen: React.PropTypes.bool,
    header: React.PropTypes.node,
    content: React.PropTypes.node,
    menu: React.PropTypes.node,
    closeTrigger: React.PropTypes.node
};

export default Pane
