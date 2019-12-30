import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default () => {
    return (
      <>
        <Helmet>
          <body className="govuk-template__body" />
        </Helmet>
        <Layout><div>Hello world!</div></Layout>
      </>
    )
}
