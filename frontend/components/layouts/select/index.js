import styled from 'styled-components'
import { Text } from '../'
import Items from './items'
import Options from './options'

const Wrapper = styled('div')`
  position: relative;
`

const Control = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(0,0%,98%);
  cursor: default;
  min-height: 35px;
  font-size: 15px;
  box-sizing: border-box;
  border-color: ${props => props.error ? "red" : "hsl(0,0%,80%)"};
  border-style: solid;
  border-width: 1px;
  transition: all 100ms;
  outline: 0px;
  &:hover {
    border-color: ${props => props.error ? "red" : "hsl(0,0%,70%)"};
  }
`

const Header = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  flex: 1 1 0%;
  padding: 2px 8px;
`

const ItemWrapper = styled('div')`
  display: flex;
  max-width: 100%;
`

const InputWrapper = styled('div')`
  display: flex;
  padding-bottom: 2px;
  max-width: 100%;
  padding-top: 2px;
  position: relative;
  visibility: visible;
  color: rgb(34, 34, 34);
  box-sizing: border-box;
  margin: 2px;
`

const Input = styled('input')`
  box-sizing: content-box;
  background: 0px center;
  border: 0px;
  font-size: 15px;
  cursor: default;
  font-family: inherit;
  opacity: 1;
  outline: 0px;
  padding: 0px;
  color: inherit;
`

// const Placeholder = styled('div')`
//   bottom: 0;
//   color: #aaa;
//   left: 0;
//   line-height: 20px;
//   position: absolute;
//   right: 0;
//   top: 0;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `

const Indicators = styled('div')`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
`

const ButtonToggle = styled('div')`
  color: rgb(204, 204, 204);
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px;
  transition: color 150ms;
`

const Menu = styled('ul')`
  background-color: #FFF;
  border-bottom: 1px solid rgb(204, 204, 204);
  border-left: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  padding: 0;
  margin: 0;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 1000;
`

class Select extends React.Component {
	constructor(props) {
		super(props)

    const options = this.toItem(props.options, false)
    const selectedItems = this.toItem(props.value, true)

    this.setSelectInput = (el) => this.selectInput = el
    this.setSelectWrapper = (el) => this.selectWrapper = el

		this.state = {
			options: this.selectedOptions(options, selectedItems),
			selectedItems: selectedItems,
			menu: false,
			cursor: 0,
			term: ''
		}
	}

  componentWillUnmount(){
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  toItem = (options, selected) => {
    const { labelKey } = this.props

    return options.map(item => {
      return {
        id: item.id,
        label: item[labelKey],
        selected: selected
      }
    })
  }

	selectedOptions = (options, selectedItems) => {
		return options.map(option => {
		  const added = selectedItems.find(selected => {
        return selected.id === option.id
      })

		  return added ? { ...option, ...added } : option
		})
	}

	toggleItem = (id) => (e) => {
		const { multiple, onSelect, name } = this.props
    const { options, selectedItems, term } = this.state

		e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    
    if (!id) return false

    const item = options.find(item => item.id === id)

		if (multiple) {
			item.selected = !item.selected
			this.selectInput.focus()
			this.selectInput.value = ''
      this.setState({term: ''})
			this.toggleSelected(item)
		} else {
			options.map(item => item.selected = false)
			item.selected = !item.selected
			this.selectInput.value = item.label
			this.setState({term: ''})
			onSelect(name, item.id)
		}
	}

	toggleSelected = (data) => {
    const { onSelect, name } = this.props
    const { selectedItems } = this.state
		const existingItem = selectedItems.find(item => {
			return item.id === data.id
    })
 	
    if (!existingItem) {
      this.setState(prevState => ({
        selectedItems: [...prevState.selectedItems, data]
      }), () => onSelect(name, this.state.selectedItems))
    } else {
      const index = selectedItems.findIndex(i => i.id === existingItem.id)
      this.setState(prevState => ({
        selectedItems: [
          ...prevState.selectedItems.slice(0, index), 
          ...prevState.selectedItems.slice(index + 1)
        ]
      }), () => onSelect(name, this.state.selectedItems))
    }
	}

	filterItems = () => {
    const { term, options } = this.state

		const filteredList = options.filter(item => {
			return item.label.toLowerCase().indexOf(term) > -1
    })
		
    return filteredList
	}

	handleChange = (e) => {
    const { menu, cursor, term } = this.state

    this.setState({
      menu: true,
      term: e.target.value.toLowerCase(),
      cursor: 0
    })
	}

	handleKeyDown = (e) => {
    const { selectedItems, cursor } = this.state
    const filteredItems = this.filterItems()

    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < filteredItems.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (e.keyCode === 13) {
      e.preventDefault()
      if (filteredItems[cursor]) {
        this.toggleItem(filteredItems[cursor].id)(e)
      }
    } else if (e.keyCode === 8 && this.selectInput.value === '' && selectedItems.length > 0) {
    	const lastItem = selectedItems[selectedItems.length - 1]
			this.toggleItem(lastItem.id)(e)
    }
	}

	handleMouseOver = (i) => (e) => {
    this.setState({ cursor: i })
	}

	handleClick = (e) => {
    const { menu } = this.state 

    if (!menu) {
    	this.selectInput.focus()
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
    
    this.setState(prevState => ({
      menu: !prevState.menu
    }))
  }

  handleOutsideClick = (e) => {
    const filteredItems = this.filterItems()

    if (this.selectWrapper.contains(e.target)) {
      return
    }
    
    this.handleClick()

    if (filteredItems.length === 0) {
      this.selectInput.value = ''
      this.setState({term: ''})
    }
  }

  clearItems = (e) => {
    e.stopPropagation()
    const { onSelect, name, options, multiple } = this.props
    const { selectedItems } = this.state
    
    if (selectedItems.length > 0) {
      if (multiple) {
        this.setState({
          options: this.toItem(options, false),
          selectedItems: [],
          term: '',
          cursor: 0
        }, () => onSelect(name, this.state.selectedItems))
      } else {
        this.setState({
          options: this.toItem(options, false),
          term: '',
          cursor: 0
        }, () => onSelect(name, null))
      }
      this.selectInput.value = ''
    }
  }

	render() {
    const { name, placeholder, multiple, onBlur, error } = this.props
    const { selectedItems, menu, cursor, term } = this.state 

		return (
			<Wrapper>
				<Control 
					innerRef={this.setSelectWrapper} 
					onClick={this.handleClick} 
					error={error}>
					<Header>
            <ItemWrapper>
              {(multiple && selectedItems.length > 0) && 
                <Items items={selectedItems} onClick={this.toggleItem} />
              }
            </ItemWrapper>
            <InputWrapper>
              <Input 
                autoComplete="off"
                innerRef={this.setSelectInput}
                name={name}
                placeholder={placeholder}
                onBlur={onBlur}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange} 
              />
            </InputWrapper>
          </Header>
					<Indicators>
            <ButtonToggle onClick={this.clearItems}>
              <i className="fas fa-times"></i>
            </ButtonToggle>
						<ButtonToggle>
							<i className={`fas ${menu ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
						</ButtonToggle>
					</Indicators>
				</Control>
				{menu && 
          <Menu>
            <Options
              items={this.filterItems()}
              onMouseOver={this.handleMouseOver}
              cursor={cursor}
              onClick={this.toggleItem}
            />
          </Menu>
        }
			</Wrapper>
		)
	}
}

export default Select;