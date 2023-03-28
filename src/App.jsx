import React, { Component } from 'react'
import Car from './Car';
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
]


export default class App extends Component {
  state = {
    count: 0
  }

  render() {
   
    return (
      <div>
        {
        // cars &&
        // cars.map((car) => {
        //     return (
        //         <Car color={car.color} type={car.type} registration={car.registration} capacity={car.capacity} />
        //     );
        // })
        
      }

      <div>{this.state.count}</div>
      <button onClick={()=>{
        this.setState(()=> ({count: this.state.count+1})
        );
        // this.state.count += 1;
      }}>Click</button>
      </div>
    )
  }
}
