import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Clock from './Clock'
import PageNavigation from '../components/PageNavigation'

import '../assets/scss/index.scss'
import contentHubImage from '../assets/images/icons/content-hub.png'

const Layout = ({ blueBar, pageNavigation, children }) => {
  return (
    <>
      <Helmet>
        <body className="govuk-template__body" />
      </Helmet>
      <a href="#main-content" className="govuk-skip-link">Skip to main content</a>
      <header className="govuk-header top-bar-container" data-module="header">
        <div className="govuk-width-container govuk-body top-bar">
          <h1 className="govuk-heading-m">
            <img className="hub-logo" src={contentHubImage} alt="logo" />
            <a href="/">Content Hub <span>HMP Wayland</span></a>
          </h1>
          <Clock />
        </div>
      </header>
      {blueBar &&
      <div className="govuk-width-container">
        <hr className="govuk-section-break govuk-search-section-break--visible" />
      </div>
      }
      {pageNavigation &&
      <PageNavigation />
      }
      {children}
      <footer className="govuk-footer" role="contentinfo">
        <div className="govuk-width-container ">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <svg role="presentation" focusable="false" className="govuk-footer__licence-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7" height="17" width="41">
                <path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"></path>
              </svg>
              <span className="govuk-footer__licence-description">
                All content is available under the Open Government Licence v3.0, except where otherwise stated
              </span>
            </div>
            <div className="govuk-footer__meta-item govuk-footer__copyright-logo">© Crown copyright</div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.defaultProps = {
  blueBar: false,
  pageNavigation: true,
}

Layout.propTypes = {
  blueBar: PropTypes.bool,
  pageNavigation: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
