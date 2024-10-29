import CustomerModel from "../models/customer.model";
import CustomerRequest from "./../contracts/customer.request";
import crypto from "crypto";

export default class CustomerService {

  public async getAll(){
    const result = await CustomerModel.findAll();
    return result;    
  }

  public async getByGuid(guid: string){    
  }

  public async create(customer: CustomerRequest){
    const guid = crypto.randomUUID();
  }

  public async update(customer: CustomerRequest, guid: string){
    
  }

  public async delete(guid: string){
    
  }

}

