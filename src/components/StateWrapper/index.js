import { keyframes } from "emotion"
import styled from "emotion/react"

const getBorderColor = props => {
  if (props.booked) return "#FF0000"
  if (props.underconstruction) return "#FBF344"

  return "#47B350"
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const StateWrapper = styled("div")`
  display: flex;
  align-items: flex-start;
  align-self: flex-start;
  flex-direction: column;
  border-color: ${props => getBorderColor(props)};
  border-width: 2.076vmax;
  border-left-style: solid;
  padding-left: 2.6vmax;
  margin-left: 2.6vmax;
  animation: ${fadeIn} 2s;
`

export default StateWrapper
