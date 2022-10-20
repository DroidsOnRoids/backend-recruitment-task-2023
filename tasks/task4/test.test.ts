import AccountingDepartment from './src/AccountingDepartment';

const ad = new AccountingDepartment();

test('calculates total for Microsoft', () => {
  expect(ad.totalAmountOfAllInvoicesFor('Microsoft')).toEqual(5);
});

test('calculates total for Apple', () => {
  expect(ad.totalAmountOfAllInvoicesFor('Apple')).toEqual(8);
});

test('calculates total for Nestle', () => {
  expect(ad.totalAmountOfAllInvoicesFor('Nestle')).toEqual(0);
});
