import React, {Component}  from 'react';
import { Card } from 'react-bootstrap';

class Main extends Component {


    constructor(props) {
        super(props);
    }
    render() {

     

        return(
            <div>
            <div className="container">
              <div className='row justify-content-center p-3'>
                <Card className='p-1'><h1>Test</h1></Card>
              </div>
              
                 <div className="row mx-auto">           
                        <div className='col-lg'>                     
                        <Card>
                        <Card.Header ><h3 className='p-1'>Test</h3></Card.Header>
                          <Card.Body>
                              Test
                          </Card.Body>
                        </Card>
                        </div>

                        <div className="col">
                        <Card>
                              <Card.Header>
                                <h2 className='p-2'>Test</h2>
                               </Card.Header>
    
                          <Card.Body>                      
                              Test
                          </Card.Body>       
                          </Card>
                      </div>
    
                      <div className='col-lg-4'>
                      <Card>
                        <Card.Header><h2 className='p-2'>Test</h2></Card.Header>
                        <Card.Body>
                            Test
                        </Card.Body>
                      </Card>
                      </div>
    
    
    
              </div>
    
            </div>
         </div>
        )

    }
}

export default Main;
