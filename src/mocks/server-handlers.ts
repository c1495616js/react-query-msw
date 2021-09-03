import {rest} from 'msw'
import faker from 'faker'
const delay = process.env.NODE_ENV === 'test' ? 0 : 1500
const createUser = () => ({
    name: faker.name,
})
const createUsers = (numUsers = 5) => {
    return Array.from({length: numUsers}, createUser);
}
const handlers = [
  rest.get(
    '/',
    async (req, res, ctx) => {
      return res(ctx.delay(delay), ctx.json(createUsers(10)))
    },
  ),
]

export {handlers}