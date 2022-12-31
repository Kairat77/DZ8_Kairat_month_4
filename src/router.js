<BrowserRouter>
<Routes>
  <Route path="/" element={<PostList />}/>

    <Route path="/posts/:postId" element={<Post />} />

  <Route path="users" element={<UserList />} />
  <Route path="toggles" element={<Toggles />} />
</Routes>
<div className="App">
  
</div>
</BrowserRouter>