import express from 'express'
import {getCourts,sendCourtdata,editCourtdata,deleteCourtdata} from '../controllers/courtController.js'

const router=express.Router()

router.get('/',getCourts)
//admin
router.post('/admin',sendCourtdata)
router.put('/admin/:id',editCourtdata)
router.delete('/admin/:id',deleteCourtdata)

export default router