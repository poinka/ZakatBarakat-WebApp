import Link from "next/link";
import { Badge } from "@/components/ui/badge"

export default async function AdminPage() {
  return (
    <div>
      <h1>Admin panel</h1>
      <ul>
      <li><Link href="admin/newCourse"><Badge>Add New Course</Badge></Link></li>
      <li><Link href="admin/editCourse"><Badge>Edit Existing Course</Badge></Link></li>
      <li><Link href="admin/deleteCourse"><Badge>Delete Existing Course</Badge></Link></li>
      </ul>
    </div>
  );
}
