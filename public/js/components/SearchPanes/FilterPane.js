import React from 'react'
import Pane from '../Pane/Pane'
import PaneHeader from '../PaneHeader/PaneHeader'
import SearchTrigger from '../SearchTrigger/SearchTrigger'
import {Button} from 'react-bootstrap'
import styles from './FilterPane.css'

class FilterPane extends React.Component{
  constructor(props){
    super(props);
  }
  
  onSearchEntered(value){
    this.props.onSearch(value);
  }
  
  componentWillMount(){
      styles.use();
  }
  componentWillUnmount(){
      styles.unuse();
  }
  
  render(){
    const {locals} = styles;
    var searchHeader = <PaneHeader>
                        <SearchTrigger onSearch={this.onSearchEntered.bind(this)} fieldValue={this.props.fieldValue}></SearchTrigger>
                       </PaneHeader>;
                       
        var searchContent = <div><label className={locals.FilterPane_label}>Filters</label>
                        <ul className='list-unstyled'>
                          <li className={locals.FilterPane_option} ><input type='checkbox' id='SearchPatronsCB'/> <label htmlFor='SearchPatronsCB'>Patrons</label></li>
                          <li className={locals.FilterPane_option} ><input type='checkbox' id='SearchStaffCB'/> <label htmlFor='SearchStaffCB'>Staff Members</label></li>
                        </ul>
                      <label className={locals.FilterPane_label}>Actions</label>
                        <ul className='list-unstyled'>
                          <li><Button block bsStyle={"primary"}>New Patron</Button></li>
                        </ul></div>;
    return(
            <Pane defaultWidth="20%" header={searchHeader} content={searchContent}>
              
            </Pane>
            )
  }
}

export default FilterPane