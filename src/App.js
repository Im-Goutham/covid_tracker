import React from 'react'

import Dropdown from './Dropdown'

import './App.css'

class App extends React.Component {
  state = {
    headers: [
      { name: 'country,_other', value: 'Country, Other' },
      { name: 'Total Cases', value: 'Total Cases' },
      { name: 'new_cases', value: 'New Cases' },
      { name: 'total_deaths', value: 'Total Deaths' },
      { name: 'new_deaths', value: 'New Deaths' },
      { name: 'total_recovered', value: 'Total Recovered' },
      { name: 'active_cases', value: 'Active Cases' },
      { name: 'serious,_critical', value: 'Serious, Critical' },
      { name: 'tot_cases/_1m_pop', value: 'Tot Cases/ 1M pop' },
      { name: 'deaths/_1m_pop', value: 'Deaths/ 1M pop' },
      { name: 'total_tests', value: 'Total Tests' },
      { name: 'tests/_1m_pop', value: 'Tests/ 1M pop' },
      { name: 'population', value: 'population' },
    ],

    data: [
      [
        { key: 'country,_other', value: 'World' },
        { key: 'Total Cases', value: '13,732,432' },
        { key: 'new_cases', value: '+48,627' },
        { key: 'total_deaths', value: '587,790' },
        { key: 'new_deaths', value: '+1,591' },
        { key: 'total_recovered', value: '8,182,139' },
        { key: 'active_cases', value: '4,962,503' },
        { key: 'serious,_critical', value: '60,031' },
        { key: 'tot_cases/_1m_pop', value: '1,762' },
        { key: 'deaths/_1m_pop', value: '75,5' },
        { key: 'total_tests', value: '14343' },
        { key: 'tests/_1m_pop', value: '45,233' },
        { key: 'population', value: '1,234,344' },
      ],
      [
        { key: 'country,_other', value: 'World' },
        { key: 'Total Cases', value: '13,732,432' },
        { key: 'new_cases', value: '+48,627' },
        { key: 'total_deaths', value: '587,790' },
        { key: 'new_deaths', value: '+1,591' },
        { key: 'total_recovered', value: '8,182,139' },
        { key: 'active_cases', value: '4,962,503' },
        { key: 'serious,_critical', value: '60,031' },
        { key: 'tot_cases/_1m_pop', value: '1,762' },
        { key: 'deaths/_1m_pop', value: '75,5' },
        { key: 'total_tests', value: '14343' },
        { key: 'tests/_1m_pop', value: '45,233' },
        { key: 'population', value: '1,234,344' },
      ],
      [
        { key: 'country,_other', value: 'World' },
        { key: 'Total Cases', value: '13,732,432' },
        { key: 'new_cases', value: '+48,627' },
        { key: 'total_deaths', value: '587,790' },
        { key: 'new_deaths', value: '+1,591' },
        { key: 'total_recovered', value: '8,182,139' },
        { key: 'active_cases', value: '4,962,503' },
        { key: 'serious,_critical', value: '60,031' },
        { key: 'tot_cases/_1m_pop', value: '1,762' },
        { key: 'deaths/_1m_pop', value: '75,5' },
        { key: 'total_tests', value: '14343' },
        { key: 'tests/_1m_pop', value: '45,233' },
        { key: 'population', value: '1,234,344' },
      ],
      [
        { key: 'country,_other', value: 'World' },
        { key: 'Total Cases', value: '13,732,432' },
        { key: 'new_cases', value: '+48,627' },
        { key: 'total_deaths', value: '587,790' },
        { key: 'new_deaths', value: '+1,591' },
        { key: 'total_recovered', value: '8,182,139' },
        { key: 'active_cases', value: '4,962,503' },
        { key: 'serious,_critical', value: '60,031' },
        { key: 'tot_cases/_1m_pop', value: '1,762' },
        { key: 'deaths/_1m_pop', value: '75,5' },
        { key: 'total_tests', value: '14343' },
        { key: 'tests/_1m_pop', value: '45,233' },
        { key: 'population', value: '1,234,344' },
      ],
      [
        { key: 'country,_other', value: 'World' },
        { key: 'Total Cases', value: '13,732,432' },
        { key: 'new_cases', value: '+48,627' },
        { key: 'total_deaths', value: '587,790' },
        { key: 'new_deaths', value: '+1,591' },
        { key: 'total_recovered', value: '8,182,139' },
        { key: 'active_cases', value: '4,962,503' },
        { key: 'serious,_critical', value: '60,031' },
        { key: 'tot_cases/_1m_pop', value: '1,762' },
        { key: 'deaths/_1m_pop', value: '75,5' },
        { key: 'total_tests', value: '14343' },
        { key: 'tests/_1m_pop', value: '45,233' },
        { key: 'population', value: '1,234,344' },
      ],
      [
        { key: 'country,_other', value: 'World' },
        { key: 'Total Cases', value: '13,732,432' },
        { key: 'new_cases', value: '+48,627' },
        { key: 'total_deaths', value: '587,790' },
        { key: 'new_deaths', value: '+1,591' },
        { key: 'total_recovered', value: '8,182,139' },
        { key: 'active_cases', value: '4,962,503' },
        { key: 'serious,_critical', value: '60,031' },
        { key: 'tot_cases/_1m_pop', value: '1,762' },
        { key: 'deaths/_1m_pop', value: '75,5' },
        { key: 'total_tests', value: '14343' },
        { key: 'tests/_1m_pop', value: '45,233' },
        { key: 'population', value: '1,234,344' },
      ],
    ],
    filteredHeaders: [],
    filteredData: [],
  }

  componentDidMount() {
    this.setState({
      filteredHeaders: this.state.headers,
      filteredData: this.state.data,
    })
  }

  onSelected(data) {
    console.log('data is ---- ', JSON.stringify(data))

    let filteredHeaders = []
    let filteredData = []
    data.map((obj) => {
      filteredHeaders.push({
        name: obj.value,
        value: obj.label,
      })
    })

    this.setState({ filteredHeaders }, () => {
      this.state.data.map((dataArr) => {
        let arr = []
        dataArr.map((dataObj) => {
          var result = this.state.filteredHeaders.find((obj) => {
            return obj.name === dataObj.key
          })

          if (result) {
            arr.push(dataObj)
          }
        })
        filteredData.push(arr)
      })

      this.setState({ filteredData })
    })
  }

  render() {
    return (
      <div className="App">
        <Dropdown onSelected={(data) => this.onSelected(data)} />
        <table>
          <tr>
            {this.state.filteredHeaders.map((header) => {
              return <th>{header.name}</th>
            })}
          </tr>

          {this.state.filteredData.map((dataObj) => {
            return (
              <tr>
                {dataObj.map((obj) => {
                  return <td>{obj.value}</td>
                })}
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default App
