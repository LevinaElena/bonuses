import {NextApiRequest, NextApiResponse} from 'next';
import {topbonuses} from "./data/topbonuses";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(topbonuses);
  };
}
