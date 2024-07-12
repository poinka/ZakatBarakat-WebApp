import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(req: Request) {
  const file = await fs.readFile(
    process.cwd() + "/app/data/coursesData.json",
    "utf8",
  );
  const data: {
    title: string;
    description: string;
    imageUrl: string;
    id: string;
  }[] = JSON.parse(file); // Adjust the type based on actual data structure

  //Searching
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("course");

  let currentCourses = data;

  if (query) {
    currentCourses = data.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return NextResponse.json(currentCourses);
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  return NextResponse.json({ body });
}
