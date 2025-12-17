import jwt from 'jsonwebtoken';

export interface TokenPayload {
  id: string;
}

export const generateToken = (id: string): string => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as TokenPayload;
};
