import { validationResult } from "express-validator";
import BaseResponse from "../contracts/base.response";
import OrderProductRequest from "./../contracts/order_product.request";
import OrderProductService from "./../services/order_product.service";
import { Request, Response } from "express";
import ProductService from "../services/product.service";
import OrderService from "../services/order.service";

export default class OrderProductController {

  constructor(private readonly service: OrderProductService, 
    private readonly productService: ProductService,
    private readonly orderService: OrderService
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

      const order = await this.orderService.getById(req.body.orderId);
      const product = await this.productService.getById(req.body.productId);
      if(order === null) {
        return res.status(400).send("Order not found");
      }
      if(product === null) {
        return res.status(400).send("Product not found");
      }

      const data = {
        orderId: req.body.orderId,
        productId: req.body.productId,
        quantity: req.body.quantity,
        price: req.body.price,
      } as OrderProductRequest;

      if(!req.body.orderId || !req.body.productId || !req.body.quantity || !req.body.price) {
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

      const data = {
        orderId: req.body.orderId,
        productId: req.body.productId,
        quantity: req.body.quantity,
        price: req.body.price,
      } as OrderProductRequest;

      if(!req.body.orderId || !req.body.productId || !req.body.quantity || !req.body.price) {
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

