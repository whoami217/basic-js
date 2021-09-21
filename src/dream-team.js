import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(membersArray) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(membersArray)) {
	  return false;
  }
      let nameTeam = '';
	membersArray = membersArray.filter(function(membersItem){
		return typeof membersItem === 'string' && membersItem.length > 0;
	});
	if (membersArray.length === 0) {
		return false;
	}
  membersArray = membersArray.map(function(membersItem) {
	
		let membersItemTrimmed = membersItem.trim();
		membersItemTrimmed = membersItemTrimmed[0].toUpperCase();
		return membersItemTrimmed;
	 
	 
  });
  membersArray = membersArray.sort();
  membersArray.forEach(function(membersItem, i) {
		nameTeam = nameTeam + membersItem;
  });
  //console.log(nameTeam);
  return nameTeam;
}
