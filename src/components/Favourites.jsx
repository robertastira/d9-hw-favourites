import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Favourites = () => {
    const cart = useSelector((state) => state.JobData.content)
    const dispatch = useDispatch()
    return (
        <Row>
          <Col sm={12}>
            <ul style={{ listStyle: 'none' }}>
              {cart.map((Data, i) => (
                <li key={i} className="my-4">
                  <Button
                    variant="danger"
                    onClick={() => {
                      console.log('ELIMINO IL JOB')
                      dispatch({
                        type: 'DELETE_FROM_JOBS',
                        payload: i, 
                      })
                    }}
                  >
                    <FaTrash />
                  </Button>
                  <a>Company:{data.company_name}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      )
    }
    
    export default Favourites