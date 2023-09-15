const Joi = require("joi")
const ProductModel = require("../model/product.model");
const { created_by } = require("../model/common.schema");

class ProductService{
    storeValidate = (data, created_by) => {
        let schema = Joi.object({
            name: Joi.string().required().min(2),
            slug: Joi.string(),
            images: Joi.array().items(Joi.string().allow(null).allow('')).default(null),
            description: Joi.string().allow(null, ''),
            price: Joi.number().required().min(1),
            actual_price: Joi.number().required().min(1),
            discount: Joi.number().allow(null, '').min(0).max(100),
            category_id: Joi.array().items(Joi.string().allow(null).allow('')).default(null),
            brand: Joi.string().allow(null, '').default(null),
            seller: Joi.string().allow(null, ''),
            is_featured: Joi.boolean().default(false),
            status: Joi.string().valid("active", "inactive").default("active")
        });
        let response = schema.validate(data);
        if(response.error){
            throw response.error.details[0].message
        } else {
            this.data = data;
            this.data.created_by = created_by;
            //this.data.brands = data.brands.split(",");
        }
    }

    createProduct = async() => {
        let product_obj = new ProductModel(this.data);
        return await product_obj.save();
    }

    getAllCounts = async() => {
        let all_data = await ProductModel.find()
        return all_data.length;
    }

    getProducts = async(skip, limit) => {
        return await ProductModel.find()
            .populate("category_id")
            .populate("brand")
            .populate("seller")
            .skip(skip)
            .limit(limit);
    }

    findById = async(id) => {
        return await ProductModel.findById(id)
            .populate("category_id")
            .populate("brand")
            .populate("seller")
    }
    
    deleteById = async(id) => {
        return await ProductModel.findByIdAndDelete(id);
    }

    updateProduct = async(id) => {
        let status = await ProductModel.findByIdAndUpdate(id, {
            $set: this.data
        })
        return status;
    }
}

module.exports = ProductService;