import connectDb from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request: Record<string, unknown>) => {
  try {
    await connectDb();

    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
