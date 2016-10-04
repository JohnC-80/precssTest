class Transition{
  constructor(object, propname, newValue, inState){
    
      window.setTimeout(()=>this.applyTransition(object, propname, newValue, inState), 10 );
   
  }
  
  applyTransition(object, propname, newValue, inState){
    if(!inState){
      object[propname] = newValue;
    }else{
      var newState = {};
      newState[propname] = newValue;
      object.setState(newState);
    }
    
  }
}

export default Transition

