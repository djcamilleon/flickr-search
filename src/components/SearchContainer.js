import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../search.css'

class SearchContainer extends React.Component {

    handleChange = event => this.props.changeState("criteria", event.target.value)
    handleKeyPress = event => event.key === 'Enter' && this.handleSearch()

    state = {
        toResults: false
    }

    handleSearch = () => {

        const criteria = this.props.criteria

        if (!criteria) return

        // Clear the search results in state

        this.props.changeState("searchResults", []);

        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&
                     api_key=1dd17dde0fed7286935d83875fcc17dd&text=${criteria}&per_page=25
                     &format=json`

        fetch(url)

            // Parse JSONP format returned by flickr

            .then(res => res.text())
            .then(res => {
                const indices = [res.indexOf('{'), res.lastIndexOf('}')]
                const respBody = res.slice(indices[0], indices[1] + 1)
                return JSON.parse(respBody)
            })
            .then(res => this.props.changeState("searchResults", res.photos.photo))

        this.setState({ toResults: true })

    }

    render = () => {

        if (this.state.toResults) {
            return <Redirect to='/results' />
        }

        const criteria = this.props.criteria

        return (<div class="searchContainer">
            <h1 class="flickrHeader">Flickr Search</h1>
            <input type="text"
                value={criteria}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress} />
            
            <Link to='/results'>
                <button class="searchButton" disabled={!criteria.length}
                    onClick={this.handleSearch}>
                    Search</button>
            </Link>
        </div>
        )
    }
}

export default SearchContainer