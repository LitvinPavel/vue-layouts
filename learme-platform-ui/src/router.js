import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./layouts/home.vue')
        },
        {
            path: '/form',
            component: () =>
                import ('./layouts/layout_form.vue'),
            children: [{
                    path: 'sign-in',
                    name: 'sign-in',
                    component: () =>
                        import ('./components/SignIn.vue')
                },
                {
                    path: 'sign-up',
                    name: 'sign-up',
                    component: () =>
                        import ('./components/SignUp.vue')
                },
                {
                    path: 'sign-up-pay',
                    name: 'sign-up-pay',
                    component: () =>
                        import ('./components/SignUpPay.vue')
                },
                {
                    path: 'recovery',
                    name: 'recovery',
                    component: () =>
                        import ('./components/Recovery.vue')
                },
                {
                    path: 'success-vebinar',
                    name: 'success-vebinar',
                    component: () =>
                        import ('./components/SuccessVebinar.vue')
                },
            ]
        },
        {
            path: '/product',
            component: () =>
                import ('./layouts/layout_product.vue'),
            children: [{
                    path: 'vebinar',
                    name: 'vebinar',
                    component: () =>
                        import ('./components/Vebinar.vue')
                },
                {
                    path: 'product-free',
                    name: 'product free',
                    component: () =>
                        import ('./components/ProductFree.vue')
                },
                {
                    path: 'product-payment',
                    name: 'product payment',
                    component: () =>
                        import ('./components/ProductPayment.vue')
                }
            ]
        },
        {
            path: '/course',
            component: () =>
                import ('./layouts/layout_course.vue'),
            children: [{
                    path: 'landing',
                    name: 'landing',
                    component: () =>
                        import ('./components/CourseLanding.vue')
                },
                {
                    path: 'room',
                    name: 'room',
                    component: () =>
                        import ('./components/WebRoom.vue')
                },
            ]
        },
        {
            path: '/author',
            component: () =>
                import ('./layouts/layout_author_new.vue'),
            children: [{
                    path: 'account',
                    name: 'account',
                    component: () =>
                        import ('./components/Account.vue')
                },
                {
                    path: 'index-page',
                    name: 'index-page',
                    component: () =>
                        import ('./components/IndexPage.vue')
                },
                {
                  path: 'news',
                  name: 'news',
                  component: () =>
                      import ('./components/News.vue')
                },
                {
                  path: 'settings',
                  name: 'settings',
                  component: () =>
                      import ('./components/Settings.vue')
                },
                {
                  path: 'lesson-page',
                  name: 'lesson-page',
                  component: () =>
                      import ('./components/LessonPage.vue')
                },
            ]
        }
    ]
})