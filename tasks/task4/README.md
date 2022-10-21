# DI^2 task

Run tests:
```bash
npm test
```

There is class `AccountingDepartment` which calculates total income for big companies like Microsoft.
It uses `InvoicesDB` which is our file database (it loads data from file in very JS way).
We would like to refator the code so it will be easy to replace our file DB (InvoiceDB) with the new SQL one.
Your task is to refactor the code in thew way that we will be able to replace the DB easily.
