const FormPage = require('../pageobjects/form.page');

describe('My Form application', () => {
    it('should find a h1 with the text "Form Fields" ', async () => {
        await FormPage.open();

        await expect(FormPage.header).toHaveTextContaining(
            'Form Fields');
    })
});
