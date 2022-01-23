import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const { limit = 50 } = req.query;
      const client = await MongoClient.connect(process.env.MONGODB_URL || "");
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection
        .find()
        .limit(Number(limit))
        .toArray();
      await client.close();
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
  }
};

export default handler;
