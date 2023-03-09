# Store
Let's imagine that we are building the store app.
It should be the simple store where we can just manage orders and products (as admins).
Customers should be able to place the order.

Run the tests like before:
```bash
npm test
```
or
```bash
npm run test-watch
```


Make them green.

1. Add more tests and code to make the store functional.
2. Create products repository.
3. Add shopper and admin user. Only admin can add products.
4. Calculate shipping cost for placed order:
  - shipping cost = 3 * quantity + 2
  - for orders with quantity above 10 shipping cost is always 35
5. Add a feature where shipping cost is free next Christmas Eve (24.12)
6. Fix Result type so it is more type safe. Get rid of `any` in details
