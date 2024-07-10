import { promises as fs } from "fs";
import path from "path";

type Props = {
  params: {
    id: string;
  };
};

async function getById(
  jsonObject: Record<string, any>,
  id: string,
): Promise<any | undefined> {
  for (let objKey in jsonObject) {
    let obj = jsonObject[objKey];
    if (obj.id.toString() === id.toString()) {
      return obj;
    }
  }
  return undefined; // Explicitly return undefined if no matching object is found
}

export default async function ArticlePage({ params: { id } }: Props) {
  try {
    const filePath = path.join(process.cwd(), "app/data/articlesData.json");
    const fileContent = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContent);
    const article = await getById(data, id);
    return (
      <>
        <h1 style={{ color: "black" }}>Article {article["title"]}</h1>
        <p>{article["description"]}</p>
        <img src={article["imageUrl"]} />
      </>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
