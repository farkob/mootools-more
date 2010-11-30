/*
---

name: Locale.tr-TR.Date

description: Date messages for Turkish.

license: MIT-style license

authors:
  - Faruk Can Bilir

requires:
  - /Locale

provides: [Locale.tr-TR.Date]

...
*/

Locale.define('tr-TR', 'Date', {

	months: ['Ocak', '�ubat', 'Mart', 'Nisan', 'May�s', 'Haziran', 'Temmuz', 'A�ustos', 'Eyl�l', 'Ekim', 'Kas�m', 'Aral�k'],
	months_abbr: ['Oca', '�ub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'A�u', 'Eyl', 'Eki', 'Kas', 'Ara'],
	days: ['Pazar', 'Pazartesi', 'Sal�', '�ar�amba', 'Per�embe', 'Cuma', 'Cumartesi'],
	days_abbr: ['Pa', 'Pzt', 'Sa', '�a', 'Pe', 'Cu', 'Cmt'],

	// Culture's date order: MM/DD/YYYY
	dateOrder: ['date', 'month', 'year'],
	shortDate: '%d/%m/%Y',
	shortTime: '%H.%M',
	AM: 'AM',
	PM: 'PM',

	// Date.Extras
	ordinal: '',

	lessThanMinuteAgo: 'bir dakikadan �nce',
	minuteAgo: 'yakla��k bir dakika �nce',
	minutesAgo: '{delta} dakika �nce',
	hourAgo: 'bir saat kadar �nce',
	hoursAgo: '{delta} saat kadar �nce',
	dayAgo: 'bir g�n �nce',
	daysAgo: '{delta} g�n �nce',
	weekAgo: 'bir hafta �nce',
	weeksAgo: '{delta} hafta �nce',
	monthAgo: 'bir ay �nce',
	monthsAgo: '{delta} ay �nce',
	yearAgo: 'bir y�l �nce',
	yearsAgo: '{delta} y�l �nce',

	lessThanMinuteUntil: 'bir dakikadan az sonra',
	minuteUntil: 'bir dakika kadar sonra',
	minutesUntil: '{delta} dakika sonra',
	hourUntil: 'bir saat kadar sonra',
	hoursUntil: '{delta} saat kadar sonra',
	dayUntil: 'bir g�n sonra',
	daysUntil: '{delta} g�n sonra',
	weekUntil: 'bir hafta sonra',
	weeksUntil: '{delta} hafta sonra',
	monthUntil: 'bir ay sonra',
	monthsUntil: '{delta} ay sonra',
	yearUntil: 'bir y�l sonra',
	yearsUntil: '{delta} y�l sonra'

});
