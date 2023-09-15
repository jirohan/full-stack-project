const slugify = require("slugify");
const HwService = require("../services/hw.service");

class HwController{
    constructor(){
        this.hw_svc = new HwService();
    }
    hwStore = async(req, res, next) => {
        try {
            let data = req.body;
            if(req.file){
                data.file = req.file.filename;
            }

            data.title = slugify(data.description, {
                lower: true
            });

            if(!data.description || data.description === 'null'){
                data.description = null;
            }
            
            this.hw_svc.hwValidate(data);
            let response = await this.hw_svc.createHw();
            res.json({
                result: response,
                msg: "Hw created successfully",
                status: true
            })

        } catch (except) {
            console.log("HwStore: ", except);
            next({status: 400, msg: except})
        }
    }

    getHw = async(req, res, next) => {
        try {
            let paginate = {
                total_count: await this.hw_svc.getAllCounts(),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let data = await this.hw_svc.getHw(skip, paginate.per_page);
            res.json({
                result: data,
                status: true,
                paginate: paginate,
                msg: "data fetched"
            })
        } catch (except) {
            console.log("List hw: ", except)
            next({
                status:400,
                msg: except 
            })
        }
    }

    getHwById = async (req, res, next) => {
        try {
            let data = await this.hw_svc.findById( req.params.id)
            if(data){
                res.json({
                    result: data,
                    status: true,
                    msg: "Data fetched"
                })
            } else {
                next({status: 404, msg: "Data doesn't exist"})
            }
        } catch (except) {
            console.log("Fetch by id: ", except);
            next({
                status: 400,
                msg:except
            })
        }
    }

    deleteById = async (req, res, next) => {
        try {
            let data = await this.hw_svc.deleteById(req.params.id)
            if(data){
                res.json({
                    result: data,
                    status: true,
                    msg: "Data deleted"
                })
            } else {
                next({status: 404, msg: "Data doesn't exist"})
            }
        } catch (except) {
            console.log("Fetch by id: ", except);
            next({
                status: 400,
                msg:except
            })
        }
    }

    hwUpdate = async(req, res, next) => {
        try {
            let current_data = await this.hw_svc.findById(req.params.id);

            let data = req.body;
            if(req.file){
                data.file = req.file.filename;
            } else {
                data.file = current_data.file;
            }
            console.log(data.file);

            data.description = current_data.description ?? null ;
            
            this.hw_svc.hwValidate(data);
            let response = await this.hw_svc.updateHw(req.params.id);
            res.json({
                result: response,
                msg: "Hw updated successfully",
                status: true
            })

        } catch (except) {
            console.log("updateHw: ", except);
            next({status: 400, msg: except})
        }
    }
}

module.exports = HwController;