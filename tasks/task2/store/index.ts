interface ProductToAddData {
  id: string;
  quantity: number;
}

interface PlaceOrderData {
  productId: string;
  quantity: number;
}

interface Result {
  status: "success" | "failure";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details: any;
}

export class Store {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeOrder(placeOrderData: PlaceOrderData): Promise<Result> {
    return Promise.resolve({
      status: "failure",
      details: { error: "unrecognized id" },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addProduct(productToAddData: ProductToAddData): Promise<Result> {
    return Promise.resolve({
      status: "failure",
      details: { error: "unrecognized id" },
    });
  }
}
