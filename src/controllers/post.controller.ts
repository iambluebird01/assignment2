import {Request, Response} from 'express'

import {connect} from '../database'

export async function getPosts(req: Request, res: Response) {
        const conn = await connect();
        conn.query('SELECT * FROM posts');

}