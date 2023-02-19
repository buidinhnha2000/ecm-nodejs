import { Router } from "express";
const router = Router();;
import Category from "../app/models/Categories.js"


//create
router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
  
    try {
      const savedProduct = await newCategory.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Get all category
  router.get("/", async (req, res) => {
    try{
      const category = await Category.find()
  
      res.status(200).json(category)
    } catch(err) {
      res.status(500).json(err)
    }
  })
  // router.get("/find/:userId", async (req, res) => {
  //   try{
  //     const address = await Address.find({userId: req.params.userId})
  //     res.status(200).json(address)
  //   } catch(err) {
  //     res.status(500).json(err)
  //   }
  // })

  // router.get("find/:categoriId", async (req, res) => {
  //   const 
  // })



export default router;