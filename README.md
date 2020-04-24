# prisma-app

### Prisma-Setup Initialization (Optional for this repository)
```
npm i
prisma init <project name> (or) npm run prisma-init   # if no name specified, it will create necessary setup files in the same directory

#prompts for few details about db
```
#### Server Deployment
```
cd <project name>
npm i
docker-compose up -d # wait for few seconds to finishup things
prisma deploy (or) npm run prisma-deploy

go to your http://<ip>:4466/ for GraphQL Playground
```
####  Queries and Mutations:
```
#getall
query{
  movies{
    id
    name
    producer
    rating
    rank
  }
}

#get by id

query{
  movie(where:{id:"5ea130ce24aa9a0007d6e26f"}){
    id
    name
    producer
    rating
    rank
  }
}

#create
mutation{
  createMovie(data:{name:"Terminator", producer:"Gale Ann Hurd", rating:8.2, rank:24}){
    id
    name
    producer
    rating
    rank
  }
}

#update
mutation{
  updateMovie(data:{name:"Terminator", producer:"Gale Ann Hurd", rating:8.8, rank:22},where:{id:"5ea130ce24aa9a0007d6e26f"}){
    id
    name
    producer
    rating
    rank
  }
}

#delete
mutation{
 deleteMovie(where:{id:"5ea130ce24aa9a0007d6e26f"}) {
  id
  name
  producer
  rating
  rank
   }
}
```
