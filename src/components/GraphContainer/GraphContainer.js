import React,{Component} from 'react';
import cytoscape from 'cytoscape';

import { bindActionCreators } from 'redux';

class GraphContainer extends React.Component{
    constructor(props){
        super(props);
        this.renderCytoscapeElement = this.renderCytoscapeElement.bind(this);
    }

    renderCytoscapeElement(){

        console.log('* Cytoscape.js is rendering the graph..');

        this.cy = cytoscape(
        {
            container: document.getElementById('cy'),

            boxSelectionEnabled: false,
            autounselectify: true,
            zoom: 1,

            style: cytoscape.stylesheet()
                .selector('node')
                .css({
                    'height': 80,
                    'width': 80,
                    'border-color': '#000',
                    'border-width': 3,
                    'border-opacity': 0.5,
                    'label': 'data(id)',
                    'text-valign': 'center',
                })
                .selector('edge')
                .css({
                    'width': 6,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#ffaaaa',
                    'target-arrow-color': '#ffaaaa',
                    'curve-style': 'bezier'
                })
                ,
            elements: {
                nodes: [
                    { data: { id: 'Electricity' } },
                    { data: { id: 'Conductor' } },
                    { data: { id: 'Insulator' } },
                    { data: { id: 'Semiconductor' } },
                    { data: { id: 'Semimetal' } },
                    { data: { id: 'Electron' } },
                    { data: { id: 'Energy' } },
                ],
                edges: [
                    { data: { source: 'Electricity', target: 'Conductor' } },
                    { data: { source: 'Electricity', target: 'Insulator' } },
                    { data: { source: 'Electricity', target: 'Semiconductor' } },
                    { data: { source: 'Electricity', target: 'Semimetal' } },
                    { data: { source: 'Electricity', target: 'Electron' } },
                    { data: { source: 'Electron', target: 'Semiconductor' } },
                    { data: { source: 'Semiconductor', target: 'Semimetal' } },
                    { data: { source: 'Energy', target: 'Electricity' } }
                ]
            },

            layout: {
                name: 'breadthfirst',
                directed: true,
                padding: 10
            },
            
            }); 
    }

    componentDidMount(){
        this.renderCytoscapeElement();
    }

render() {
  let cyStyle = {
    height: '15rem',
    width: '23rem',
    position: 'relative', 
  };

  return (
    <div>
      <div style={cyStyle} id="cy"/>
    </div>
  );
}
}



export default GraphContainer;
