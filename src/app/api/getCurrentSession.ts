import uuidv4 from 'uuid/v4';

let genSession: string | null;

const internalSession = () => {
  if (!genSession) genSession = uuidv4();
  return genSession;
};

export const getCurrentSession = () => internalSession();
