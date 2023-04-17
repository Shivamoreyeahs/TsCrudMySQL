import connection from "../database/db";

import {Request, Response } from "express";


export const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
  const user = req.body;

  console.log(user);
};
