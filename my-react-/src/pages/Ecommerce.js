import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Container, ListGroup,Alert,aside } from 'react-bootstrap';
import { TbCategory2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const items = [ 
  {
    id: 1,
    name: 'MTG Duskmourn',
    category: 'Magic the gathering',
    category2: 'Booster Pack', 
    price: 6.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/SEA-PAC-MTG-D34440000_745x1040ratio__00438_800x.jpg?v=1726777468',
  },
  {
    id: 2,
    name: 'MTG Foundations',
    category: 'Magic the gathering',
    category2: 'Booster Pack', 
    price: 6.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/SEA-PAC-MTG-D36280000_745x1040ratio__07358_400x.jpg?v=1730921987',
  },
  {
    id: 3,
    name: 'MTG THE LOST CAVERNS OF IXALAN',
    category: 'Magic the gathering',
    category2: 'Booster Pack', 
    price: 7.79,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/MTGLCI_EN_Bstr_Set_01_03_394x_0d868448-6da7-4101-b17f-becdbc0bbec7_300x.webp?v=1710446605',
  },
  {
    id: 4,
    name: 'MTG RIVALS OF IXALAN',
    category: 'Magic the gathering',
    category2: 'Booster Pack', 
    price: 6.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/MTG-Rivals-of-Ixalan-English-Booster-Pack_394x_b48ce4ad-3a71-4ab8-bd5f-d2dfc92bf0fa_300x.png?v=1703706824',
  },
  {
    id: 5,
    name: 'Yugioh - Quarter Century Stampede Booster Pack',
    category: 'Yugioh',
    category2: 'Booster Pack', 
    price: 6.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Yugioh-QuarterCenturyStampedeBoosterPack-1stEdition_394x_76d1ab41-1e04-4a50-9188-910673d1474a_300x.webp?v=1744308533',
  },
  {
    id: 6,
    name: 'Yugioh - Battles of Legend: Monster Mayhem Booster Pack',
    category: 'Yugioh',
    category2: 'Booster Pack', 
    price: 4.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Yugioh-BattlesofLegend-MonsterMayhemBoosterPack-1stEdition_B_394x_21897739-a42a-4680-a413-700f0ef65743_300x.webp?v=1749666281',
  },
  {
    id: 7,
    name: 'Yugioh - Legendary Duelists: Synchro Storm Booster Pack',
    category: 'Yugioh',
    category2: 'Booster Pack', 
    price: 2.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Yugioh-Legendary-Duelists-Synchro-Storm-Booster-Pack-1st-Edition_394x_4706ff3e-5f20-43e9-9b2c-a47f478ab2bb_300x.webp?v=1732743102',
  },
  {
    id: 8,
    name: 'Yugioh - Darkwing Blast Booster Pack',
    category: 'Yugioh',
    category2: 'Booster Pack', 
    price: 8.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Yugioh-Darkwing-Blast-Booster-Pack-1st-Edition_257x_e13a8abb-f972-4d20-9d5e-2dc1dc60a508_200x.webp?v=1727893569',
  },
  {
    id: 9,
    name: 'POKEMON - SCARLET AND VIOLET - TWILIGHT MASQUERADE - BOOSTER PACK',
    category: 'Pokemon',
    category2: 'Booster Pack', 
    price: 9.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/image_2_394x_fb3c1156-3a91-4b88-93a9-5b7e0690c7f3_300x.webp?v=1716487865',
  },
  {
    id: 10,
    name: 'Pokemon - Scarlet and Violet - Destined Rivals - Booster Pack',
    category: 'Pokemon',
    category2: 'Booster Pack', 
    price: 10.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/raw1_394x_70ccaab7-c870-450d-be75-9513629ee971_300x.webp?v=1748449727',
  },
  {
    id: 11,
    name: 'POKEMON - BRILLIANT STARS - BOOSTER PACK',
    category: 'Pokemon',
    category2: 'Booster Pack', 
    price: 10.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Pokemon-Brilliant-Stars-Booster-Pack_394x_f66c880b-61d5-4371-be30-61cf5c6a48f2_300x.png?v=1703369142',
  },
  {
    id: 12,
    name: 'POKEMON - SCARLET & VIOLET - 151 - BOOSTER PACK',
    category: 'Pokemon',
    category2: 'Booster Pack', 
    price: 34.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Pokemon-Scarlet-Violet-151-Booster-Pack_394x_1ead52e6-ca36-4554-a9ef-bb0116bc878b_300x.png?v=1703368962',
  },
  {
    id: 13,
    name: 'POKEMON BLOOMING WATERS PREMIUM COLLECTION',
    category: 'Pokemon',
    category2: 'Boxset',
    price: 189.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/raw_2_357a6c3e-4749-4580-b3d1-8a6d9fa2fc96_500x.png?v=1732736868',
  },
  {
    id: 14,
    name: 'POKEMON SV10 DESTINED RIVALS ELITE TRAINER',
    category: 'Pokemon',
    category2: 'Boxset',
    price: 149.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/raw_48_500x.png?v=1744492603',
  },
  {
    id: 15,
    name: 'YUGIOH - DUELIST NEXUS BOOSTER BOX',
    category: 'Yugioh',
    category2: 'Boxset',
    price: 59.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/Yugioh-Duelist-Nexus-Booster-Box-1st-Edition_394x_deb55902-5236-4c5c-bdd6-bd8e4049dcea_300x.webp?v=1711126482',
  },
  {
    id: 16,
    name: 'YUGIOH SUPREME DARKNESS BOOSTER BOX',
    category: 'Yugioh',
    category2: 'Boxset',
    price: 89.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/YUSUDAB_200x.jpg?v=1727981256',
  },
  {
    id: 17,
    name: 'MTG: Final Fantasy: Commander Decks',
    category: 'Magic the gathering',
    category2: 'Deck',
    price: 109.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/WOCD3845-B_400x.jpg?v=1740081750',
  },
  {
    id: 18,
    name: 'MTG: Outlaws of Thunder Junction Play Booster Box',
    category: 'Magic the gathering',
    category2: 'Boxset',
    price: 209.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/MTGOTJ_EN_BstrDspBx_Play_1_3_394x_13c896d8-fd8f-4b6d-9690-2d62baa58e6f_300x.png?v=1709161659',
  },
  {
    id: 19,
    name: 'MTG - OUTLAWS OF THUNDER JUNCTION - PRERELEASE KIT',
    category: 'Magic the gathering',
    category2: 'Boxset',
    price: 39.99,
    image: 'https://www.gothamcentralcomics.com/cdn/shop/files/541082_in_1000x1000_f57ad9c4-7235-4af5-9e3a-e516da2b6477_500x.jpg?v=1720727498',
  }
];


function Ecommerce() {
  const [cart, setCart] = useState([]); 
  
  const [categoryFilter, setCategoryFilter] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredItems = items.filter(
    (item) => 
      (!categoryFilter || item.category === categoryFilter || item.category2 === categoryFilter) && item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
 
  const addToCart = (item) => setCart([...cart, item]); 
 
  return (
    <Container className="py-4">

      <div className="mt-5"style={{ maxWidth: '700px', margin: '40px auto', padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <aside class= "sidebar" >

        <h5>Cart ({cart.length} items)</h5> {/* Display the number of items in the cart */}
        <ListGroup>
          {cart.map((item, idx) => ( // Map through the cart items and display them in a list
            <ListGroup.Item key={idx}>
              {item.name} – ${item.price.toFixed(2)} {/* Display item name and price */}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="mt-3">
          <Link to='/checkout' className="btn btn-primary">
            Proceed to Checkout
          </Link>
        </div>
        </aside>




      </div>
             <div className="col-md-8">
                    <Alert variant="warning">
                        Save up to 25% on all Magic products durring our Canada Day sale, from July 1st to July 10th! while supplies last
                    </Alert></div>


          
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </Col>
          <Col md={6}>
            <Form.Select
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)} 
          >
            <option value="">All Categories</option>
            {Array.from(new Set(items.map(item => item.category))).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
             {Array.from(new Set(items.map(item => item.category2))).map((category2) => ( 
              <option key={category2} value={category2}>
                {category2}
              </option>
            ))}
          </Form.Select>

          </Col>
        </Row>

        <Row>
        {filteredItems.map((item) => ( 
          <Col md={3} className="mb-4" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} /> 
              <Card.Body>
                <Card.Title>{item.name}</Card.Title> 
                <Card.Subtitle className="mb-2 text-muted">
                  {item.category} 
                </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                  {item.category2} 
                </Card.Subtitle>
                <Card.Text>${item.price.toFixed(2)}</Card.Text> 
                <Button onClick={() => addToCart(item)}>Add to Cart</Button> 
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>





    </Container>
  );

  
}

export default Ecommerce;