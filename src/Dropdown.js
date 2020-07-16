import React from 'react'
import Select from 'react-select'
import './Dropdown.css'

const options = [
  { value: 'country,_other', label: 'Country, Other' },
  { value: 'Total Cases', label: 'Total Cases' },
  { value: 'new_cases', label: 'New Cases' },
  { value: 'total_deaths', label: 'Total Deaths' },
  { value: 'new_deaths', label: 'New Deaths' },
  { value: 'total_recovered', label: 'Total Recovered' },
  { value: 'active_cases', label: 'Active Cases' },
  { value: 'serious,_critical', label: 'Serious, Critical' },
  { value: 'tot_cases/_1m_pop', label: 'Tot Cases/ 1M pop' },
  { value: 'deaths/_1m_pop', label: 'Deaths/ 1M pop' },
  { value: 'total_tests', label: 'Total Tests' },
  { value: 'tests/_1m_pop', label: 'Tests/ 1M pop' },
  { value: 'population', label: 'population' },
]
class Dropdown extends React.Component {
  state = {
    selectedOption: null,
  }

  componentDidMount() {
    this.setState({
      selectedOption: options,
    })
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () => {
      //  console.log(`Option selected: --- `, this.state.selectedOption)
      this.props.onSelected(this.state.selectedOption)
    })
  }
  render() {
    const { selectedOption } = this.state

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
      />
    )
  }
}

export default Dropdown
