export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col font-bold text-2xl min-h-screen text-amber-500 items-center justify-center">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page{" "}
        <span className=" p-2 rounded bg-orange-500 text-black">{id}</span>
      </p>
    </div>
  );
}
