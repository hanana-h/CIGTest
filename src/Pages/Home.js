import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from 'react-simple-star-rating'
import { SaveRounded } from "@mui/icons-material";


const images = [
  require("../assets/license.png"),
  require("../assets/activity.png"),
  require("../assets/visa.png"),
  require("../assets/vat.png")
]

const products = [
  {
    name: "Ajman Media City",
    name1: "Saver",
    name2: "AMC",
    color: '#6A6C6D',
    sold: '5',
    price: 1000,
    save: 2000,
    type: 'Licensing',
    searchType: 'Emirate'
  },
  {
    name: "Dubai South Free Zone",
    name1: "Saver +",
    name2: "IFZA",
    color: '#3895D3',
    sold: '12',
    price: 5000,
    save: 2000,
    type: 'Free Zone',
    searchType: 'Price Range'
  },
  {
    name: "IFZA",
    name1: "Flexi",
    name2: "RAK",
    color: '#FF7F50',
    sold: '10',
    price: 6000,
    save: 3000,
    type: 'Commercial',
    searchType: 'No of Visa'
  },
  {
    name: "2 VISA",
    name1: "Flexi +",
    name2: "SPC",
    color: '#0e6b0e',
    sold: '10',
    price: 10000,
    save: 5000,
    type: "Trading",
    searchType: 'No of Activities'
  }
]
function Home() {
  return (
    <div>

      <div style={{ paddingTop: 20, position: 'relative' }} >
        <img
          style={{ height: '400px', width: '100%', opacity: 0.7, objectFit: 'cover' }}
          src={require('../assets/uae.png')}
          alt=""
        />
        <div style={{ marginTop: -240, left: '25%', position: 'absolute', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ color: 'red', }}>UAE's 1st E-Commerce Platform </h2>
          <h2 style={{ color: 'red', justifyCotet: 'center', textAlign: 'center' }}>for Business Set-Up </h2>
        </div>
      </div>
      <div style={{ paddingTop: 20 }}>
        <img
          style={{ height: '300px', width: '100%', objectFit: 'cover' }}
          src={require('../assets/uaenight.png')}
          alt=""
        />
      </div>

      <div className="container" style={{ textAlign: 'center',overflowX:'scroll' }}>
        <div className="py-4">
          <h1 class="font-weight-light">Our Major Categories</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {images.map(item => {
              return <div >
                <img className="mx-2" src={item} style={{ width: 160, height: 80 }} />
              </div>
            })}
          </div>
        </div>


        <div className="py-4">
          <h1 class="font-weight-light">Best Selling Products</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#D5D5D5' }}>
                  <CardContent >
                    <img src={require('../assets/laptop.png')} style={{ height: 200, width: 200 }} />
                    <h5>1 VISA E-commerce</h5>
                    <h6>Food Stuff Trading</h6>
                    <div style={{ textDecoration: 'line-through', color: 'red' }}>AED 10000</div>
                    <div>AED 6000</div>
                    <div>SAVE AED 4000</div>
                  </CardContent>
                  <CardActions style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <Button variant="contained" color="success" size="small" ><strong>BUY NOW</strong></Button>
                  </CardActions>
                  <Rating emptyColor="#fff" showTooltip={true} size={25} ratingValue='4' />
                </Card>
              </div>
            })}
          </div>
        </div>

        <div className="py-4">
          <h1 class="font-weight-light">Commonly Ask for</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: item.color, color: "#FFF" }}>
                  <CardContent >
                    <h5>{item.name}</h5>
                  </CardContent>
                  <div style={{ width: 80, borderRadius: 10, backgroundColor: "#D5D5D5", marginLeft: '100px', color: 'black' }}>
                    <div style={{ fontSize: 20 }}>Select</div>
                    <div>sold : {item.sold}</div>
                  </div>
                </Card>
              </div>
            })}
          </div>
        </div>

        <div className="py-4">
          <h1 class="font-weight-light">Our Major Partnerships</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: item.color, color: "#FFF" }}>
                  <CardContent >
                    <h5>{item.name}</h5>
                  </CardContent>
                  <div style={{ width: 80, borderRadius: 10, backgroundColor: "#D5D5D5", marginLeft: '100px', color: 'black' }}>
                    <div style={{ fontSize: 20 }}>View</div>
                    <div>More</div>
                  </div>
                </Card>
              </div>
            })}
          </div>
        </div>

        <div className="py-4" style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
          {products.map(item => {
            return <div className="mx-2 py-2 px-5" style={{ backgroundColor: 'black', color: "#FFF", borderRadius: 10 }}>
              <Button style={{ color: '#fff' }}>{item.type}</Button>
            </div>
          })}
        </div>
        <span style={{ flexDirection: 'row', display: 'flex', padding: 10, backgroundColor: 'black', borderRadius: 10 }}>

          {products.map(item => {
            return <div className="mx-2 py-2 px-5" style={{ backgroundColor: '#fff', color: "black", borderRadius: 10 }}>
              <Button style={{ color: 'black' }}>{item.searchType}</Button>
            </div>
          })}
          <SearchIcon style={{ justifyContent: 'flex-end', color: '#fff', fontSize: '3rem' }} />
        </span>

        <div className="py-4">
          <h1 class="font-weight-light">Best Packages in Trading</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: item.color, color: "#FFF" }}>
                  <CardContent >
                    <h5>{item.name1}</h5>
                    <h4>AED {item.price}</h4>
                  </CardContent>
                  <div style={{ width: 80, borderRadius: 10, backgroundColor: "#D5D5D5", marginLeft: '100px', color: 'black' }}>
                    <div style={{ fontSize: 20 }}>Select</div>
                    <div>sold : {item.sold}</div>
                  </div>
                </Card>
              </div>
            })}
          </div>
        </div>

        <div className="py-4">
          <h1 class="font-weight-light">Best Selling in Trading</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: item.color, color: "#FFF" }}>
                  <CardContent >
                    <h5>{item.name2}</h5>
                    <h4>AED {item.price}</h4>
                    <h4>Save {item.save}</h4>
                  </CardContent>
                  <div style={{ width: 80, borderRadius: 10, backgroundColor: "#D5D5D5", marginLeft: '100px', color: 'black' }}>
                    <div style={{ fontSize: 20 }}>Select</div>
                    <div>sold : {item.sold}</div>
                  </div>
                </Card>
                <p>Ratings <Rating size={20} ratingValue={5} /></p>
              </div>
            })}
          </div>
        </div>

        <div className="py-4">
          <h1 class="font-weight-light">Recommended for You</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: item.color, color: "#FFF" }}>
                  <CardContent >
                    <h5>{item.name2}</h5>
                    <h4>AED {item.price}</h4>
                  </CardContent>
                  <div style={{ width: 80, borderRadius: 10, backgroundColor: "#D5D5D5", marginLeft: '100px', color: 'black' }}>
                    <div style={{ fontSize: 20 }}>Select</div>
                    <div>sold : {item.sold}</div>
                  </div>
                </Card>
              </div>
            })}
          </div>
        </div>

        <div className="py-4">
          <h1 class="font-weight-light">Explore all in Trading</h1>
          <div style={{ flexDirection: 'row', display: 'flex', padding: 10 }}>
            {products.map(item => {
              return <div>
                <Card className="mx-2" sx={{ minWidth: 275, }} style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: item.color, color: "#FFF" }}>
                  <CardContent >
                    <h5>{item.name2}</h5>
                    <h4>AED {item.price}</h4>
                    <h4>Save {item.save}</h4>
                  </CardContent>
                  <div style={{ width: 80, borderRadius: 10, backgroundColor: "#D5D5D5", marginLeft: '100px', color: 'black' }}>
                    <div style={{ fontSize: 20 }}>Select</div>
                    <div>sold : {item.sold}</div>
                  </div>
                </Card>
                <p>Ratings <Rating size={20} ratingValue={5} /></p>
              </div>
            })}
          </div>
        </div>

      </div>
    </div>

  );
}

export default Home;