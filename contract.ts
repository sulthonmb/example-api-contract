// contract.ts
import { initContract } from '@ts-rest/core';

const c = initContract();

interface IPost {
    name: string;
}

export const contract = c.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: c.type<IPost>(),
    },
    body: c.type<{title: string}>(),
    summary: 'Create a post',
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: c.type<IPost | null>(),
    },
    summary: 'Get a post by id',
  },
});