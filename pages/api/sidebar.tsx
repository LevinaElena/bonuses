// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next';
import {sidebar} from "./data/sidebar";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(sidebar);
  };
}
