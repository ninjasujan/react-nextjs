import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { title, image, address, description } = req.body;
      const client = await MongoClient.connect(process.env.MONGODB_URL || "");
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const meetup = await meetupsCollection.insertOne({
        title,
        image,
        address,
        description,
      });
      await client.close();
      res.status(200).json({ message: "Meetup inserted", meetup });
    }
  } catch (error) {
    console.log(error);
  }
};

// export const config = {
//   api: {
//     sizeLimit: "1mb",
//     bodyParser: false,
//   },
// };

export default handler;
