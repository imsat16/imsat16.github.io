import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import Navbar from './component/NavbarComponents'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container fluid>
                    <h2>Hii</h2>
                </Container>
            </div>
        )
    }
}
