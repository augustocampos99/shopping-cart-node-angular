import CustomerRequest from "./../contracts/customer.request";
import CustomerService from "./../services/customer.service";
import { Request, Response } from "express";

class CustomerController {

  public async get(req: Request, res: Response){
    const service = new CustomerService();

    const result = await service.getAll();

    if(result === null) {
      return res.status(404).send();
    }

    return res.status(200).send(result);    
  }

  public async getByGuid(req: Request, res: Response){
    const service = new CustomerService();

    const result = await service.getByGuid(req.params.guid);

    if(result === null) {
      return res.status(404).send();
    }

    return res.status(200).send(result);    
  }

  public async create(req: Request, res: Response){
    const service = new CustomerService();

    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    } as CustomerRequest;

    const result = await service.create(data);

    if(result === null) {
      return res.status(404).send();
    }

    return res.status(201).send(result);    
  }

  public async update(req: Request, res: Response){
    const service = new CustomerService();

    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    } as CustomerRequest;

    const result = await service.update(data, req.params.guid);

    if(result === null) {
      return res.status(404).send();
    }

    return res.status(201).send(result);        
  }

  public async delete(req: Request, res: Response){
    const service = new CustomerService();

    await service.delete(req.params.guid);

    return res.status(200).send();        
  }

}

export default new CustomerController();