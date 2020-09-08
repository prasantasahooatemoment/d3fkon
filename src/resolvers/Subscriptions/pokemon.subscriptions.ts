import { subscriptionField} from '@nexus/schema'

export const newPokemon = subscriptionField('newPokemon',{
    type: 'pokemon',
    async subscribe(root, args, ctx){
      return ctx.pubsub.asyncIterator('newPokemon');
    },
    resolve(payload){
      return payload;
    }
})  
