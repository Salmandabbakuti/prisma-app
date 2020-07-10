const Subscription = {
    notification:{
      subscribe(parent, args, {pubsub}){
        return pubsub.asyncIterator('notification');
       }
    }
}
export default Subscription;
