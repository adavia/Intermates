import styled from 'styled-components'
import React, { Component, Fragment } from 'react'

const Nav = styled('ul')`
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
  margin-top: 25px;
  margin-left: 2px;
  text-align: center;
`

const List = styled('li')`
  display: inline-block;
  cursor: pointer;
  pointer-events: ${props => props.active ? "none" : "normal"};
  opacity: ${props => props.active ? "0.6" : "none"}; 
  font-weight: ${props => props.active ? "900" : "normal"};
  &:hover {
    font-weight: 900;
  }
`

const Link = styled('a')`
  border: 1px solid #6b88a4;
  min-width: 3.5rem;
  padding: 0.75rem 1rem;
  text-align: center;
  box-shadow: none !important;
  margin-left: -1px;
  color: ${props => props.active ? "grey" : "#0079d3"};
  font-size: 1rem;
  text-decoration: none;
`

const LEFT_PAGE = "LEFT"
const RIGHT_PAGE = "RIGHT"

const range = (from, to, step = 1) => {
  let i = from;
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

class Pagination extends Component {
  constructor(props) {
    super(props)
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props

    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0

    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)

    this.state = { currentPage: props.pageNumber }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageNumber > this.props.pageNumber && this.state.currentPage > this.props.pageNumber) {
      this.setState({currentPage: 1})
    }
  }

  gotoPage = (page) => {
    const { onPageChanged = f => f } = this.props

    const currentPage = Math.max(0, Math.min(page, this.totalPages))

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    }

    this.setState({ currentPage }, () => onPageChanged(paginationData))
  }

  handleClick = (page, evt) => {
    evt.preventDefault()
    this.gotoPage(page)
  }

  handleMoveLeft = evt => {
    evt.preventDefault()
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1)
  }

  handleMoveRight = evt => {
    evt.preventDefault()
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1)
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = this.pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 1

      const startPage = leftBound > 2 ? leftBound : 2
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 1

      const leftSpill = startPage > 2
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [leftSpillPage, ...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages, rightSpillPage]
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage]
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  render() {
    if (!this.totalRecords) return null
    if (this.state.currentPage > this.pageNeighbours) return null
    if (this.totalPages === 1) return null

    const { currentPage } = this.state
    const pages = this.fetchPageNumbers()

    return (
      <Nav>
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <List key={index}>
                <Link
                  href="#"
                  aria-label="Previous"
                  onClick={this.handleMoveLeft}>
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </Link>
              </List>
            )
          if (page === RIGHT_PAGE)
            return (
              <List key={index}>
                <Link
                  href="#"
                  aria-label="Next"
                  onClick={this.handleMoveRight}>
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </Link>
              </List>
            )

          return (
            <List key={index} 
              active={currentPage === page}>
              <Link
                href="#"
                onClick={e => this.handleClick(page, e)}>
                {page}
              </Link>
            </List>
          )
        })}
      </Nav>
    )
  }
}

export default Pagination
