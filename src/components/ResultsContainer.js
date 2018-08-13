import React from 'react'
import ResultsRow from './ResultsRow'
import {Link} from 'react-router-dom'
import '../results.css'


class ResultsContainer extends React.Component {

    render = () => {

        const { searchResults, changeState } = this.props
 
        if(!searchResults.length) return null

        return (

            <div class="resultsContainer">
                <h1 class="resultsHeader">Search Results</h1>

                <Link to='/'>
                    <button class="returnButton">
                        Return to Search
                    </button>
                </Link>


                <table class="resultsTable">
                    <tbody>
                        {
                            searchResults.map(result => (
                                <ResultsRow key={result.id} imgInfo={result} changeState={changeState}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            )
        }
}

export default ResultsContainer