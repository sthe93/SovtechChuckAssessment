// Imports: Axios
import axios from 'axios';
// GraphQL: Resolvers
  const RESOLVERS = {
    Query: {
    random_joke: (parent, args) => {
      return axios.get(`https://api.chucknorris.io/jokes/random`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    categories:(parent,args)=>{
      return axios.get(`https://api.chucknorris.io/jokes/categories`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    jokes:(parent,args)=>{
      console.log(args)
      console.log(parent)
      return axios.get(`https://api.chucknorris.io/jokes/random?category=${args.category}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    } 
  }
};
// Exports
export default RESOLVERS;