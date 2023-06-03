import joi from "joi"

export const boloSchema = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().not(0).required(),
  description: joi.string(),
  image: joi.string().uri().required()
})