import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return (
    	<div>
    		<Head>
		      <title>My page title</title>
		      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    </Head>
	    	<div>
	          Hello World 
	          <br/>
	          <br/>
	          {this.props.userAgent}
	        </div>

	        <br/>
	        <br/>

	        <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
        </div>
    )
  }
}