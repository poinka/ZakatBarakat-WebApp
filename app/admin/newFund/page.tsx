import NewFundForm from "@/components/NewFundFrom";

export default function NewFund() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-3/4 m-auto">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Add New Fund</h1>
      <NewFundForm />
    </div>
  );
}
