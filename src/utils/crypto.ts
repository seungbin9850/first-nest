import bcrypt from 'bcrypt-nodejs';

export const passwordEncoding = async (password: string): Promise<string> => {
  console.log(11);
  return await bcrypt.hashSync(password, 'qawsed');
};
