import React from 'react'
import styled, { css } from 'styled-components'
import omit from 'lodash/omit'
import Tag from 'clean-tag'

import { 
  space, 
  width,
  height,
  fontSize, 
  fontWeight,
  color,
  top,
  right,
  left,
  bottom,
  borders,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  order
} from 'styled-system'

export const base = (tag, omitProps = []) => styled(props =>
  React.createElement(Tag[tag], omit(props, omitProps))
)`
  ${space};
  ${width};
  ${height};
  ${fontSize};
  ${color};
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  ${fontWeight};
  ${order};
  ${top};
  ${right};
  ${left};
  ${bottom};
  ${borders};
`

export const Flex = styled(base('div'))`
  box-sizing: border-box;
  display: flex;
`

export const Icon = styled(base('i'))``

export const Text = styled(base('div'))``

export const Image = styled(base('img'))`
  display: block;
  max-width: 100%;
  height: auto;
`

export const Button = styled(base('button'))`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  color: white;
  padding: 8px 25px;
  border-radius: 3px;
  text-transform: uppercase;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 1
  }
`

export const InputWrapper = styled(base('div'))`
  margin-bottom: 15px;
  .react-datepicker {
    font-family: inherit;
  }
`

export const Fixed = styled(base('div'))`
  position: fixed;
`

export const Modal = styled(Flex)`
  background-color: #fefefe;
  border-radius: 4px;
  margin: 5% auto;
`

export const inputStyles = css`
  padding: 0.7em;
  width: 100%;
  background-color: hsl(0,0%,98%);
  border-color: ${props => props.error ? "red" : "hsl(0,0%,80%)"};
  font-family: inherit;
  font-size: 15px;
  border-style: solid;
  border-radius: 0;
  border-width: 1px;
  outline: none;
  &:hover {
    border-color: ${props => props.error ? "red" : "hsl(0,0%,70%)"};
  }
`

export const Input = styled(base('input'))`
  ${inputStyles}
`

export const InputSelect = styled(base('select'))`
  appearance: none;
  ${inputStyles}
`

export const InputError = styled(base('div'))`
  color: red;
  font-size: 14px;
  margin-top: 3px;
`

export const SubMenu = styled('ul')`
  @media (max-width: 40em) {
    position: relative;
    border: none;
    margin-left: 10px;
  }
  display: ${props => props.display};
  position: absolute;
  padding: 0;
  min-width: 12rem;
  margin: 8px 0 0;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
`

export const EditorWrapper = styled('div')`
  .header-one,
  .header-two,
  .header-three,
  .header-four,
  .header-five,
  .header-six {
    margin: 0;
  }

  ol, ul {
    margin: 10px 0 0 0;
  }

  .ordered-list-item, .unordered-list-item {
    padding: 5px;
  }

  .codeblock {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
    font-size: 16px;
    margin: 0;
    padding: 15px;
    white-space: normal;
  }

  .blockquote {
    border-left: 5px solid #eee;
    color: #666;
    font-family: 'Hoefler Text', 'Georgia', serif;
    font-style: italic;
    margin: 15px 0 0 0;
    padding: 10px 20px;
  }
`