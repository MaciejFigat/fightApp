import styled from 'styled-components'

export const BlurredFatText = styled.b`
  font-size: var(--font-size-small);
  color: var(--background-blur3);
  font-weight: 600;
`
export const BlurredSkinnyText = styled(BlurredFatText)`
  min-width: fit-content;
  transform: uppercase;
  font-weight: 400;
  @media (max-width: 760px) {
    min-width: 100px;
  }
`
export const BetDetails = styled.div`
  display: grid;
  place-items: center;
  padding: var(--padding-big);
  background: var(--background-blur0);
  gap: var(--gap-huge);
  width: 100%;
  @media (max-width: 1040px) {
    width: 600px;
  }
  @media (max-width: 610px) {
    max-width: 70%;
    padding: var(--gap-medium) 0;
  }
`
export const BetVisualisationLimiter = styled.div`
  max-width: 370px;
  @media (max-width: 340px) {
    width: 200px;
  }
  @media (max-width: 1040px) {
    max-width: 300px;
  }
`
export const BetVisualisationLeft = styled.div`
  display: grid;
  place-items: center;
  padding: 0;
  width: 120px;
  min-height: 50px;
  border-top-left-radius: var(--border-radius1);
  border-bottom-left-radius: var(--border-radius1);
  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);

  background: linear-gradient(
      90deg,
      var(--gold1) 0%,
      var(--background-blur1) 36%,
      var(--background-blur2) 100%
    ),
    linear-gradient(
      90deg,
      var(--background-blur0) 0%,
      var(--background3-main) 100%
    );
  @media (max-width: 1040px) {
    font-size: var(--font-size-small);
    width: 70px;
    min-height: 40px;
  }
  @media (max-width: 760px) {
    width: 65px;
    min-height: 35px;
  }
`
export const BetVisualisationMiddle = styled(BetVisualisationLeft)`
  border-radius: 0;
  padding: var(--padding-medium);
  place-items: center;
  -webkit-clip-path: polygon(
    75% 0%,
    100% 50%,
    75% 100%,
    0% 100%,
    25% 50%,
    0% 0%
  );
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

  background: linear-gradient(
      90deg,
      var(--background-blur0) 10%,
      var(--background2-main) 56%,
      var(--background2-main) 100%
    ),
    linear-gradient(
      90deg,
      var(--background3-main) 0%,
      var(--background2-secondary) 100%
    );
`
export const BetVisualisationRight = styled(BetVisualisationLeft)`
  border-radius: 0;
  padding: var(--padding-big);
  border-top-right-radius: var(--border-radius1);
  border-bottom-right-radius: var(--border-radius1);
  place-items: center flex-end;

  -webkit-clip-path: polygon(
    100% 0,
    100% 50%,
    100% 100%,
    0% 100%,
    25% 50%,
    0% 0%
  );
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);

  background: linear-gradient(
      90deg,
      var(--background-blur0) 0%,
      var(--background2-main) 66%,
      var(--background-blur1) 100%
    ),
    linear-gradient(90deg, var(--background3-main) 0%, var(--success1) 100%);
  @media (max-width: 1040px) {
    padding: var(--padding-medium);
  }
  @media (max-width: 760px) {
    padding: var(--padding-small);
  }
`
