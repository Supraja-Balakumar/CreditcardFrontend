// import React from 'react'
// import './Functional.css'
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Functional = () => {

//   return (
//     <>
//       <Card border="primary" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Primary Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="secondary" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Secondary Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="success" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Success Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="danger" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Danger Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="warning" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Warning Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="info" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Info Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="dark" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Dark Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />

//       <Card border="light" style={{ width: '18rem' }}>
//         <Card.Header>Header</Card.Header>
//         <Card.Body>
//           <Card.Title>Light Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />
//     </>
//   );
// }


// export default Functional;

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.rrfinance.com/Blogs/images/What-is-the-EMI.png" />
        <Card.Body>
          <Card.Title>Easy EMI's on your card</Card.Title>
          <Card.Text>
            Shop now and pay later with easy EMI on you Card.
            <br></br>
            {/* <br></br> */}
            Benefit from flexible payment options on your purchases,making your shopping experience more convenient.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.maxloans.co.nz/wp-content/uploads/2019/03/Refinance-home-mortgage-3.jpg" />
        <Card.Body>
          <Card.Title>Loan on Credit Card</Card.Title>
          <Card.Text>
            Get instant cash with our Personal Loans on Credit Cards at low interest rates ranging from 14.99% to 15.99%, with loans upto Rs. 20 lakh.{' '}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=" />
        <Card.Body>
          <Card.Title>Lifestyle and Travel Benefits</Card.Title>
          <Card.Text>
            Enjoy discounts on shopping,dining,movies and more.
            <br></br>
            Get access to exclusive offers and deals on your favourite brands and products.
            <br></br>
            Get complimentary access to airport lounges,waiver of fuel surcharge and discounts on fuel purchases.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
