//Using react-bootstrap's dropdown...
import React from 'react';
import ReactDOM from 'react-dom'
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper'
import styles from './PaneDropdownMenu.css'

class PaneDropdownMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = e => this.setState({ value: e.target.value });

    this.state = { value: '' };
  }
  
  componentWillMount(){
      styles.use();
  }
  componentWillUnmount(){
      styles.unuse();
  }
  
  focusNext() {
   
  }

  render() {
    const {locals} = styles; 
    const { value } = this.state;
    
    var position = {
        left:this.props.pullRight? 'initial':'0',
        display: this.props.open? 'block':'none',
        right: this.props.pullRight? '0':'initial'
    };
    
    var menu = <div className={locals.PaneDropdownMenu} style={position}>
              <ul className="list-unstyled">
                {React.Children.toArray(this.props.children).filter(child => (
                  !value.trim() || child.props.children.indexOf(value) !== -1
                ))}
              </ul>
            </div>
    
    if(this.props.open){
      return (
              <RootCloseWrapper noWrap={true} onRootClose={this.props.onToggle}>
              {menu}
              </RootCloseWrapper>
              )
    }
    
    return menu;
  }
}

export default PaneDropdownMenu