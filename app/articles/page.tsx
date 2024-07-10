import { JSX, Key } from 'react';
import Header2 from '../../components/Header2';
import { promises as fs } from 'fs';
import ArticleList from '@/components/ArticleList';

export default async function ArticlesPage() {
  const file = await fs.readFile(process.cwd() + '/app/data/articlesData.json', 'utf8');
  const articles = JSON.parse(file);
  // const courses = await (await fetch ("http://localhost:3000/api/courses")).json();
  return (
    <div>
      <Header2 />
      <ArticleList articles={articles} />
    </div>
  );
};