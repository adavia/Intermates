import styled from 'styled-components'
import { base, EditorWrapper } from '../layouts'
import { Editor } from 'draft-js'

const Wrapper = styled(EditorWrapper)`
  font-size: 15px;
  margin: 10px 0 15px 0;
  color: black;
  cursor: default;
`

const TopicContent = ({ editorState }) => {
	return (
		<Wrapper>
			<Editor
	      blockStyleFn={getBlockStyle}
	      customStyleMap={styleMap}
	      editorState={editorState}
	      editorKey="editor"
	      readOnly={true}
	    />
    </Wrapper>
	)
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16
  }
}

function getBlockStyle(block) {
  switch (block.getType()) {
  	case 'header-one':
      return 'header-one'
    case 'header-two':
      return 'header-two'
    case 'header-three':
      return 'header-three'
    case 'header-four':
      return 'header-four'
    case 'header-five':
      return 'header-five'
    case 'header-six':
      return 'header-six'
    case 'blockquote':
      return 'blockquote'
    case 'code-block':
      return 'codeblock'
    case 'ordered-list-item':
    	return 'ordered-list-item'
    default:
      return null
  }
}

export default TopicContent