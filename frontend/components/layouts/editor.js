import styled from 'styled-components'
import { base, EditorWrapper } from './'
import { Editor, EditorState, RichUtils } from 'draft-js'

const Wrapper = styled('div')`
  background: #FFF;
  font-family: "Lato", sans-serif;
  font-size: 14px;
`

const Content = styled(EditorWrapper)`
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 15px;
  padding: 10px 0;
  min-height: 100px;
  .DraftEditor-editorContainer {
    margin-top: 5px;
  }
`

const Controls = styled('div')`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  user-select: none;
`

const Buttons = styled('button')`
  box-shadow: ${props => props.active ? "1px 1px 0px #BFBDBD" : "none"};
  color: ${props => props.active ? "black" : "#999"};
  cursor: pointer;
  margin-right: 12px;
  padding: 5px;
  display: inline-block;
  border: 1px solid #F1F1F1;
  &:hover {
    box-shadow: 1px 1px 0px #BFBDBD;
  }
`

export default class TextEditor extends React.Component {
  onChange = editorState => {
    this.props.onChange(this.props.name, editorState)
  }

  onBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  focus = () => this.refs.editor.focus()

  handleKeyCommand = command => {
    const { editorState } = this.props
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  onTab = e => {
    const maxDepth = 4
    this.onChange(RichUtils.onTab(e, this.props.editorState, maxDepth))
  }

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.props.editorState, blockType))
  }

  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle)
    )
  }

  render() {
    const { editorState, error, onBlur } = this.props
    
    return (
      <Wrapper data-offset-key="editor">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <Content onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            placeholder={this.props.placeholder}
            editorKey="editor"
            ref="editor"
            spellCheck={true}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onTab={this.onTab}
          />
        </Content>
      </Wrapper>
    )
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
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
    case 'unordered-list-item':
      return 'unordered-list-item'
    default:
      return null
  }
}

class ToolbarButton extends React.Component {
  constructor() {
    super()
    this.onToggle = e => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    return (
      <Buttons type="button" active={this.props.active} onMouseDown={this.onToggle}>
        {this.props.label}
      </Buttons>
    )
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' } 
]

const BlockStyleControls = props => {
  const { editorState } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <Controls>
      {BLOCK_TYPES.map(type =>
        <ToolbarButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </Controls>
  )
}

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
]

const InlineStyleControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <Controls>
      {INLINE_STYLES.map(type =>
        <ToolbarButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </Controls>
  )
}