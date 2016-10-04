import React from 'react'
import PaneHeader from '../PaneHeader/PaneHeader'
import {Button, Grid, Row, Col} from 'react-bootstrap'
import styles from './MultiColumnList.css';



class MultiColumnList extends React.Component{
  constructor(props){
    super(props);
    this.state={
        selected:-1
    };
  }
  
  componentWillMount(){
      styles.use();
  }
  componentWillUnmount(){
      styles.unuse();
  }
  
  onClickItem(key){
      this.setState({selected:key});
      this.props.onItemSelect(key);
  }
  
  isSelected(key){
      if(this.state.selected === key){
          return styles.locals.MultiColumnList_selected;
      }else{
          return null;
      }
  }
  
  render(){
    const {locals} = styles;
    //controls
    var controls;
    if(this.props.columnsTrigger){
        controls = null;
    }else{
        controls = <div style={{float:'right'}}><Button bsStyle="primary" bsSize="xsmall" title={"Show/Hide Data Columns"}>
                ...
            </Button></div>
    }
    
    //render content from contentData....
    var listItems = [];
    var columnHeaders;
    
    this.props.contentData.map(function(item, i){
        var listItem = [];
        var format = this.props.formatter(item);
        var headers = [];
        var headerCells = [];
        
        if(this.props.columnOrder){
            var columns = this.props.columnOrder;
        
            for(var j = 0; j < columns.length; j++){
                //update listing headers  
                  if(headers.indexOf(columns[j]) === -1 && this.props.defaultHidden.indexOf(columns[j]) === -1){
                    headers.push(columns[j]);
                  }

                  //create value cells...
                  if(this.props.defaultHidden.indexOf(columns[j]) === -1){
                  if(format.hasOwnProperty(columns[j])){
                    listItem.push(<td key={columns[j]}>{format[columns[j]](item)}</td>);
                  }else{
                    listItem.push(<td key={columns[j]}>{item[columns[j]]}</td>);  
                  }
                }
            }
        }else{
            for(var prop in item){

                  //update listing headers  
                  if(headers.indexOf(prop) === -1 && this.props.defaultHidden.indexOf(prop) === -1){
                    headers.push(prop);
                  }

                  //create value cells...
                  if(this.props.defaultHidden.indexOf(prop) === -1){
                  if(format.hasOwnProperty(prop)){
                    listItem.push(<td key={prop}>{format[prop](item)}</td>);
                  }else{
                    listItem.push(<td key={prop}>{item[prop]}</td>);  
                  }
               }
            }
        }
        listItems.push(<tr key={i} onClick={this.onClickItem.bind(this, i)} className={this.isSelected(i)}>{listItem}</tr>);
        headers.map((header, i)=> headerCells.push(<th key={i}>{header}</th>), this);
        columnHeaders = <tr>{headerCells}</tr>;
          
        
    }, this);
    
    return(
            <div>
                <table className={locals.MultiColumnList_table}>
                <thead>{columnHeaders}</thead>
                <tbody>{listItems}</tbody>
                </table>
            </div>
            );
  }
}

MultiColumnList.propTypes={
    contentData:React.PropTypes.arrayOf(React.PropTypes.object),
    formatter:React.PropTypes.func,
    defaultHidden: React.PropTypes.array,
    columnOrder: React.PropTypes.array
};

export default MultiColumnList