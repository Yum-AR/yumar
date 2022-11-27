import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

// POST /api/user
// Required fields in body: name, email
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // const { email, fullName} = req.body;
  const result = await prisma.yumARUser.create({
    data: {
      ...req.body,
      // email: email,
      // fullName: fullName
    },
  });
  res.json(result);
}
