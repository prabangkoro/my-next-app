import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const userIds = ['a', '123', 'uuu-jijsdodf-ojiwoer213-123']

function UserLinks () {
  return (
    <ul>
      {
        userIds.map((id, index) => (
          <li key={index}>
            <Link href='/user/[id]' as={`/user/${id}`}>
              <a>User {id}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className='hero'>
      <h1 className='title'>Welcome to Next.js!</h1>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div>
        <h3>Static image loading</h3>
        <img src='/static/beautiful-boardwalk-dawn-247314.jpg'></img>
      </div>

      <div>
        <h3>Dynamic Routing</h3>
        <UserLinks />
      </div>

      <div>
        <h3>Initial Data Population</h3>
        <Link href='/agent'>
          <a>Page</a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
