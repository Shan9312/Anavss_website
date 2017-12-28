import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => {
  require.ensure(['../components/frontPage/Home.vue'], () => {
    resolve(require('../components/frontPage/Home.vue'))
  })
}

/* 平台 */
//
const Platform = resolve => {
  require.ensure(['../components/frontPage/Platform.vue'], () => {
    resolve(require('../components/frontPage/Platform.vue'))
  })
}

/* 解决方案 */
// 按功能
const Budget = resolve => {
  require.ensure(['../components/frontPage/byFunction/Budget.vue'], () => {
    resolve(require('../components/frontPage/byFunction/Budget.vue'))
  })
}
const Simulation = resolve => {
  require.ensure(['../components/frontPage/byFunction/Simulation.vue'], () => {
    resolve(require('../components/frontPage/byFunction/Simulation.vue'))
  })
}
const Analysis = resolve => {
  require.ensure(['../components/frontPage/byFunction/Analysis.vue'], () => {
    resolve(require('../components/frontPage/byFunction/Analysis.vue'))
  })
}
// 按行业
const Software = resolve => {
  require.ensure(['../components/frontPage/byIndustry/Software.vue'], () => {
    resolve(require('../components/frontPage/byIndustry/Software.vue'))
  })
}
// 按职能
const Finance = resolve => {
  require.ensure(['../components/frontPage/bySection/Finance.vue'], () => {
    resolve(require('../components/frontPage/bySection/Finance.vue'))
  })
}
// 按数据源
const Integration = resolve => {
  require.ensure(['../components/frontPage/byData/Integration.vue'], () => {
    resolve(require('../components/frontPage/byData/Integration.vue'))
  })
}

const Price = resolve => {
  require.ensure(['../components/frontPage/Price.vue'], () => {
    resolve(require('../components/frontPage/Price.vue'))
  })
}
const Recruit = resolve => {
  require.ensure(['../components/frontPage/Recruit.vue'], () => {
    resolve(require('../components/frontPage/Recruit.vue'))
  })
}
const About = resolve => {
  require.ensure(['../components/frontPage/About.vue'], () => {
    resolve(require('../components/frontPage/About.vue'))
  })
}
const Contact = resolve => {
  require.ensure(['../components/frontPage/Contact.vue'], () => {
    resolve(require('../components/frontPage/Contact.vue'))
  })
}

const Login = resolve => {
  require.ensure(['../components/frontPage/Login.vue'], () => {
    resolve(require('../components/frontPage/Login.vue'))
  })
}
const Register = resolve => {
  require.ensure(['../components/frontPage/Register.vue'], () => {
    resolve(require('../components/frontPage/Register.vue'))
  })
}

const Help = resolve => {
  require.ensure(['../components/frontPage/Help.vue'], () => {
    resolve(require('../components/frontPage/Help.vue'))
  })
}

const routes = [
  // {
  //   path: '/',
  //   redirect: '/',
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/platform',
    name: 'Platform',
    component: Platform
  },
  {
    path: '/byFunction/budget',
    name: 'Budget',
    component: Budget
  },
  {
    path: '/byFunction/simulation',
    name: 'Simulation',
    component: Simulation
  },
  {
    path: '/byFunction/analysis',
    name: 'Analysis',
    component: Analysis
  },
  {
    path: '/byData/integration',
    name: 'Integration',
    component: Integration
  },
  {
    path: '/byIndustry/software',
    name: 'Software',
    component: Software
  },
  {
    path: '/bySection/finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: Recruit
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  }

]

export default new Router({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
