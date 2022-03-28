import React, {Component}  from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

class Main extends Component {


    constructor(props) {
        super(props);
    }


    render() {

     

        return(

        <div>
        <div className='container p-5'>
          <div className='row d-flex justify-content-center mb-5'>
            <Card>
              <Card.Title className='d-flex justify-content-center p-3'><h1>Story Title</h1></Card.Title>
              <Card.Body className='d-flex justify-content-center'>(Pulled from database)</Card.Body>
              <Card.Footer className='d-flex justify-content-center'>Pick your next steps..</Card.Footer>
            </Card>
          </div>
            <div className='row'>
            <div className='col'>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Dynamic Option 1</Card.Title>
      <Card.Text>
        (Import choice one)
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-center'>
      <Button>Choice 1</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Dynamic Option 2</Card.Title>
      <Card.Text>
        (Import choice 2)
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-center'>
      <Button>Choice 1</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Write you own choice</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-center'>
      <Button>Choice 1</Button>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
            </div>
        </div>
        </div>
        )

    }
}

export default Main;
