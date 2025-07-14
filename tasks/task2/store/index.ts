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
  details: any;
}

export class Store {
  placeOrder(placeOrderData: PlaceOrderData): Promise<Result> {
    return Promise.resolve({
      status: "failure",
      details: { error: "unrecognized id" },
    });
  }

  async addProduct(productToAddData: ProductToAddData): Promise<Result> {
    return Promise.resolve({
      status: "failure",
      details: { error: "unrecognized id" },
    });
  }
}
