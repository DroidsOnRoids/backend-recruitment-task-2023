import Invoice from './Invoice';

class InvoicesDB {
  private readonly invoices: Invoice[] = [
    {
      companyName: 'Microsoft',
      departmentName: 'Software',
      amount: 2,
    }, {
      companyName: 'Microsoft',
      departmentName: 'Hardware',
      amount: 3,
    }, {
      companyName: 'Apple',
      departmentName: 'iPhones',
      amount: 8,
    },
  ];

  public findInvoicesByCompanyName(names: string[]): Invoice[] {
    return this.invoices.filter((invoice: Invoice) => names.includes(invoice.companyName));
  }
}
export default InvoicesDB;
