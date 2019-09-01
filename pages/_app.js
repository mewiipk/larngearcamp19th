import React from 'react'
import App, { Container } from 'next/app'

class DefaultApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default DefaultApp