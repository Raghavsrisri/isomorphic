import {  GraphQLString as StringType} from "graphql"

const greeting ={
  type:StringType,
  args:{
    name:{
      type: StringType
    },
    resolve(_,{name}){
      return `Welcom, ${name || 'Guest'}!`;
    }
  }
}


export default greeting
