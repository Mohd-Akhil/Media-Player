import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <div className='row mt-5 w-100 justify-content-center align-item=center'>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-4">
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum exercitationem nulla necessitatibus illum. Similique harum voluptates nobis, ipsum accusamus suscipit iure quo iste ipsa aliquam saepe quasi repudiandae quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque dolorem voluptas, ex, reprehenderit vitae voluptatibus dolore rerum sunt delectus architecto praesentium dolor pariatur atque quae alias impedit nemo blanditiis!</p>
          <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-item-center">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="media image" />
        </div>
        <div className="col-md-1"></div>
      </div>


      <div className="row w-100 mt-5">
        <h3 className='text-center mt-5 mb-5'>Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-5 px-md-4 mt-4">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif" className='w-100' height={'300px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-4">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" className='w-100' height={'300px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-4">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" className='w-100' height={'300px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className='row mt-5 w-100 ms-1 ms-md-0 p-4'>
        <div className="col-md-1"></div>
        <div className="col-md-10 border rounded ps-5 mt-5 m-md-5">
          <div className="row w-100">
            <div className="col-md-6">
              <h3 className='text-warning mt-5'>Simple Fast And Powerful</h3>
              <p className='mt-4' style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero at veniam tempora iste laborum eveniet sunt, quisquam culpa asperiores accusantium aperiam ipsam alias iusto sed corporis, eum architecto quam.</p>
              <p className='mt-4' style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quos quis expedita, harum illo earum omnis rerum blanditiis quia, impedit voluptates voluptate ducimus at? Aspernatur alias suscipit impedit exercitationem doloremque.</p>
              <p className='mt-4 mb-4' style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quos quis expedita, harum illo earum omnis rerum blanditiis quia, impedit voluptates voluptate ducimus at? Aspernatur alias suscipit impedit exercitationem doloremque.</p>
            </div>
            <div className="col-md-6 p-4">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ThDKZe8r-DE" title="YUNGBLUD - I Was Made For Lovin’ You (Audio / from The Fall Guy)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Landingpage