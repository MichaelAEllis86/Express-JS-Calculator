class InvalidNumberError extends Error{
    constructor(message, status){
        super();
        this.message=message
        this.status=status
        console.error(this.stack)
    }
}

class InvalidRouteError extends Error{
    constructor(message, status){
        super();
        this.message=message
        this.status=status
        console.error(this.stack)
    }
}


module.exports={
    InvalidNumberError,
    InvalidRouteError
}