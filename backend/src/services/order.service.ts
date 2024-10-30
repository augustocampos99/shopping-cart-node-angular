import OrderModel from "../models/order.model";
import OrderRequest from "./../contracts/order.request";
import crypto from "crypto";

export default class OrderService {

  public async getAll(){
    try {
      const result = await OrderModel.findAll();
      return result;            
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async getByGuid(guid: string) {    
    try {
      const result = await OrderModel.findOne({
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

  public async create(order: OrderRequest) {
    try {
      const data = {
        guid: crypto.randomUUID(),
        customerId: order.customerId,
        totalPrice: order.totalPrice,
        status: order.status
      };

      const result = await OrderModel.create(data);

      return result;
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async update(order: OrderRequest, guid: string) {
    try {
      const data = {
        customerId: order.customerId,
        totalPrice: order.totalPrice,
        status: order.status
      };

      const result = await OrderModel.update(data, {
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
      const result = await OrderModel.destroy({
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

