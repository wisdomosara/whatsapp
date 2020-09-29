const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql

const userss = [
    {id: "2",name: "wisdom"}
]

const chats = [
    {id: "2",name: "wisdomnosa", messages: ["wisdom", "second"]}
]

const UsersType = new GraphQLObjectType({
    name: "Users",
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        online: {type: GraphQLString},
        profilePic: {type: GraphQLString},
        status: {type: GraphQLString},
        nickname: {type: GraphQLString},
        profileText: {type: GraphQLString},
        number: {type: GraphQLString},
        chats: {//adding additional query to go to another database collection
            type: chatsType,//specify the type as the type of the collection 
            resolve(parent,args) {//parent refer to the initial query, here its that of the users with its id and whatever thing that was specified
                console.log(parent)
                return chats.find(chat => chat.id == parent.id)//find and return the array the object of the chat that matches that of the initial query
            }
        }
    })
})

const chatsType = new GraphQLObjectType({
    name: "chats",
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        message: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: UsersType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args) {
                return userss[0]
            }
        },
        chats:{
            type: chatsType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args) {
                return chats[0]
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})