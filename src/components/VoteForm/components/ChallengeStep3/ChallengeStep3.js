import React from 'react';
import PropTypes from 'prop-types';
import CustomBtn from '../../../generic/CustomBtn';

const ChallengeStep3 = ({ data }) => {
  const { affirmed, numOfORP, setEscalationPeriod } = data;
  return (
    <div className="project__validate-wrapper wrapper-step2">
      <h2 className="project__validate-title title-step2">
        {affirmed ? (
          <>
            <span>Congratulations!</span>
            <p>Your challenge is SUCCESSFUL!</p>
          </>
        ) : (
          <span>Unfortunately, your challenge FAILED!</span>
        )}
      </h2>
      <span className="project__validate-result">
        {affirmed ? (
          <>
            Your vote stake {+numOfORP || 100} ORP will remain locked until
            stage resolution is confirmed.
          </>
        ) : (
          <>
            Your {+numOfORP || 100} ORP stake has been unlocked and returned to
            your balance!
          </>
        )}
      </span>
      <div className="project__validate-buttons buttons-step2">
        <CustomBtn
          label="Go To Escalation"
          handleClick={() => setEscalationPeriod(true)}
          customClass="btn__load btn-step2"
        />
      </div>
    </div>
  );
};

ChallengeStep3.propTypes = {
  data: PropTypes.object,
};

export default ChallengeStep3;