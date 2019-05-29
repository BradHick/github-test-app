import moment from 'moment';

export default lastCommit => {

  const lastCommitDate = moment.duration(moment().diff(lastCommit)).asDays();

  let result = {};

  if (lastCommitDate <= 30) {
    result.color = '#28c38d';
    result.message = 'Updates: Earlier 30 days';
  }
  if (lastCommitDate > 30 && lastCommitDate <= 60) {
    result.color = '#ffbc34';
    result.message = 'Updates: Between 30 and 60 days';
  }

  if (lastCommitDate > 60 && lastCommitDate <= 90) {
    result.color = '#f2f2f2';
    result.message = 'Updates: Between 60 and 90 days';
  }

  if (lastCommitDate > 90) {
    result.color = '#ff6666';
    result.message = 'Updates: After 90 days without update';
  }
  return result;
};