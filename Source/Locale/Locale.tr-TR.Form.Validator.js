/*
---

name: Locale.tr-TR.Form.Validator

description: Form Validator messages for Turkish.

license: MIT-style license

authors:
  - Faruk Can Bilir

requires:
  - /Locale

provides: [Locale.tr-TR.Form.Validator]

...
*/

Locale.define('tr-TR', 'FormValidator', {

	required: 'Bu alan zorunlu.',
	minLength: 'L�tfen en az {minLength} karakter girin (siz {length} karakter girdiniz).',
	maxLength: 'L�tfen en fazla {maxLength} karakter girin (siz {length} karakter girdiniz).',
	integer: 'L�tfen bu alana sadece tamsay� girin. Ondal�kl� say�lar (�r: 1.25) kullan�lamaz.',
	numeric: 'L�tfen bu alana sadece say�sal de�er girin (�r: "1", "1.1", "-1" ya da "-1.1").',
	digits: 'L�tfen bu alana sadece say�sal de�er ve noktalama i�areti girin (�rne�in, nokta ve tire i�eren bir telefon numaras� kullan�labilir).',
	alpha: 'L�tfen bu alanda yaln�zca harf kullan�n. Bo�luk ve di�er karakterler kullan�lamaz.',
	alphanum: 'L�tfen bu alanda sadece harf ve rakam kullan�n. Bo�luk ve di�er karakterler kullan�lamaz.',
	dateSuchAs: 'L�tfen ge�erli bir tarih girin (�r: {date})',
	dateInFormatMDY: 'L�tfen ge�erli bir tarih girin (GG/AA/YYYY, �r: "31/12/1999")',
	email: 'L�tfen ge�erli bir email adresi girin. �r: "kemal@etikan.com".',
	url: 'L�tfen ge�erli bir URL girin. �r: http://www.google.com.',
	currencyDollar: 'L�tfen ge�erli bir TL miktar� girin. �r: 100,00 TL .',
	oneRequired: 'L�tfen en az bir tanesini doldurun.',
	errorPrefix: 'Hata: ',
	warningPrefix: 'Uyar�: ',

	// Form.Validator.Extras
	noSpace: 'Bu alanda bo�luk kullan�lamaz.',
	reqChkByNode: 'Hi�bir ��e se�ilmemi�.',
	requiredChk: 'Bu alan zorunlu.',
	reqChkByName: 'L�tfen bir {label} girin.',
	match: 'Bu alan, {matchName} alan�yla uyu�mal�',
	startDate: 'ba�lang�� tarihi',
	endDate: 'biti� tarihi',
	currendDate: 'bug�n�n tarihi',
	afterDate: 'Tarih, {label} tarihiyle ayn� g�n ya da ondan sonra olmal�d�r.',
	beforeDate: 'Tarih, {label} tarihiyle ayn� g�n ya da ondan �nce olmal�d�r.',
	startMonth: 'L�tfen bir ba�lang�� ay� se�in',
	sameMonth: 'Bu iki tarih ayn� ayda olmal� - bir tanesini de�i�tirmeniz gerekiyor.',
	creditcard: 'Girdi�iniz kredi kart� numaras� ge�ersiz. L�tfen kontrol edip tekrar deneyin. {length} hane girildi.'

});
