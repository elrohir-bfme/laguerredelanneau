import gql from 'graphql-tag'

export default async function ({app, redirect}) {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
      return redirect('/wotn/login')
  }
  //make sure the token is still valid
  try{
    const { data: { me } } = await app.apolloProvider.defaultClient.query({
      query: gql`
        query {
          me{
            id
            email
            username
            role{
              name
            }
          }
        }
      `
    })
    if(!Object.keys(me).length){
      return redirect('/login')
    }
    //we are good to go and validated  
  }catch(e){
    //token is not valid
    //logout user to clear storage
    try{
      const result = await app.$apolloHelpers.onLogout()
      //redirect them to login page
      return redirect('/wotn/login')
    }catch(e){
      console.error(e)
    }
  }
}