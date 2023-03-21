// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Coach } from "@/components/CheckActiveNames";
import CoachModel from "@/models/coach/Coach.model";
import dbConnect from "@/utils/lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  coach: Coach | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { activeName } = req.body;

  console.log("activeName", activeName);
  console.log("activeName", req.query?.activeName);

  await dbConnect();

  if (req.method === "GET") {
    try {
      const activeNamesExist = await CoachModel.findOne({
        $or: [
          { activeName: new RegExp("^" + activeName + "$", "i") },
          { activeName: new RegExp("^" + req.query?.activeName + "$", "i") },
        ],
      }).populate("parent");

      if (!activeNamesExist) {
        return res.status(404).json({
          success: false,
          coach: null,
          message: `${req.query?.activeName} name not yet taken.`,
        });
      } else
        res.status(200).json({
          success: true,
          message: `${req.query?.activeName} name found.`,
          coach: JSON.parse(JSON.stringify(activeNamesExist)),
        });
    } catch (error) {
      console.error(error);

      res.status(400).json({
        success: false,
        message: `Search ${req.query?.activeName} name failed.`,
        coach: null,
      });
    }
  } else {
    res.status(200).json({
      success: true,
      message: "Not yet implemented.",
      coach: null,
    });
  }
}
