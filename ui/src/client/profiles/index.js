import { reduce, assoc } from 'ramda';
import example from './Example/profile';

const profiles = [example];

export const profilesByIssueNumber = reduce(
  (map, profile) => assoc(profile.issueNumber, profile, map),
  {},
  profiles,
);

export default profiles;
