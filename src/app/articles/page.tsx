import ArticleCard from '../../components/ArticleCard'; // Adjust the path based on your file structure
import { JSX, Key } from 'react';
import Header2 from '../../components/Header2';
import { promises as fs } from 'fs';



 
export default async function ArticlesPage () {
  const file = await fs.readFile(process.cwd() + '/src/app/data/articlesData.json', 'utf8');
  const articles = JSON.parse(file);
  return (
    <div>
      <Header2 />
      <h2 style={{textAlign: 'center'}}> Recommended Articles </h2>
      {articles.map((course: JSX.IntrinsicAttributes & { title: string; description: string; imageUrl: string; id: number}, index: Key | null | undefined) => (
        <ArticleCard key={index} {...course} />
      ))}
    </div>
  );
};

