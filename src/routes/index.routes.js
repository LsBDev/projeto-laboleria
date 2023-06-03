import { Router } from "express"
import boloRouter from "./bolos.routes.js"

const router = Router()
router.use(boloRouter)

export default router