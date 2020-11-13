import React, { useEffect, useRef } from 'react';

var mxg = require("mxgraph")({
    mxImageBasePath: "mxgraph/javascript/src/images",
    mxBasePath: "mxgraph/javascript/src"
});

const MxDemo = () => {

  const divGraph = useRef(null);

  let mxRubberband = mxg.mxRubberband
  let mxKeyHandler = mxg.mxKeyHandler        
  let mxUtils = mxg.mxUtils
  let mxEvent = mxg.mxEvent

  useEffect(() => {
    const container = document.querySelector("#mxcontainer")        
  
    let graph = new mxg.mxGraph(container);

    new mxRubberband(graph);
  
    let parent = graph.getDefaultParent();
  
    graph.getModel().beginUpdate();
  
    try {
        const v1 = graph.insertVertex(parent, null, 'Hello,', 400, 100, 100, 40);
        const v2 = graph.insertVertex(parent, null, 'World!', 600, 200, 100, 40);
        const e1 = graph.insertEdge(parent, null, '', v1, v2);
    } finally {
        graph.getModel().endUpdate();
    }
  })

  return (
    <div id="mxcontainer" style={{height:"400px", width:"1200px"}}>
      <h3>Simple Demo Created Using <b>mxgraph</b></h3>
    </div>
  );

}

export default MxDemo;
