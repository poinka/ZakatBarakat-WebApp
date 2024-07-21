import { NextApiRequest, NextApiResponse } from 'next';

interface SaveUserIdRequest extends NextApiRequest {
  body: {
    userId: number;
  };
}

export default async function handler(req: SaveUserIdRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId } = req.body;

    // Выполните действия по сохранению userId в базе данных
    // Например, используя Prisma, Mongoose или другой ORM/ODM

    return res.status(200).json({ message: 'User ID saved successfully' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}