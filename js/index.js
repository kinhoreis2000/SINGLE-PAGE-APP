
import {Router} from "./router.js" 

const router = new Router()

/*let routes = router.routes
let currentPathName = window.location.pathname
let isItUniverse = currentPathName == '/universe'
let isItHome = currentPathName == '/'
let isItExploration = currentPathName == '/exploration'
let isIt404 = currentPathName == 404
*/

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')
router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route() // vai garantir que a função route aconteça

