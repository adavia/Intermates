import styled from 'styled-components'

const Option = styled('li')`
	box-sizing: border-box;
	background-color: ${props => props.active ? "#f4f4f4" : "#FFF"};
	color: #333;
	cursor: pointer;
	display: block;
	font-size: 15px;
	padding: 10px 10px;
	&:hover {
		background-color: #f4f4f4;
	}
`

const OptionContent = styled('div')`
  display: inline;
`

const OptionSelect = styled('div')`
	float: right;
`

const Options = ({ items, onMouseOver, onClick, cursor }) => {
	if (items.length > 0) {
		return items.map((item, i) => 
			<Option
				key={item.id}
				active={cursor === i}
				onMouseOver={onMouseOver(i)}
				onClick={onClick(item.id)}>
				<OptionContent>
					{item.label}
				</OptionContent>
				<OptionSelect>
					{item.selected && <i className="fas fa-check"></i>}
				</OptionSelect>
			</Option>
		)
  } else {
  	return (
			<Option onClick={onClick(null)}>
				<OptionContent>
					No results were found
				</OptionContent>
			</Option>
  	)
  }
}

export default Options;