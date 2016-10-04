import React from 'react';
import styles from './LabelValue.css';

class LabelValue extends React.Component{
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
  return(
          <div className={locals.LabelValue_root}>
            <label className={locals.LabelValue_blocklabel}>{this.props.label}</label>
            <div>{this.props.value}</div>
          </div>
          );
  }
}

LabelValue.propTypes={
    label: React.PropTypes.string,
    value: React.PropTypes.node
};


export default LabelValue
