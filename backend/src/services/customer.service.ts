import CustomerModel from "../models/customer.model";
import CustomerRequest from "./../contracts/customer.request";
import crypto from "crypto";

export default class CustomerService {

  public async getAll(){
    try {
      const result = await CustomerModel.findAll();
      return result;            
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async getByGuid(guid: string) {    
    try {
      const result = await CustomerModel.findOne({
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

  public async getById(id: number) {    
    try {
      const result = await CustomerModel.findOne({
        where: {
          id: id
        }
      });
      return result;    
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async create(customer: CustomerRequest) {
    try {
      const data = {
        guid: crypto.randomUUID(),
        name: customer.name,
        email: customer.email,
        phone: customer.phone
      };

      const result = await CustomerModel.create(data);

      return result;
    } 
    catch (error: any) {
      throw new Error(`Processing error: ${ error }`);
    }
  }

  public async update(customer: CustomerRequest, guid: string) {
    try {
      const data = {
        name: customer.name,
        email: customer.email,
        phone: customer.phone
      };

      const result = await CustomerModel.update(data, {
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
      const result = await CustomerModel.destroy({
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

