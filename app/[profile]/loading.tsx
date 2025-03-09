export default function Loading() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col justify-center py-10">
      <div className="md:w-2xl mx-auto pb-10">
        <div className="flex flex-col gap-4 mt-10 mb-10">
        <div className="bg-slate-800 w-3/5 rounded-full mx-auto h-10">
          <h1 className="text-3xl text-center invisible">user name loading</h1>
        </div>
        <div className="bg-slate-800 w-4/5 rounded-full mx-auto">
          <p className="text-center invisible">user resume loading</p>
        </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-row flex-wrap gap-4 mx-auto justify-center mb-10">
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
            <div style={{ width: 52, height: 52}} className="bg-slate-800 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-4">
          <div className="bg-slate-800 p-4 rounded-full text-xl text-center"><p className="invisible">project loading</p></div>
          <div className="bg-slate-800 p-4 rounded-full text-xl text-center"><p className="invisible">project loading</p></div>
          <div className="bg-slate-800 p-4 rounded-full text-xl text-center"><p className="invisible">project loading</p></div>
          <div className="bg-slate-800 p-4 rounded-full text-xl text-center"><p className="invisible">project loading</p></div>
          <div className="bg-slate-800 p-4 rounded-full text-xl text-center"><p className="invisible">project loading</p></div>
        </div>
      </div>
    </div>
  );
}