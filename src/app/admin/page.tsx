import Link from 'next/link';

export default async function AdminPage () {
  return (
    <div>
      <Link href="admin/newCourse">Add New Course</Link>
    </div>
  );
};
