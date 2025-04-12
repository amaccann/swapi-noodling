import {Circle, Icon, SvgBox, Track, Wrapper} from './styled';
import { gray, red } from '../../colors';

const DEFAULT_VALUE = 50;

export default function Loader({
  innerColor = red,
  outerColor = gray,
  style = {},
  width = DEFAULT_VALUE,
}: {
  innerColor?: string,
  outerColor?: string,
  style?: Record<string, string|number>,
  width?: number,
}) {
  const halfWidth = width * 0.5;
  const viewBox = `${halfWidth} ${halfWidth} ${width} ${width}`;
  const rValue = width * 0.44;
  const strokeWidth = (width / DEFAULT_VALUE) * 5;

  return (
    <Wrapper style={style}>
      <Icon width={width} height={width}>
        <SvgBox viewBox={viewBox}>
          <Track
            cx={width}
            cy={width}
            r={rValue}
            fill="none"
            stroke={outerColor}
            strokeWidth={strokeWidth}
          />
          <Circle
            cx={width}
            cy={width}
            r={rValue}
            fill="none"
            stroke={innerColor}
            strokeWidth={strokeWidth}
          />
        </SvgBox>
      </Icon>
    </Wrapper>
  );
}