import React from 'react';
import PropTypes from 'prop-types';
import ChallengeStep2 from '../ChallengeStep2';
import ValidationStep2 from '../ValidationStep2';

const Step2Wrapper = ({ data }) => {
  const {
    challengePeriod,
    numOfORP,
    stakingFinished,
    confirmVote,
    cancelVote,
    isRevoked,
    voteResult,
    changeVote,
    revokeVote,
    timeLeft,
  } = data;
  return (
    <>
      {challengePeriod ? (
        <ChallengeStep2 data={{ stakingFinished, confirmVote, cancelVote }} />
      ) : (
        <ValidationStep2
          data={{
            isRevoked,
            numOfORP,
            voteResult,
            stakingFinished,
            changeVote,
            revokeVote,
            timeLeft,
          }}
        />
      )}
    </>
  );
};

Step2Wrapper.propTypes = {
  data: PropTypes.object,
};

export default Step2Wrapper;