#### Prisma Client Binding

1. ```.graphqlconfig``` is responsible for fetching schema from defined endpoint using graphql-cli
2. when we run ```npm run get-schema```, it will fetch schema from the endpoint.

3. ```prisma-binding``` module provides api for queries and mutations like we do operations from playground, so we can use api inside our project.
4. ```app.js``` is the actual query and mutations implementation example to use in our project

##### Setup 
```
npm i
npm run get-schema #(Optional, as it is already generated for this project)
node app.js #query and mutations from nodejs

```
####  Queries and Mutations(Logic Layer):
```
#getall

query{
  getMovies{
    id
    name
    producer
    rating
    rank
  }
}


#get by id

query{
  getMovie(id:"ckcfv4u7k000l07881ahs0cxg"){
    id
    name
    producer
    rating
    rank
  }
}


#create

mutation {
  addMovie(name:"Test",rank:23,rating:8.2,producer:"Salman"){
    producer
    name
    rating
    rank
  }
}

#update

mutation{
  updateMovie(id: "ckcfv4u7k000l07881ahs0cxg",name:"Interstellar",rank:23,rating:8.2,producer:"Gale Anne Hurd"){
    producer
    name
    rating
    rank
  }
}

#delete
mutation{
  deleteMovie(id:"dss"){
    response
  }
}
```
