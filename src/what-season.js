import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
	if (typeof date === "undefined") {
		return 'Unable to determine the time of year!';
	}
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // TODO: проверка на наличие аргумента Unable to determine the time of year!
    if (typeof date === 'string') {
		const month = date.split("-")[1];
		if (month === 11 || month === 0 || month === 1) {
			return 'winter';
		} else if (month === 2 || month === 3 || month === 4) {
			return 'spring';
		} else if (month === 5 || month === 6 || month === 7) {
			return 'summer';
		} else if (month === 8 || month === 9 || month === 10) {
			return 'autumn';
		} else {
			throw new Error('Invalid date!');
		}
	}
	else if (date instanceof Date) {
		const month = date.getMonth();
		if (month === 11 || month === 0 || month === 1) {
			return 'winter';
		} else if (month === 2 || month === 3 || month === 4) {
			return 'spring';
		} else if (month === 5 || month === 6 || month === 7) {
			return 'summer';
		} else if (month === 8 || month === 9 || month === 10) {
			return 'autumn';
		}
	}
	/*
		console.log('Успех 1!');
		console.log(date.getMonth());
		//if ((date.getFullYear() == arrD[2]) && (date.getMonth() == arrD[1]) && (date.getDate() == arrD[0])) {
		if (date.getMonth() < 12){	
			console.log(date.getMonth() + ' Введен корректный месяц!');
			return true;
		} else {
			console.log('Введена некорректная дата!');
			return false;
		}*/
	else {
		throw new Error('Invalid date!');
	}
  // TODO: проверка на валидность. Если не валидно, то пишем ошибку (Invalid date!)
  // TODO: определяем сезон по месяцу
  // TODO: 

}
