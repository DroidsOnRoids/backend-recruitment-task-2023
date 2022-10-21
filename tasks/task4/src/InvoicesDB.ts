import Invoice from './Invoice';
import dbData from './dbData';

class InvoicesDB {
  public findInvoicesByCompanyName(names: string[]): Invoice[] {
    return dbData.filter((invoice: Invoice) => names.includes(invoice.companyName));
  }
}
export default InvoicesDB;
