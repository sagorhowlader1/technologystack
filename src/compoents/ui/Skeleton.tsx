const Skeleton = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 animate-pulse">
      <div className="mt-18">
        <div className="h-9 w-64 max-w-full bg-slate-200 rounded"></div>
        <div className="h-4 w-72 max-w-full bg-slate-200 rounded mt-4 mb-7"></div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-2xl my-2 p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="w-8 h-8 rounded-md bg-slate-200"></div>
                <div className="w-20 h-8 rounded-full bg-slate-200"></div>
              </div>

              <div className="h-7 w-32 max-w-full bg-slate-200 rounded"></div>

              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
              </div>

              <div className="h-4 w-24 bg-slate-200 rounded"></div>

              <div className="h-11 bg-slate-200 rounded-lg"></div>
            </div>
          ))}
        </div>

        <aside className="w-full lg:w-95 lg:ml-6">
          <div className="rounded-2xl border border-[#E2E8F0] my-2 lg:my-6 mx-4 px-4 py-6 space-y-4">
            <div className="h-6 w-28 bg-slate-200 rounded"></div>
            <div className="h-4 w-40 max-w-full bg-slate-200 rounded"></div>
            <div className="h-24 bg-slate-200 rounded-xl"></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Skeleton;
