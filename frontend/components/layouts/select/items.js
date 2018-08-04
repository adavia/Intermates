import styled from 'styled-components'

const Item = styled('div')`
	display: flex;
	color: rgba(0,0,0,.65);
  background-color: #FFF;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  font-size: 14px;
  margin-right: 5px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const ItemTitle = styled('div')`
	padding: 5px;
	border-right: 1px solid #e8e8e8;
`;

const RemoveItem = styled('div')`
  font-size: 12px;
  padding: 7px;
  cursor: pointer;
  &:hover {
  	background-color: #e8e8e8;
  }
`

const Items = ({ items, onClick }) => {
	return items.map(item =>
		<Item key={item.id}>
			<ItemTitle>{item.label}</ItemTitle>
			<RemoveItem onClick={onClick(item.id)}>
				<i className="fas fa-times"></i>
			</RemoveItem>
		</Item>
	)
}

export default Items;