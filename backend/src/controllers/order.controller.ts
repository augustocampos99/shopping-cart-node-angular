import { validationResult } from "express-validator";
import BaseResponse from "../contracts/base.response";
import OrderRequest from "./../contracts/order.request";
import OrderService from "./../services/order.service";
import { Request, Response } from "express";
import CustomerService from "../services/customer.service";

export default class OrderController {

  constructor(private readonly service: OrderService,
    private readonly customerService: CustomerService
  ) {}

  public async get(req: Request, res: Response){
    try {
      const result = await this.service.getAll();

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
      const result = await this.service.getByGuid(req.params.guid);

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
      const validatorError = validationResult(req);
      if (!validatorError.isEmpty()) {
        return res.status(400).json({
          message: "Errors",
          errors: validatorError.array(),
        });
      }

      const customer = await this.customerService.getById(req.body.customerId);
      if(customer === null) {
        return res.status(400).send("Customer not found");
      }

      const data = {
        customerId: req.body.customerId,
        totalPrice: req.body.totalPrice,
        status: req.body.status,
      } as OrderRequest;

      if(!req.body.customerId || !req.body.totalPrice || !req.body.status) {
        return res.status(400).send("Required all fields!");
      }
  
      const result = await this.service.create(data);
  
      const response: BaseResponse = { message: "created", result: result }; 

      return res.status(201).send(response);    
    } 
    catch(error: any) {
      const response: BaseResponse = { message: error.message, result: null }; 
      res.send(response);
    }

  }

  public async update(req: Request, res: Response){
    try {
      const validatorError = validationResult(req);
      if (!validatorError.isEmpty()) {
        return res.status(400).json({
          message: "Errors",
          errors: validatorError.array(),
        });
      }


      const customer = await this.customerService.getById(req.body.customerId);
      if(customer === null) {
        return res.status(400).send("Customer not found");
      }
      const data = {
        customerId: req.body.customerId,
        totalPrice: req.body.totalPrice,
        status: req.body.status,
      } as OrderRequest;

      if(!req.body.customerId || !req.body.totalPrice || !req.body.status) {
        return res.status(400).send("Required all fields!");
      }
  
      const result = await this.service.update(data, req.params.guid);

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
      const result = await this.service.delete(req.params.guid);

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

