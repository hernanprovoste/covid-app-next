import { MongoClient } from 'mongodb'

export const connectDataBase = async () => {
  const client = await MongoClient.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}-shard-00-00.kelmm.mongodb.net:27017,${process.env.MONGODB_CLUSTER}-shard-00-01.kelmm.mongodb.net:27017,${process.env.MONGODB_CLUSTER}-shard-00-02.kelmm.mongodb.net:27017/${process.env.MONGODB_DATABASE}?ssl=true&replicaSet=atlas-h4bgdz-shard-0&authSource=admin&retryWrites=true&w=majority`
  )

  return client
}

export const insertDocument = async (client, collection, document) => {
  const db = client.db()

  const result = await db.collection(collection).insertOne(document)

  return result
}

export const findOneDocument = async (client, collection, document) => {
  const db = client.db()

  const result = await db.collection(collection).findOne(document)

  return result
}

export const getAllDocuments = async (
  client,
  collection,
  sort,
  filter = {}
) => {
  const db = client.db()

  const document = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray()

  return document
}
