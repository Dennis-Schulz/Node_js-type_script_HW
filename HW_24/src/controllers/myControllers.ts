import { Request, Response } from "express";

export const myGetController = (req: Request, res: Response) => {
    res.status(200).send('Hello world!');
}

export const myPostController = (req: Request, res: Response) => {
    const { name }: { name: string } = req.body;
    res.status(200).send(`Hello ${name}`);
}