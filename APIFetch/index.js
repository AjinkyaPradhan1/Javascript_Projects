// type 1 of api fetch

fetch('myFile.txt')
.then(response=>{
    if(!response.ok){
        throw new Error('Network Disconnected')
    }
    return response.text();
})
.then(data=>console.log(data))
.catch(error=>console.log(error))

//type 2 of api fetch

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>{
    if(!response.ok){
        throw new Error('Data not Found')
    }
    return response.json();
})
.then(data=>console.log(data))
.catch(error=>console.log(error))

//type 3 of api fetch with printing each element

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>{
    if(!response.ok){
        throw new Error('Data not Found')
    }
    return response.json();
})
.then(data=>data.forEach(element=>{
    console.log(element.title)
}))
.catch(error=>console.log(error))

//create a api request (add a resource)
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //update a resource
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 101,
          title: 'Heelo',
          body: 'Mumbai',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));