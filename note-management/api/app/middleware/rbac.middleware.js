const isAdmin = (req, res, next) => {
    if(req.auth_user.role === 'admin'){
        next();    
    } else {
        next({status: 403, msg: "Access denied"})
    }
} 

const isTeacher = (req, res, next) => {
    if(req.auth_user.role === 'teacher'){
        next();    
    } else {
        next({status: 403, msg: "Access denied"})
    }
} 

const isStudent = (req, res, next) => {
    if(req.auth_user.role === 'student'){
        next();    
    } else {
        next({status: 403, msg: "Access denied"})
    }
} 

const isParent = (req, res, next) => {
    if(req.auth_user.role === 'parent'){
        next();    
    } else {
        next({status: 403, msg: "Access denied"})
    }
} 

const isAdminTeacher = (req, res, next) => {
    if(req.auth_user.role === 'admin' || req.auth_user.role === 'teacher'){
        next();    
    } else {
        next({status: 403, msg: "Access denied"})
    }
} 

module.exports = {
        isAdmin,
        isTeacher,
        isStudent,
        isParent,
        isAdminTeacher
}