import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'

const languages = [
    {
      name: 'C',
      year: 1972
    },
    {
      name: 'C#',
      year: 2000
    },
    {
      name: 'C++',
      year: 1983
    },
    {
      name: 'Clojure',
      year: 2007
    },
    {
      name: 'Elm',
      year: 2012
    },
    {
      name: 'Go',
      year: 2009
    },
    {
      name: 'Haskell',
      year: 1990
    },
    {
      name: 'Java',
      year: 1995
    },
    {
      name: 'Javascript',
      year: 1995
    },
    {
      name: 'Perl',
      year: 1987
    },
    {
      name: 'PHP',
      year: 1995
    },
    {
      name: 'Python',
      year: 1991
    },
    {
      name: 'Ruby',
      year: 1995
    },
    {
      name: 'Scala',
      year: 2003
    }
  ]

function escapeRegexCharacters(str) {
return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
const escapedValue = escapeRegexCharacters(value.trim());

if (escapedValue === '') {
    return [];
}

const regex = new RegExp('^' + escapedValue, 'i');

return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
return suggestion.name;
}

function renderSuggestion(suggestion) {
return (
    <span>{suggestion.name}</span>
);
}

class Searchbox extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    render() {
        const smallClass = this.props.large ? '' : 'search-box-small'
        const smallButtonClass = this.props.large ? '' : 'search-button-small'
        const { value, suggestions } = this.state
        const inputProps = {
            placeholder: "Search the Content Hub",
            value,
            onChange: this.onChange
        }

        return (
            <div id="search-wrapper">
                <form method="GET" action="/search" className={smallClass}>
                    <label className="govuk-label" htmlFor="search">Search</label>
                    <Autosuggest 
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps} />
                    <button type="submit" className={`govuk-button search-button ${smallButtonClass}`}>Search</button>
                </form>
            </div>
        )
    }
}

Searchbox.defaultProps = {
    large: false,
    query: '',
}

Searchbox.propTypes = {
    large: PropTypes.bool,
    query: PropTypes.string,
}

export default Searchbox
