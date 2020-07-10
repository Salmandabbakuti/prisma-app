import { Prisma } from 'prisma-binding';

const PATH_TO_ENV = '.env'
require('dotenv').config({
    path: path.resolve(process.cwd(), PATH_TO_ENV)
})
const prisma = new Prisma ({
    typeDefs:'generated/prisma.graphql',
    endpoint:process.env.PRISMA_ENDPOINT
})

export default prisma;
