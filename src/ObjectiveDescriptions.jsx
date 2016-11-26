import React, {Component} from 'react';
import { connect } from 'react-redux';

class ObjectiveDescriptions extends Component {


  render() {
    console.log("Rendering <ObjectiveDescriptions />");
    
    // var realTable = document.getElementById('real-table');

    // var realTable = this.refs.realtable

    // console.log("realTable", realTable)

    // const divStyle = {
    //     width: realTable.offsetWidth + 'px',
    //     left: realTable.offsetLeft + 'px',
    // }
    // const divStyle = {
    //     width: 300 + 'px',
    //     left: 100 + 'px',
    //   }

    // movingRow.style.width = realTable.offsetWidth + 'px';
    // movingRow.style.left = realTable.offsetLeft + 'px';

    // setOffset() {
    //   ReactDOM.findDOMNode(this.refs.REFNAME);
    // }

    return (
      
      <div>
        
        <div 
          id="realtable"
          ref="REFNAME"
          className={ `r${this.props.row} draggable ${this.props.being_dragged ? 'being-dragged' : '' } ` } >
          <div className="objective-name-container">
            <div className="table-area">
              <label className="objective-name">{this.props.name}</label><br />
              <label className="sub-objective-name">*{this.props.subname}</label>
            </div>
          </div>

          { this.props.objectives.map((item, index) => {
            // if(this.props.row === item.id) {
            // checks order of objectives to assign unit symbol
            if(this.props.row === item.order) {
              if(item.unit_suffix === null) {
                return <label key={item.id} className="units">{item.unit_suffix}</label>
              } else {
                return <label key={item.id} className="units">{item.unit_prefix}</label>
              }
            }
          })}
        </div>

        <div 
          id="moving-row" 
          className={`r${this.props.row} table-container-component movable ${this.props.being_dragged ? '' : 'hidden' } TESTX ${this.props.clientX} TESTY ${this.props.clientY} `} 
          style={{width: `${this.refs.REFNAME ? this.refs.REFNAME.offsetWidth : ''}` + 'px', left: `${this.refs.REFNAME ? this.refs.REFNAME.offsetLeft : ''}` + 'px', top: `${this.refs.REFNAME ? this.refs.REFNAME.offsetTop : ''}` + 'px'}} 
          >
          
          <div className="objective-name-container">
            <div className="table-area">
              <label className="objective-name">{this.props.name}</label><br />
              <label className="sub-objective-name">*{this.props.subname}</label>
            </div>
          </div>

          { this.props.objectives.map((item, index) => {
            if(this.props.row === item.order) {
              if(item.unit_suffix === null) {
                return <label key={item.id} className="units">{item.unit_suffix}</label>
              } else {
                return <label key={item.id} className="units">{item.unit_prefix}</label>
              }
            }
          })}
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    objectives: state.objectives
  }
}

function mapDispatchToProps(dispatch) {
  return {
    somePropFunction: function() {
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ObjectiveDescriptions);
