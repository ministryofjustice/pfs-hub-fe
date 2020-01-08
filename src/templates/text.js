import React from 'react'
import Layout from '../components/Layout'

export default ({ pageContext: { content, title, subtitle } }) => (
    <>
      <Layout>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row govuk-!-margin-bottom-9">
            <div className="govuk-grid-column-two-thirds">
              <h1 id="title" className="govuk-heading-xl govuk-!-margin-bottom-6 govuk-!-margin-top-3">{title}</h1>
              <p id="stand-first" className="govuk-body-l">{subtitle}</p>
              <div id="body" className="gov-uk-dynamic-content" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
          </div>
        </main>
      </div>
      </Layout>
    </>
)
