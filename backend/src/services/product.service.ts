import ProductModel from "../models/product.model";
import ProductRequest from "./../contracts/product.request";
import crypto from "crypto";

export default class ProductService {

  public async getAll(){
    try {
      const result = await ProductModel.findAll();
      return result;            
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async getByGuid(guid: string) {    
    try {
      const result = await ProductModel.findOne({
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

  public async create(product: ProductRequest) {
    try {
      const data = {
        guid: crypto.randomUUID(),
        title: product.title,
        description: product.description,
        price: product.price
      };

      const result = await ProductModel.create(data);

      return result;
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async update(product: ProductRequest, guid: string) {
    try {
      const data = {
        title: product.title,
        description: product.description,
        price: product.price
      };

      const result = await ProductModel.update(data, {
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
      const result = await ProductModel.destroy({
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

