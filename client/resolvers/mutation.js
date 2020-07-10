const Mutation = {

   async addMovie(parent, args, { prisma }) {
       
       let newMovie = await prisma.mutation.createMovie({
           data:{...args}
       })

       console.log(`created new movie: ${newMovie}`);
       return newMovie;
       pubsub.publish('notification', {
        notification:{
            event: 'New Movie Listed.',
            data: newMovie
         }
        })
     },
   
    async updateMovie(parent, args, { prisma }) {
       
       let isMovieExists = await prisma.exists.Movie({id:args.id})
        if(!isMovieExists){
            throw new Error(`Movie doesnot exist with this Id`)
        }
       return await prisma.mutation.updateMovie({
           
           where:{
               id:args.id
               },
            data:{
                name:args.name,
                rating:args.rating,
                rank:args.rank,
                producer:args.producer
            } 
         })
        pubsub.publish('notification', {
        notification:{
            event: 'Movie Data Updated',
            data: {
             name: args.name,
             producer: args.producer,
             rating: args.rating,
             rank: args.rank
             }
           }
         })
       },

    async deleteMovie(parent, args, { prisma }) {
       
       let isMovieExists = await prisma.exists.Movie({id:args.id})
        if(!isMovieExists){
            throw new Error(`Movie doesnot exist with this Id`)
        }
       await prisma.mutation.deleteMovie({
           where:{
               id:args.id
               }
         })
        return ({response:"Movie Deletd Successfully"})
         pubsub.publish('notification', {
          notification:{
              event: 'Movie Deleted',
              data: {name:args.id}
                 }
              })
       }
   }
export default Mutation;




