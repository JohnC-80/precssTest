import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import styles from './SearchTrigger.css'

class SearchFilter extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  onChangeText(){
    if(this.textInput.value === ""){
          this.textInput.className = styles.locals.SearchFilter_input;
          this.clearButton.style.display = 'none';
      }else{
          this.textInput.className = styles.locals.SearchFilter_input_textEntered;
          this.clearButton.style.display = 'block';
      }
  }
  
  handleKeyPress(e){
      if(e.key === 'Enter'){
          this.props.onSearch(this.textInput.value);
      }
  }
  
  clearSearch(){
    this.textInput.value ="";
    this.clearButton.style.display = 'none';
  }
  
  componentWillMount(){
      styles.use();
  }
  componentWillUnmount(){
      styles.unuse();
  }
  
  render(){
  const {locals} = styles;
    return(<div className={locals.SearchFilter_root} ref={(ref)=>this.root = ref}>
                <button className={locals.SearchFilter_searchButton} ref={(ref)=> this.searchIcon = ref}>
                    <span className={locals.SearchFilter_searchIcon}><Glyphicon glyph="search"/></span>
                </button>
                <input type='text' ref={(ref)=>this.textInput = ref} className={locals.SearchFilter_input} onChange={this.onChangeText.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
                <button className ={locals.SearchFilter_clearButton} ref={(ref)=> this.clearButton = ref} onClick={this.clearSearch.bind(this)} title="Clear Search Field">
                        <span className={locals.SearchFilter_clearIcon}><Glyphicon glyph="remove-circle" /></span>
                </button>
            </div>
            );
  }
}

export default SearchFilter


