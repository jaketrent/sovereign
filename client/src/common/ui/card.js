// adapted from https://github.com/mzabriskie/react-flipcard
import g from 'glamorous'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

function contains(parent, child) {
  do {
    if (parent === child) {
      return true
    }
  } while (child && (child = child.parentNode))
  return false
}

const Card = g.div({
  height: '20vmin',
  minWidth: '17vmin',
  perspective: 1000,
  display: 'inline-block'
})

const Flipper = g.div({
  transition: '0.6s',
  transformStyle: 'preserve-3d',
  position: 'relative',
  height: '100%',
  width: '100%'
})

const sideStyles = glamor.css({
  position: 'absolute',
  top: 0,
  left: 0,
  height: 'calc(100% - 2vmin)',
  width: 'calc(100% - 2vmin)',
  backfaceVisibility: 'hidden',
  transition: '0.6s',
  transformStyle: 'preserve-3d',
  transform: 'rotateY(0deg)'
})
const Front = g.div(
  sideStyles,
  {
    zIndex: 2
  },
  ({ faceDown }) => (faceDown ? { transform: 'rotateY(180deg)' } : null)
)
const Back = g.div(
  sideStyles,
  {
    background: 'gray',
    borderRadius: '8px',
    border: `1vmin solid #aaa`,
    transform: 'rotateY(-180deg)'
  },
  ({ faceDown }) => (faceDown ? { transform: 'rotateY(0deg)' } : null)
)

class CardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFocus: false,
      isFaceDown: this.props.faceDown
    }
    // this.handleFocus = this.handleFocus.bind(this)
    // this.handleBlur = this.handleBlur.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this._hideFaceDownSide = this._hideFaceDownSide.bind(this)
    this._showBothSides = this._showBothSides.bind(this)
  }
  componentDidMount() {
    this._hideFaceDownSide()
  }
  componentWillReceiveProps(newProps) {
    // Make sure both sides are displayed for animation
    this._showBothSides()

    // Wait for display above to take effect
    setTimeout(() => {
      this.setState({
        isFaceDown: newProps.faceDown
      })
    }, 0)
  }
  componentWillUpdate(nextProps, nextState) {
    // If card is flipping to back via props, track element for focus
    if (!this.props.faceDown && nextProps.faceDown) {
      // The element that focus will return to when faceDown back to front
      this.focusElement = document.activeElement
      // Indicates that the back of card needs focus
      this.focusBack = true
    }

    // If isFaceDown has changed need to notify
    if (this.state.isFaceDown !== nextState.isFaceDown) {
      this.notifyFlip = true
    }
  }
  componentDidUpdate() {
    // If card has faceDown to front, and focus is still within the card
    // return focus to the element that triggered flipping to the back.
    if (
      !this.props.faceDown &&
      this.focusElement &&
      contains(ReactDOM.findDOMNode(this), document.activeElement)
    ) {
      this.focusElement.focus()
      this.focusElement = null
    } else if (this.focusBack) {
      // Direct focus to the back if needed
      this.back.focus()
      this.focusBack = false
    }

    // Notify card being faceDown
    if (this.notifyFlip && typeof this.props.onFlip === 'function') {
      this.props.onFlip(this.state.isFaceDown)
      this.notifyFlip = false
    }

    // Hide whichever side of the card is down
    setTimeout(this._hideFaceDownSide, 600)
  }
  handleClick() {
    this.setState(_ => ({ isFaceDown: !this.state.isFaceDown }))
  }
  _showBothSides() {
    this.front.style.display = ''
    this.back.style.display = ''
  }
  _hideFaceDownSide() {
    // This prevents the faceDown side from being tabbable
    if (this.props.disabled) {
      if (this.state.isFaceDown) {
        this.front.style.display = 'none'
      } else {
        this.back.style.display = 'none'
      }
    }
  }
  render() {
    return (
      <Card tabIndex={0} onClick={this.handleClick}>
        <Flipper>
          <Front
            ref={c => (this.front = ReactDOM.findDOMNode(c))}
            tabIndex={-1}
            aria-hidden={this.state.isFaceDown}
            faceDown={this.state.isFaceDown}
          >
            {this.props.children}
          </Front>
          <Back
            ref={c => (this.back = ReactDOM.findDOMNode(c))}
            tabIndex={-1}
            aria-hidden={!this.state.isFaceDown}
            faceDown={this.state.isFaceDown}
          />
        </Flipper>
      </Card>
    )
  }
}

CardComponent.propTypes = {
  faceDown: PropTypes.bool,
  disabled: PropTypes.bool,
  onFlip: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired
}
CardComponent.defaultProps = {
  faceDown: false,
  disabled: false
}

export default CardComponent
