import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

export const handleErrors = (error: Error, request: Request, response: Response, _: NextFunction) => {
    console.log(error)
    
    return error instanceof ZodError ? response.status(400).json({
        message: error.flatten().fieldErrors
    }) :
    response.status(500).json({
         message: error.message
    })

}
