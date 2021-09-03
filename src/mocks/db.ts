import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker'
// const createUser = (num: number) => ({
//   id: `${num}`,
//   name: faker.internet.userName(),
//   email: faker.internet.email()
// })
// const createUsers = (numUsers = 5) => {
//   return Array.from({length: numUsers}, (_, idx)=>createUser(idx));
// }
// export const mockUsers = createUsers(100);

// Create a "db" with an user model and some defaults
// faker.seed(123)
export const db = factory({
  user: {
    id: primaryKey(faker.datatype.uuid),
    name: faker.internet.userName,
    email: faker.internet.email,
  },
});

// create 3 users
// mockUsers.forEach((user) => db.user.create(user as any));
Array.from({length: 100}).forEach(()=>{
  db.user.create();
})
