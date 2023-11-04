import Express from 'express'
import { signup } from '../controllers/auth.controller.js'
import { login } from '../controllers/auth.controller.js'

const router = Express.Router()

router.post('/signup', signup)
router.post('/login', login)

export default router
