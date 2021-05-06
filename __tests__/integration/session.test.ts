// const PrismaClient = require('')

import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await prisma.user.create({
      data: {
        email: 'teste@email.com',
        passwordHash: '123456'
      }
    });

    expect(user.email).toBe('teste@email.com');
  });
});
