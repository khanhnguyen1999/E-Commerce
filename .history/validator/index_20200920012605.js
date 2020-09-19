exports.userSignupValidator = (req,res)=>{
    req.check('name','Name is required').notEmpty()
    req.check('email','Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min:4,
            max:32
        })
}