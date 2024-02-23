import {Component} from 'react'
import Options from '../Options/index'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  onClickSelectCapital = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  knowCountry = () => {
    const {selectedCapitalId} = this.state
    const selectedCountryAndCapital = countryAndCapitalsList.find(
      each => each.id === selectedCapitalId,
    )
    return selectedCountryAndCapital.country
  }

  render() {
    const {selectedCapitalId} = this.state
    const country = this.knowCountry()
    return (
      <div className='bg'>
        <div className='card'>
          <h1>Countries And Capitals</h1>
          <div>
            <select
              id='slct'
              className='select-con'
              onChange={this.onClickSelectCapital}
              value={selectedCapitalId}
            >
              {countryAndCapitalsList.map(each => (
                <option className='optn' value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor='slct'>is capital of which country</label>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
