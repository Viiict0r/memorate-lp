export function Counter() {
  return (
    <div className="bg-[#141414] rounded-full sm:py-3 py-2 sm:pr-4 pr-[9px] sm:pl-3 pl-2 flex items-center gap-2 w-fit sm:text-sm text-xs sm:mx-0 mx-auto">
      <div className="rounded-full bg-white px-5 py-1 w-fit">
        <span className="sm:text-sm text-xs font-semibold bg-clip-text bg-gradient-to-r from-[#BD00FF] to-[#2F00B6] text-transparent">
          3892
        </span>
      </div>
      <span className="font-semibold text-white">
        Datas lembradas até agora!
      </span>
    </div>
  );
}
