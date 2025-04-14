import styled from '@emotion/styled';

export const Wrapper = styled.div({
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  margin: 'auto',
});

export const Icon = styled.div(({
  width,
  height
}: {
  width: number,
  height: number,
}) => ({
  width,
  height,
}));

export const SvgBox = styled.svg({
  animation: 'rotate 2s linear infinite',
  height: '100%',
  transformOrigin: 'center center',
  width: '100%',
});

export const Track = styled.circle({
  opacity: 0.2,
});

export const Circle = styled.circle({
  strokeDasharray: '1, 200',
  strokeDashoffset: 0,
  animation: 'dash 1.5s ease-in-out infinite',
  strokeLinecap: 'round',
});
