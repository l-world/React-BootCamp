import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import { Navbar } from './components/Navbar'
import NoMatch from './components/NoMatch'
import OrderSummary from './components/OrderSummary'
import Product from './components/Product'
import Feature from './components/Feature'
import New from './components/New'
import User from './components/User'
import UserDetail from './components/UserDetails'
import UserAdmin from './components/UserAdmin'
import Profile from './components/Profile'
// import About from './components/About'
import { AuthProvider } from './components/auth'

const LazyAbout = React.lazy( () => import('./components/About') )

export default function App() {
    return (
        <AuthProvider>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="about" element={ <React.Suspense fallback="loading....">
                <LazyAbout />
            </React.Suspense>} />
            <Route path="order-summary" element={ <OrderSummary />  }/>
            <Route path="product" element={ <Product />} >
                <Route index element= {<Feature />} />
                <Route path="feature" element={ <Feature />  }/>
                <Route path="new" element={ <New />  }/>
            </Route>
            <Route path="user" element={ <User/> } >
                <Route path=":userId" element={ <UserDetail /> }  /> {/* 按照id匹配 */}
                <Route path="admin" element={ <UserAdmin /> } />{/* 匹配具体的路径 */}
            </Route>
            <Route path="profile" element={ <Profile/> } />
            <Route path="*" element={ <NoMatch /> } />
        </Routes>
        </AuthProvider>
    )
}
