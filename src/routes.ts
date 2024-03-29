import { Router } from 'express'
import { CreateProductController } from './controllers/Product/CreatProductController'
import { CreatUserController } from './controllers/User/CreatUserController'
import { LoginUserController } from './controllers/User/LoginUserController'
import { DeleteUserController } from './controllers/User/DeleteUserController'
import { ListUserController } from './controllers/User/ListUserController'
import { SearchProductController } from './controllers/Product/SearchProductController'
import { EditUserController } from './controllers/User/EditUserController'
import { DeleteProductController } from './controllers/Product/DeleteProductController'
import { EditProductController } from './controllers/Product/EditProductController'
import { SelectProductController } from './controllers/Product/SelectProductController'
import { CreatCooperativeController } from './controllers/Cooperative/CreatCooperativeController'
import { CreatPurchaseController } from './controllers/Purchase/CreatPurchaseController'
import { LoginCooperativeController } from './controllers/Cooperative/LoginCooperativeController'
import { RedefinePasswordCooperative } from './controllers/Cooperative/RedefinePasswordCooperative'
import { ValidateNewPasswordCorpe } from './controllers/Cooperative/ValidatePasswordCorpeController'

const router = Router()
const createPrduct = new CreateProductController()
const createUser = new CreatUserController()
const loginUser = new LoginUserController()
const deleteUser = new DeleteUserController()
const listUser = new ListUserController()
const search = new SearchProductController()
const editUser = new EditUserController()
const deleteProduct = new DeleteProductController()
const editProduct = new EditProductController()
const setect = new SelectProductController()
const createCooperative = new CreatCooperativeController()
const createPurchase = new CreatPurchaseController()
const loginCooperative = new LoginCooperativeController()
const redefinePasswordCooperative = new RedefinePasswordCooperative()
const validatePasswordCorpe = new ValidateNewPasswordCorpe()

// rotas de produto
router.post('/product/:idCooperative', createPrduct.handle)
router.get('/search', search.handle)
router.delete('/product/:id', deleteProduct.handle)
router.post('/productEdit/:id', editProduct.handle)
router.put('/setectProduct/:id', setect.handle)

// rotas de user
router.get('/login/user', loginUser.handle)
router.post('/user', createUser.handle)
router.post('/user/:id', editUser.handle)
router.delete('/user/:id', deleteUser.handle)
router.get('/user/list', listUser.handle)

//rotas de cooperative
router.post('/cooperative', createCooperative.handle)
router.post('/login/Cooperative', loginCooperative.handle)
router.put('/cooperative/redefine', redefinePasswordCooperative.handle)
router.put('/cooperative/validate', validatePasswordCorpe.handle)

//rotas de purchase
router.post('/purchase/:userId/:cooperativeId', createPurchase.handle)

export { router }
