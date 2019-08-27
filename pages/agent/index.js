import React from 'react'
import Link from 'next/link'

class agent extends React.Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    return (
      <div>
        <p>
          Hello there: {this.props.userAgent}
        </p>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    )
  }
}

export default agent
