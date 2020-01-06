import React from 'react'
import Searchbox from '../components/Searchbox'

class PageNavigation extends React.Component {
    goBack(e) {
        e.preventDefault();
        window.history.go(-1);
    }

    goForwards(e) {
        e.preventDefault();
        window.history.go(1);
    }

    render() {
        return (
            <div className="page-navigation">
                <nav className="govuk-width-container govuk-body">
                    <a href="/" className="govuk-link">Homepage</a>
                    <a href="/" className="govuk-link" id="go-back" onClick={this.goBack}>Back</a>
                    <a href="/" className="govuk-link" id="go-forwards" onClick={this.goForwards}>Forward</a>
                    <div>
                        <Searchbox />
                    </div>
                </nav>
            </div>
        )
    }
}

export default PageNavigation
