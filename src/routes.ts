import { Router } from 'express';
import { CreateProductController } from './controllers/Product/CreatProductController';
import { CreatUserController } from './controllers/User/CreatUserController';
import { LoginUserController } from './controllers/User/LoginUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { ListUserController } from './controllers/User/ListUserController';
import { SearchProductController } from './controllers/Product/SearchProductController';
import {EditUser} from './controllers/User/EditUser';
import {DeleteProductController} from './controllers/Product/DeleteProductController';

const router = Router();
const createPrduct = new CreateProductController();
const createUser = new CreatUserController();
const login = new LoginUserController();
const deleteUser = new DeleteUserController();
const listUser = new ListUserController();
const search = new SearchProductController();
const editUser = new EditUser();
const deleteProduct = new DeleteProductController();

// rota de produto
router.post('/product', createPrduct.handle);
router.get('/search', search.handle);
router.delete('/product/:id',deleteProduct.handle);

// rota de user
router.get('/login', login.handle);
router.post('/user/:id',editUser.handle);
router.post('/user', createUser.handle);
router.put('/user/list', listUser.handle);
router.delete('/user/:id', deleteUser.handle);


export { router };
