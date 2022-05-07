import { Router } from 'express';
import { CreateProductController } from './controllers/Product/CreatProductController';
import { CreatUserController } from './controllers/User/CreatUserController';
import { LoginUserController } from './controllers/User/LoginUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { ListUserController } from './controllers/User/ListUserController';
import { SearchProductController } from './controllers/Product/SearchProductController';

const router = Router();
const createPrduct = new CreateProductController();
const createUser = new CreatUserController();
const login = new LoginUserController();
const deleteUser = new DeleteUserController();
const listUser = new ListUserController();
const search = new SearchProductController();

// rota de produto
router.post('/product', createPrduct.handle);
router.get('/search', search.handle);

// rota de user
router.post('/user', createUser.handle);
router.get('/login', login.handle);
router.get('/user/list', listUser.handle);
router.delete('/user/:id', deleteUser.handle);

export { router };
