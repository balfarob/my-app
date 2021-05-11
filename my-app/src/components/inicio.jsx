import React from 'react';
import imagen1 from '../assets/img/1.jpg';
class Inicio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    filterCategory(products){
        if (this.props.category){
            console.log(products,this.props.category)
            const filtered = products.filter(product=> product.category == this.props.category)
            this.setState({products: filtered})
        }
        else {
            this.setState({products})
        }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => this.filterCategory(json))
       
    }
    render() {

        return (
            <div>
                <h1>inicio</h1>
                <img src={imagen1} />
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {this.state.products.map(product => {
                        return (
                            <div class="col">
                                <div class="card h-100">
                                    <img src={product.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title}</h5>
                                        <p class="card-text">{product.description}</p>
                                        <p>Precio ${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default Inicio