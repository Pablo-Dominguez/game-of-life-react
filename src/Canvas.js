import React, { useRef,useEffect,useState,Component } from 'react'
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";


class ColoredRect extends React.Component {
  state = {
    color: "#bfbfbf"
  };
  
  handleClick = () => {
    var new_color = this.state.color == '#bfbfbf' ? '#3b5360' : '#bfbfbf';
    this.setState({
      color: new_color
    });
  };
  render() {
    return (
      <Rect
        x={parseInt(this.props.x)}
        y={parseInt(this.props.y)}
        width={parseInt(this.props.size)}
        height={parseInt(this.props.size)}
        fill={this.state.color}
        shadowBlur={0}
        onClick={this.handleClick}
        cornerRadius={6}
      />
    );
  }
}


function Canvas(props) {
    
    const grid = []
    var i;
    
    
    for (i = 0; i < parseInt(props.rows);i++) {
        const x_value = 20+30*i+30*i*(0.17);
        grid.push({x:x_value, y: 0,size:30, key:i});
    }
    
    const [square, setSquares] = React.useState(grid);
//     <ColoredRect x="20" y="0" size="30" />
//     <ColoredRect x={square.x} y={square.y} size={square.size} key={square.key}/>
    
    const targets = grid.map((square, index) => {
            return <ColoredRect x={square.x} y={square.y} size={square.size} key={square.key}/>;                
    });

    return (
       <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            {targets}
        </Layer>
      </Stage>
    );
};

export default Canvas
