import HelloWorld from '@/HelloWorld'

const routes = [{
  path: '/',
  redirect: '/hello'
},
{
  path: '/hello',
  name: 'HelloWorld',
  component: HelloWorld
}
]

export default routes
