import OrderProductModel from "../models/order_product.model";
import OrderProductRequest from "./../contracts/order_product.request";
import crypto from "crypto";

export default class OrderProductService {

  public async getAll(){
    try {
      const result = await OrderProductModel.findAll();
      return result;            
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async getByGuid(guid: string) {    
    try {
      const result = await OrderProductModel.findOne({
        where: {
          guid: guid
        }
      });
      return result;    
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async create(orderProduct: OrderProductRequest) {
    try {
      const data = {
        guid: crypto.randomUUID(),
        orderId: orderProduct.orderId,
        productId: orderProduct.productId,
        quantity: orderProduct.quantity,
        price: orderProduct.price
      };

      const result = await OrderProductModel.create(data);

      return result;
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async update(orderProduct: OrderProductRequest, guid: string) {
    try {
      const data = {
        orderId: orderProduct.orderId,
        productId: orderProduct.productId,
        quantity: orderProduct.quantity,
        price: orderProduct.price
      };

      const result = await OrderProductModel.update(data, {
        where: {
          guid: guid
        }
      });

      return result;       
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async delete(guid: string) {
    try {
      const result = await OrderProductModel.destroy({
        where: {
          guid: guid
        }
      });
      return result;        
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

}

