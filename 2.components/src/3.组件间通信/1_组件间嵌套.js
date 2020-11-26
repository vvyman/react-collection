import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>       
      </div>
    )
  }
}


function Header() {
  return (
    <header>头部</header>
  )
}

function Main() {
  return (
    <div>
      <Banner/>
      <ProductionList />
    </div>
  )
}

function Banner() {
  return (
    <div>banner</div>
  )
}

function ProductionList() {
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  )
}

function Footer() {
  return (
    <footer>Footer</footer>
  )
}
