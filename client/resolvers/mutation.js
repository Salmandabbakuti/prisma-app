const Mutation = {

   async addMovie(parent, args, { prisma }) {
       
       let newMovie = await prisma.createMovie({
           data:{...args}
       })

       console.log(`created new movie: ${newMovie}`);
       return newMovie;
       }
   }
export default Mutation;




