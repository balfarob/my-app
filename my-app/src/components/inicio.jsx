import React from 'react';
import imagen1 from '../assets/img/1.jpg';
class Inicio extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        products: []
    }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.setState({products: json}))  
    }
    render(){
    return (
        <div>
            <h1>inicio</h1>
            <img src={imagen1}/>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {this.state.product.map(product=>{
                <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
                })}
  
</div>
        </div>
    );
    }
}

export default Inicio