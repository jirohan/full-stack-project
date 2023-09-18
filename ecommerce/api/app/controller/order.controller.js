class OrderController{
    createOrder = (req, res, next) => {
        try {
            let payload = req.body;

            let order_data = {
                buyer_id: req.auth_user._id,
                cart: [],
                sub_total: 0,
                discount: {
                    ...payload.discount
                },
                service_charge: payload.service_charge || 0,
                delivery_charge: payload.delivery_charge || 0,
                vat: 0,
                total_amt: 0,
                order_date: Date.now(),
                status: "pending",
                is_paid: {
                    paid: payload.is_paid,
                    mode: payload?.transaction ? 'online' : 'cod',
                    transaction: payload?.transaction_code || null
                },
                created_by: req.auth_user._id,
            }

            let cart = [];
            let sub_total = 0;
            // payload.cart((item, ind) => {
            //     let product_detail = 
            // })
            res.json({
                result: order_data
            })


        } catch (except) {
            next({status: 400, msg: except})
        }
    }
}

module.exports = OrderController;