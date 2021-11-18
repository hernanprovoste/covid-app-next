import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectDataBase, findOneDocument } from '../../../herlpers/db-utils'
import { verifyPassword } from '../../../herlpers/hash-pwd'

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        let client

        try {
          client = await connectDataBase()
        } catch (error) {
          res
            .status(500)
            .json({ message: 'Connecting to the database failed!' })
          return
        }

        try {
          const user = await findOneDocument(client, 'users', {
            email: credentials.email
          })

          console.log(user)

          if (!user) {
            throw new Error('No user found')
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          )

          if (!isValid) throw new Error('Could not log you in!')

          client.close()

          return {
            name: `${user.name} ${user.last_name}`,
            email: user.email
          }
        } catch (error) {}
      }
    })
  ]
})
