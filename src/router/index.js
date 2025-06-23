import { createRouter, createWebHistory } from 'vue-router'

// import 格桑花 from '../components/格桑花.vue'
// import HomeNews from '../components/HomeNews'
// import HomeMsg from '../components/HomeMsg'
// import User from '../components/User'
// import UserInfo from '../components/UserInfo'
import HomeView from '../views/HomeView.vue'
import App from '../App.vue'
import 计数器 from '../components/父组件.vue'
import 区块链 from '../components/fathercomp.vue'
import 实验8_1 from "../实验8/TabFather.vue";
import 实验8_2 from "../实验8/FatherComp.vue";
import 实验12 from "../components/popup.vue";
import 实验12_2 from '../components/father.vue';
import 实验12_test12_1 from '../components/test12-1';
import test12_1选项式 from '../components/test12-1选项式';
import test12_1组合式 from '../components/test12-1组合式';
import test13_1 from '../components/test13-1';
import test13_fathers from '../实验13新/fathers';
import test13_2 from '../components/test13-2';
import test10_1 from '../实验15/test10-1';
import test10_2 from '../实验15/test10-2';
import test10_3 from '../实验15/test10-3';
import test10_4 from '../实验15/test10-4';
import test11_1 from '../实验16/test11-1';
import test11_2 from '../实验16/test11-2';
import test11_3 from '../实验16/test11-3';
import test11_4 from '../实验16/test11-4';
import test11_5 from '../实验16/test11-5';
import test12_1 from '../实验16/test12-1';
import test12_2 from '../实验16/test12-2';
import test12_3 from '../实验16/test12-3';
import test17_1 from '../实验17/test17-1';
import test17_2 from '../实验17/test17-2';
import test17_3 from '../实验17/test17-3';
import test17_4 from '../实验17/test17-4';
import test17_5 from '../实验17/test17-5';
import test17_6 from '../实验17/test17-6';
import test17_7 from '../实验17/test17-7';

const routes = [
  {
    path: '/',
    redirect: '/App',
    component:'App'
  },

  {
    path: '/计数器+1',
    name: '计数器',
    component:计数器,
    meta:{
      title:'请输入标题'
    }
 },
  {
    path: '/区块链',
    name: '区块链',
    component: 区块链,
    meta:{
      title:'区块链技术的应用场景'
    }
  },
  {
    path: '/实验8-1',
    name: '实验8-1',
    component: 实验8_1,
    meta:{
      title:'实验8的作业'
    }
  },
  {
    path: '/实验8-2',
    name: '实验8-2',
    component: 实验8_2,
    meta:{
      title:'实验8的作业'
    }
  },
  {
    path: '/实验12',
    name: '实验12',
    component: 实验12,
    meta:{
      title:'实验12的作业'
    }
  },
  {
    path: '/实验12_2',
    name: '实验12_2',
    component: 实验12_2,
    meta:{
      title:'实验12的作业'
    }
  },
  {
    path: '/实验12_test12_1',
    name: '实验12_test12_1',
    component: 实验12_test12_1,
    meta:{
      title:'实验12的作业test12_1'
    }
  },
  {
    path: '/test12_1选项式',
    name: 'test12_1选项式',
    component: test12_1选项式,
    meta:{
      title:'实验12的作业test12_1选项式'
    }
  },
  {
    path: '/test12_1组合式',
    name: 'test12_1组合式',
    component: test12_1组合式,
    meta:{
      title:'实验12的作业test12_1组合式'
    }
  },
  {
    path: '/test13_1',
    name: 'test13_1',
    component: test13_1,
    meta:{
      title:'实验13的作业test13-1'
    }
  },
  {
    path: '/test13_fathers',
    name: 'test13_fathers',
    component: test13_fathers,
    meta:{
      title:'实验13的作业test13-fathers'
    }
  },
  {
    path: '/test13_2',
    name: 'test13_2',
    component: test13_2,
    meta:{
      title:'实验13的作业test13-2'
    }
  },
  {
    path: '/test10_1',
    name: 'test10_1',
    component: test10_1,
    meta:{
      title:'实验15的作业test10-1'
    }
  },
  {
    path: '/test10_2',
    name: 'test10_2',
    component: test10_2,
    meta:{
      title:'实验15的作业test10-2'
    }
  },
  {
    path: '/test10_3',
    name: 'test10_3',
    component: test10_3,
    meta:{
      title:'实验15的作业test10-3'
    }
  },
  {
    path: '/test10_4',
    name: 'test10_4',
    component: test10_4,
    meta:{
      title:'实验15的作业test10-4'
    }
  },
  {
    path: '/test11-1',
    name: 'test11_1',
    component: test11_1,
    meta:{
      title:'实验16的作业test11-1'
    }
  },
  {
    path: '/test11-2',
    name: 'test11_2',
    component: test11_2,
    meta:{
      title:'实验16的作业test11-2'
    }
  },
  {
    path: '/test11-3',
    name: 'test11_3',
    component: test11_3,
    meta:{
      title:'实验16的作业test11-3'
    }
  },
  {
    path: '/test11-4',
    name: 'test11_4',
    component: test11_4,
    meta:{
      title:'实验16的作业test11-4'
    }
  },
  {
    path: '/test11-5',
    name: 'test11_5',
    component: test11_5,
    meta:{
      title:'实验16的作业test11-5'
    }
  },
  {
    path: '/test12-1',
    name: 'test12_1',
    component: test12_1,
    meta:{
      title:'实验16的作业test12-1'
    }
  },
  {
    path: '/test12-2',
    name: 'test12_2',
    component: test12_2,
    meta:{
      title:'实验16的作业test12-2'
    }
  },
  
  {
    path: '/test12-3',
    name: 'test12_3',
    component: test12_3,
    meta:{
      title:'实验16的作业test12-3'
    }
  },
  {
    path: '/test17-1',
    name: 'test17_1',
    component: test17_1,
    meta:{
      title:'实验17的作业test17-1'
    }
  },
  {
    path: '/test17-2',
    name: 'test17_2',
    component: test17_2,
    meta:{
      title:'实验17的作业test17-2'
    }
  },
  {
    path: '/test17-3',
    name: 'test17_3',
    component: test17_3,
    meta:{
      title:'实验17的作业test17-3'
    }
  },
  {
    path: '/test17-4',
    name: 'test17_4',
    component: test17_4,
    meta:{
      title:'实验17的作业test17-4'
    }
  },
  {
    path: '/test17-5',
    name: 'test17_5',
    component: test17_5,
    meta:{
      title:'实验17的作业test17-5'
    }
  },
  {
    path: '/test17-6',
    name: 'test17_6',
    component: test17_6,
    meta:{
      title:'实验17的作业test17-6'
    }
  },
  {
    path: '/test17-7',
    name: 'test17_7',
    component: test17_7,
    meta:{
      title:'实验17的作业test17-7'
    }
  },
]

const router = createRouter({
  history: createWebHistory(
    // process.env.BASE_URL
    ),
  routes
})

router.beforeEach((to,form,next)=>{
  document.title=to.meta.title//读取路由元信息，并修改网页标题
  next()//跳转到指定页面
})

export default router
