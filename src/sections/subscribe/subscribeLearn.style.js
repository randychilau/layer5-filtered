import styled from "styled-components";

const SubscribeLearnWrapper = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 2.5rem;

  h2 {
    color: #00b39f;
    margin: 0.5rem;
  }

  p {
    font-size: 0.75rem;
    margin: 0 0 1rem 0;
  }

  .inputrow {
    width: 50%;
  }

  #mc-embedded-subscribe {
    width: 20%;
    min-width: 115px;
  }

  .subscribe {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;

export default SubscribeLearnWrapper;
