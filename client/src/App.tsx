import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import { UserList } from './components/users/UserList'
import { UserShow } from './components/users/UserShow'
import { dataProvider } from './dataProvider'

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
        name="users/admin/all" 
        list={UserList} 
        show={UserShow}
        options={{ label: 'Users' }}
      />
    </Admin>
  )
}

export default App