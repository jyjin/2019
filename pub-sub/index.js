const PubSub = require('PubSub')
var pubsub = new PubSub()

function bindAa(){
  pubsub.subscribe('aa', function(data){
    console.log('one...')
    console.log(data)
  })
}



bindAa()

pubsub.unsubscribe('aa')

bindAa()

pubsub.publish('aa')


