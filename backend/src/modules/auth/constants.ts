export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'defaultSecretKey',
  expiresIn: '15s',
  secretToken: process.env.JWT_SECRET_REFRESH,
  expiressInFresh: '7d',
};
