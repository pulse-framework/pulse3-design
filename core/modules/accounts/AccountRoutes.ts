import { NotifyAPI } from '../../api';

export const AccountRoutes = {
  login: (creds: any) => NotifyAPI.post('auth', creds),
  create: (body: any) => NotifyAPI.post('auth/create', body)
};
