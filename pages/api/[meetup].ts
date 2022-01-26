import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const { _id } = req.query;
      const client = await MongoClient.connect(process.env.MONGODB_URL || "");
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.findOne({
        _id: new ObjectId(_id.toString()),
      });
      await client.close();
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: "No data found" });
  }
};

// Custom configs of the request
export const config = {
  api: {
    sizeLimit: "1mb",
    // bodyParser: false,
  },
};

export default handler;
