import HelloWorld from '@/components/HelloWorld'

const routes = [{
  path: '/',
  redirect: '/index'
},
{
  path: '/hello',
  name: 'HelloWorld',
  component: HelloWorld
}
]

export default routes
