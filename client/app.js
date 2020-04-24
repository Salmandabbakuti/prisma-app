const Prisma = require('prisma-binding').Prisma;
//import { Prisma } from 'prisma-binding'


const prisma = new Prisma ({
    typeDefs:'generated/prisma.graphql',
    endpoint:'http://localhost:4466'
})

 prisma.query.movies(null,'{id name rating rank producer}').then((data)=>{ //null is because no operational arguments needed
  console.log(data)  
    
})

//  prisma.mutation.createMovie({data:{name:"Terminator 2",producer:"Gale Ann Hurd",rating:8.3, rank:32}},'{id name producer rank rating}').then((data)=>{
    
//      console.log(data)
//      })