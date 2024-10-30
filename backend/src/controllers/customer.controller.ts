import BaseResponse from "../contracts/base.response";
import CustomerRequest from "./../contracts/customer.request";
import CustomerService from "./../services/customer.service";
import { Request, Response } from "express";

class CustomerController {

  public async get(req: Request, res: Response){
    try {
      const service = new CustomerService();

      const result = await service.getAll();

      if(result === null) {
        return res.status(404).send();
      }
  
      const response: BaseResponse = { message: "success", result: result }; 

      return res.status(200).send(response);    
    } 
    catch(error: any) {
      const response: BaseResponse = { message: error.message, result: null }; 
      res.send(response);
    }
  }

  public async getByGuid(req: Request, res: Response){
    try {
      const service = new CustomerService();

      const result = await service.getByGuid(req.params.guid);

      if(result === null) {
        return res.status(404).send();
      }
    
      const response: BaseResponse = { message: "success", result: result }; 

      return res.status(200).send(response);    
    }
    catch(error: any) {
      const response: BaseResponse = { message: error.message, result: null }; 
      res.send(response);
    }
  }

  public async create(req: Request, res: Response){
    try {
      const service = new CustomerService();

      const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      } as CustomerRequest;

      if(!req.body.name || !req.body.email || !req.body.phone) {
        return res.status(400).send("Required all fields!");
      }
  
      const result = await service.create(data);
  
      const response: BaseResponse = { message: "created", result: result }; 

      return res.status(201).send(response);    
    } 
    catch(error: any) {
      const response: BaseResponse = { message: error.message, result: null }; 
      res.send(response);
    }

  }

  public async update(req: Request, res: Response){
    const service = new CustomerService();

    try {
      const service = new CustomerService();

      const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      } as CustomerRequest;

      if(!req.body.name || !req.body.email || !req.body.phone) {
        return res.status(400).send("Required all fields!");
      }
  
      const result = await service.update(data, req.params.guid);

      const response: BaseResponse = { message: "updated", result: result }; 
  
      return res.status(200).send(response);    
    } 
    catch(error: any) {
      const response: BaseResponse = { message: error.message, result: null }; 
      res.send(response);
    }
  }

  public async delete(req: Request, res: Response){
    try {
      const service = new CustomerService();

      const result = await service.delete(req.params.guid);

      if(result === null) {
        return res.status(404).send();
      }
    
      const response: BaseResponse = { message: "success", result: result }; 

      return res.status(200).send(response);    
    }
    catch(error: any) {
      const response: BaseResponse = { message: error.message, result: null }; 
      res.send(response);
    }
  }

}

export default new CustomerController();