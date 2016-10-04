import React from 'react'
import Pane from '../Pane/Pane'
import PaneHeader from '../PaneHeader/PaneHeader'
import PaneMenu from '../PaneMenu/PaneMenu'
import PaneButton from '../PaneButton/PaneButton'
import LabelValue from '../LabelValue/LabelValue'
import {Row, Col, Grid, Glyphicon} from 'react-bootstrap'
import styles from './users.css'

class DetailsPane extends React.Component{
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
    var data= this.props.data;
    
    var detailMenu =<PaneMenu>
                        <PaneButton title="Close Details" ref={(ref)=>this.closeButton = ref} onClick={this.props.onClose.bind(this)}>
                            <Glyphicon glyph="remove" style={{fontSize:20, color:'#777'}}/>
                        </PaneButton>
                        <PaneButton ref={(ref)=>this.resultColumnsButton = ref} title="Send a Message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10.3 19.8l0.1-5.8H3c-1.5 0-2.7-1.2-2.7-2.7v-8c0-1.5 1.2-2.7 2.8-2.7h14c1.5 0 2.8 1.2 2.8 2.8v8c0 1.5-1.2 2.8-2.7 2.8h-0.9L10.3 19.8zM3 2c-0.7 0-1.2 0.6-1.2 1.3v8c0 0.7 0.6 1.3 1.3 1.3h8.9l-0.1 3.6 3.6-3.6H17c0.7 0 1.3-0.6 1.3-1.2v-8c0-0.7-0.6-1.2-1.2-1.2H3z" fill="#666766"/></svg>
                        </PaneButton>
                        <PaneButton ref={(ref)=>this.bookmarkButton = ref} title="Set Bookmark">
                            <Glyphicon glyph="bookmark" style={{fontSize:20, color:'#777'}} />
                        </PaneButton>
                    </PaneMenu>
    
    var detailTitle=<div className="text-center"><div className={locals.paneHeading}>{this.props.headerText}</div><div>{this.props.headerSubText}</div></div>;

    var detailContent =   <Grid fluid={true}>
                            <Row>
                                <Col sm={6} md={4}>
                                  <img src={data.picture} width="100%" height="100%"/>
                                </Col>  
                                <Col sm={6} md={8}>
                                <Row>
                                  <Col sm={12}>
                                    <LabelValue label={"Address"} value={this.props.formatter.address(data)}/>
                                  </Col>
                                  <Col sm={12}> 
                                    <LabelValue label={"Email"} value={data.email}/>
                                  </Col>
                                  <Col sm={12}>
                                    <LabelValue label={"Fines"} value={data.fines}/>
                                  </Col>
                                </Row>
                                </Col> 
                              </Row> 
                          </Grid>;   
    
    
    return(<Pane heading={detailTitle} menu={detailMenu} content={detailContent} defaultWidth={this.props.defaultWidth} slideOpen={this.props.slideOpen}>
            
            </Pane>);
  }
}

export default DetailsPane