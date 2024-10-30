import BaseResponse from "../contracts/base.response";
import OrderRequest from "./../contracts/order.request";
import OrderService from "./../services/order.service";
import { Request, Response } from "express";

class OrderController {

  public async get(req: Request, res: Response){
    try {
      const service = new OrderService();

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
      const service = new OrderService();

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
      const service = new OrderService();

      const data = {
        customerId: req.body.customerId,
        totalPrice: req.body.totalPrice,
        status: req.body.status,
      } as OrderRequest;

      if(!req.body.customerId || !req.body.totalPrice || !req.body.status) {
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
    const service = new OrderService();

    try {
      const service = new OrderService();

      const data = {
        customerId: req.body.customerId,
        totalPrice: req.body.totalPrice,
        status: req.body.status,
      } as OrderRequest;

      if(!req.body.customerId || !req.body.totalPrice || !req.body.status) {
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
      const service = new OrderService();

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

export default new OrderController();