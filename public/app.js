import React from 'react'
import ReactDOM from 'react-dom'
import Paneset from './js/components/Paneset/Paneset'

import FilterPane from './js/components/SearchPanes/FilterPane'
import ResultsPane from './js/components/SearchPanes/ResultsPane'
import DetailsPane from './js/components/SearchPanes/DetailsPane'
import MultiColumnList from './js/components/MultiColumnList/MultiColumnList'

import Ajax from './js/util/ajax'

import styles from './scss/_globals.css'


class SearchApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searched: false,
            searchTerm: "",
            detailIndex:-1,
            opendd:false,
            hiddenColumns:['_id', 'index', 'guid', 'isActive', 'balance', 'picture', 'company', 'email', 'address', 'phone', 'about', 'registered','age'],
            columnOrder:['picture', 'name', 'address', 'phone', 'email', 'age', 'company', 'fines', 'about'],
            
            results:[{
                "picture": "http://placehold.it/32x32",
                "age": 27,
                "name": {
                  "first": "Ashley",
                  "last": "Jackson"
                },
                "company": "OCEANICA",
                "email": "ashley.jackson@oceanica.name",
                "phone": "+1 (803) 582-3360",
                "address": {
                  "street": "679 Bainbridge Street",
                  "city": "Rodanthe", 
                  "country": "Federated States Of Micronesia",
                  "postalCode":"376"
                },
                "fines":"$14.50"
              }
            ]
        };
    }
    
    componentWillMount(){
        styles.use()
    
        Ajax.getJSON('data/persons.json').success(function(d){
            this.setState({results:JSON.parse(d)});
        }, this);
    }
    componentWillUnmount(){
        styles.unuse()
    }
    onEnterSearch(value){
        //alert("search entered");
        this.setState({
            searched: true,
            searchTerm: value
        })
    }
    
    formatter(item){
      return {
        name: (item) => <div>{item.name.first} {item.name.last}</div>,
        picture: (item) => <img src={item.picture}></img>,
        address: (item) => <div>{item.address.street}<br/>{item.address.city}, {item.address.state || item.address.country}<br/>{item.address.postal}</div>
      };
    }
    
    getResultsString(){
      if(this.state.results.length !== 0){
        return this.state.results.length +" Results Found";
      }else{
        if(this.state.searchTerm === ""){return "";}
        if(this.state.results.length === 0){return "No Results Found";}
      }
    }
    
    showDetails(index){
        this.setState(
                {
                    detailIndex:index
                }
        );
    }
    
    closeDetails(){
        this.setState(
                {detailIndex: -1}
                );
    }
    
    updateState(nextState){
      this.setState(nextState);
    }
    
    render(){
        var resultsPane, detailPane;
        
        if(this.state.searched){
          resultsPane = <ResultsPane 
                          slideOpen={true} 
                          defaultWidth={"35%"} headerText={this.state.searchTerm} 
                          headerSubText={this.getResultsString()}
                          columnOrder={this.state.columnOrder}
                          hiddenColumns={this.state.hiddenColumns}
                          update={this.updateState.bind(this)}
                        >
                          <MultiColumnList contentData={this.state.results} formatter={this.formatter} defaultHidden={this.state.hiddenColumns} columnsTrigger={this.resultColumnsButton} columnOrder={this.state.columnOrder} onItemSelect={this.showDetails.bind(this)}>
                          </MultiColumnList>
                        </ResultsPane>;
        }else{
            resultsPane = null;
        }
        
        if (this.state.detailIndex !== -1){
            const data = this.state.results[this.state.detailIndex];
            const formatter =  this.formatter();
            detailPane = <DetailsPane 
                            defaultWidth={'50%'} slideOpen={true}
                            headerText={formatter.name(data)}
                            headerSubText="Patron"
                            formatter={formatter}
                            data={data}
                            onClose={this.closeDetails.bind(this)}
                          >
                          </DetailsPane>;
        }else{
            detailPane = null;
        }
    
        return(
                <div style={{display: 'flex', height:'100%', width: '100%', flexDirection:'column', justifyContent:'flex-start' }}>
                  <div style={{height: '45px', minHeight: '45px', flexBasis:'45px', width:'100%', borderBottom:'2px solid #444'}}><h5 style={{marginLeft:"10px"}}><strong>Users</strong></h5></div>
                  <div style={{display: 'flex', flexDirection:'column', flexGrow:1, width:'100%', height:"80%" }}>
                    <Paneset>
                      <FilterPane onSearch={this.onEnterSearch.bind(this)} fieldValue={this.state.searchTerm}></FilterPane>
                      {resultsPane}
                      {detailPane}
                    </Paneset>
                  </div>
                </div>
                );
    }
}

ReactDOM.render(
        <SearchApp/>,
        document.getElementById('app')
        );

