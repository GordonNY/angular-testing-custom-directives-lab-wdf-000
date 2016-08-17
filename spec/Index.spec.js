describe('Directive', function() {
	browser.get('http://localhost:8080');

	it('should display the info correctly', function() {
		var directive = element.all(by.css('user-profile'));

		expect(directive.first().getText()).toContain('Name');
		expect(directive.first().getText()).toContain('Position');
		expect(directive.first().getText()).toContain('Description');
		expect(directive.first().getText()).toContain('Bill Gates');
	})
});