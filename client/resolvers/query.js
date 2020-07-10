const Query = {

 async getMovies(parent, args, { prisma }){


  const movie = prisma.query.getMovie({
    where:{id:args.id}
   })
  if(movie.length == 0){
    throw new error('No movie Found with this Id..!')
    }
   return movie;

  }




}
export default Query;
