import { Router } from 'express';
import { CreateProductController } from './controllers/Product/CreatProductController';
import { CreatUserController } from './controllers/User/CreatUserController';
import { LoginUserController } from './controllers/User/LoginUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { ListUserController } from './controllers/User/ListUserController';
import { SearchProductController } from './controllers/Product/SearchProductController';
import {EditUserController} from './controllers/User/EditUserController';
import {DeleteProductController} from './controllers/Product/DeleteProductController';
import {CreatFarmerController} from './controllers/Farmer/CreatFarmerController';
import {EditProductController} from './controllers/Product/EditProductController';
import {SelectProductController} from './controllers/Product/SelectProductController';
import {DeleteFarmerController} from './controllers/Farmer/DeleteFarmerController';
import {EditFarmerController} from './controllers/Farmer/EditFarmerController';
import {ListFarmerController} from './controllers/Farmer/ListFarmerController';
import {LoginFarmerController} from './controllers/Farmer/LoginFarmerController';

const router = Router();
const createPrduct = new CreateProductController();
const createUser = new CreatUserController();
const loginUser = new LoginUserController();
const deleteUser = new DeleteUserController();
const listUser = new ListUserController();
const search = new SearchProductController();
const editUser = new EditUserController();
const deleteProduct = new DeleteProductController();
const createFarmer = new CreatFarmerController();
const editProduct = new EditProductController();
const setect = new SelectProductController();
const deleteFarmer = new DeleteFarmerController();
const editFarmer = new EditFarmerController();
const listFarmer = new ListFarmerController();
const loginFarmer = new LoginFarmerController();

// rota de produto
router.post('/product/:idFarmer', createPrduct.handle);
router.get('/search', search.handle);
router.delete('/product/:id',deleteProduct.handle);
router.post('/productEdit/:id',editProduct.handle);
router.put('/setectProduct/:id',setect.handle);

// rota de user
router.get('/loginUser', loginUser.handle);
router.post('/user', createUser.handle);
router.post('/user/:id',editUser.handle);
router.delete('/user/:id', deleteUser.handle);
router.put('/user/list', listUser.handle);

// rota de farmer
router.post('/farmer',createFarmer.handle);
router.delete('/farmer/:id',deleteFarmer.handle);
router.post('/farmer/:id',editFarmer.handle);
router.put('/farmer/list', listFarmer.handle);
router.get('/loginFarmer',loginFarmer.handle);

export { router };
