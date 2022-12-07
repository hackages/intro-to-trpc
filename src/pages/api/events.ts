import { type NextApiRequest, type NextApiResponse } from "next";
import { events } from "../../../mock/events";
// import { prisma } from "../../server/db/client";

const eventsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  // const examples = await prisma.example.findMany();
  const term = (req.query.search as string) || "";
  res
    .status(200)
    .json(
      events.filter((event) =>
        event.title.toLowerCase().includes(term.toLowerCase())
      )
    );
};

export default eventsApi;
