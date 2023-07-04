import { NextApiRequest, NextApiResponse } from 'next'
import { api_data_sample } from '@/data/api-sample-data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(api_data_sample)
}
