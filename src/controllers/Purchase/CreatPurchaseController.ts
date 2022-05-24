import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class CreatPurchaseController {
  async handle(req: Request, res: Response) {
    const {delivery_address,phone,total,Products} = req.body;
    const userId=req.params.userId;
    const cooperativeId= req.params.cooperativeId;
    try{
      for (let index = 0; index < Products.length; index++) {
       let product = await prismaClient.product.update({
         where:{
           id:Products[index].id
         },
         data:{
           quantity:{ decrement: Products[index].quantity }
         }
       }) 
      }

    const purchase = await prismaClient.purchase.create({
      data:{
        delivery_address:delivery_address,
        phone:phone,
        total:total,
        userId:userId,
        cooperativeId:cooperativeId,
        Products:Products
      }
    });
    return res.json({ status: 'successful purchase', has_error: false });
}catch (err) {
  await prismaClient.$disconnect;
  console.log(err);
  return res.status(400).json({ data: err, has_error: true });
}
}
}