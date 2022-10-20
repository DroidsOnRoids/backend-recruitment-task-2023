import Invoice from './Invoice';
import InvoicesDB from './InvoicesDB';

class AccountingDepartment {
  public totalAmountOfAllInvoicesFor(companyName: string): number {
    const invoices = new InvoicesDB().findInvoicesByCompanyName([companyName]);
    return invoices.reduce((sum: number, invoice: Invoice) => sum + invoice.amount, 0);
  }
}
export default AccountingDepartment;
