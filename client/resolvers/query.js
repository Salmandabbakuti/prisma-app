const Query = {

 async getMovie(parent, args, { prisma }){


  const movie = prisma.query.movie({
    where:{id:args.id}
   })
  if(movie.length == 0){
    throw new error('No movie Found with this Id..!')
    }
   return movie;

  },

  async getMovies(parent, args, { prisma }){

  const movie = prisma.query.movies({})
  if(movie.length == 0){
    throw new error('No movies Listed..')
    }
   return movie;

  }
}
export default Query;
