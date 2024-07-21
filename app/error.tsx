"use client";

export default function errorWrapper(error: Error) {
  return (
  <div className="min-h-screen table w-20 m-auto">
    <h1 className="table-cell align-middle">Oops! Error occured {error.message}</h1>
  </div>);
}
