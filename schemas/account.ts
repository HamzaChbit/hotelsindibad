import { defineField } from 'sanity';

const account = {
  name: 'account',
  title: 'Account',
  type: 'document',
  fields: [
    defineField({
      name: 'providerType',
      type: 'string',
      title: 'Provider Type',
    }),
    defineField({
      name: 'providerId',
      type: 'string',
      title: 'Provider ID',
    }),
    defineField({
      name: 'providerAccountId',
      type: 'string',
      title: 'Provider Account ID',
    }),
    defineField({
      name: 'refreshToken',
      type: 'string',
      title: 'Refresh Token',
    }),
    defineField({
      name: 'accessToken',
      type: 'string',
      title: 'Access Token',
    }),
    defineField({
      name: 'accessTokenExpires',
      type: 'number',
      title: 'Access Token Expires',
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
    }),
  ],
};

export default account;
