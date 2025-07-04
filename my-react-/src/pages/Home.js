import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Carousel, Card, Button } from "react-bootstrap";



function Home (){
    return (
    <div >
        <h1 style={{color: 'black'}}>Welcome to Card heroes!</h1>
       
            <div class="text-center">
                <Carousel>
                    <Carousel.Item>
                        
                        <img
                            className="d-block w-90"
                            src="https://www.dexerto.com/cdn-image/wp-content/uploads/2024/05/10/pokemon-tcg-fan-hits-jackpot-with-50k-storage-unit-haul.jpg?width=1200&quality=60&format=auto"
                            alt="First slide"
                            class="img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-90"
                            src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/09/draftboosters.jpg"
                            alt="Second slide"
                            class="img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-90"
                            src="https://m.media-amazon.com/images/I/A1lZYH3dzFL._UF894,1000_QL80_.jpg"
                            alt="Third slide"
                            class="img-fluid"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        <p style={{color: 'black', fontSize: '1.3rem'}}>
            This is a trading card application where you can browse and purchase collectable trading card related items.
        </p>
        <p style={{color: 'black', fontSize: '1.3rem'}}>
            Start by exploring our collection of tcg items, add them to your cart, and proceed to checkout. 
        </p>

        <Link to="/ecommerce">
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'rgb(2, 149, 255)', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
                Start Shopping
            </button>

            
        </Link>
                <Link to="/sale">
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'rgb(2, 149, 255)', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
                Check our Deals
            </button>
            </Link>
    </div>
    );
}

export default Home;