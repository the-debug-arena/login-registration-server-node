
app.get('/users',async(req,res)=>{

    const allUser = await User.find({});
    const page= parseInt(req.query.page)
    const limit= parseInt(req.query.limit)
    
  
    const startIndex=(page-1)*limit
    const endIndex= page* limit
  
  
    const results={}
    results.totalUser=allUser.length;
    results.pageCount = Math.ceil(allUser.length / limit);
    if(endIndex<allUser.length){
      results.next={
        page:page+1,
        limit:limit
      }
  
    }
    if(startIndex>0){
      results.prev={
        page:page-1,
        limit:limit
      }
    }
    results.resultUsers=allUser.slice(startIndex,endIndex)
    res.json(results)
  })
  
//   GET http://localhost:5000/users?page=1&limit=4  