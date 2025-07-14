import { Store } from "./store";

describe("e2e tests", () => {
  let store: Store;

  beforeEach(() => {
    store = new Store();
  });

  test("As a shopper I can buy a product only when there are some in stock", async () => {
    const result1 = await store.placeOrder({
      productId: "id-1",
      quantity: 3,
    });
    expect(result1.status).toEqual("failure");
    expect(result1.details).toEqual({ error: "unrecognized id" });

    const result2 = await store.addProduct({
      id: "id-1",
      quantity: 10,
    });
    expect(result2.status).toEqual("success");

    const result3 = await store.placeOrder({
      productId: "id-1",
      quantity: 3,
    });
    expect(result3.status).toEqual("success");
  });
});
