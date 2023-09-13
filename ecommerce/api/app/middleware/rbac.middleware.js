const isAdmin = (req, res, next) => {
    if(req.auth_user.role === 'admin'){
        next()
    } else {
        next({status: 403, msg: "Access Denied"})
    }
}

const isSeller = (req, res, next) => {
    if(req.auth_user.role === 'seller'){
        next()
    } else {
        next({status: 403, msg: "Access Denied"})
    }
}

const isCustomer = (req, res, next) => {
    if(req.auth_user.role === 'customer'){
        next()
    } else {
        next({status: 403, msg: "Access Denied"})
    }
}

const isAdminSeller = (req, res, next) => {
    if(req.auth_user.role === 'admin' || req.auth_user.role === "seller"){
        next()
    } else {
        next({status: 403, msg: "Access Denied"})
    }
}


module.exports = {
    isAdmin,
    isSeller,
    isCustomer,
    isAdminSeller   
}