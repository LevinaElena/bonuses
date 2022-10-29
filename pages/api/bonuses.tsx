// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next';
import {bonuses} from "./data/bonuses";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { type },
    method,
  } = req;
  if (method === 'GET') {
    res.status(200).json(bonuses.filter(item => item.bonusType === +type));
  }
}