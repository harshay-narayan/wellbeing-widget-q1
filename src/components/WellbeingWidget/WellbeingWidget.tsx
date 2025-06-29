import { X, ArrowLeft } from "lucide-react";
import { feelings, type Feeling } from "../../lib/data";
import { useState } from "react";
import { cn } from "../../lib/utils";


function WellbeingWidget() {
  const [selectedFeeling, setSelectedFeeling] = useState<Feeling | null>(null);
  const handleSelectFeeling = (feeling: Feeling) => {
    setSelectedFeeling((prev) => (prev?.id === feeling.id ? null : feeling));
  };
  const handleCheckin=()=>{
    console.log(selectedFeeling);
    setSelectedFeeling(null);
  }
  return (
    <div className="bg-white rounded-2xl m-2 p-4 md:w-2/3">
      <div className="flex justify-between">
        <button aria-label="Go back" tabIndex={0} className="cursor-pointer">
          <ArrowLeft color="#666" />
        </button>
        <button aria-label="close" tabIndex={0} color="#666" className="cursor-pointer">
          <X />
        </button>
      </div>
      <div className="flex justify-center p-2 font-extrabold text-xl">
        Wellbeing Check-in
      </div>
      <div className="mt-20 space-y-8">
        <div className="font-bold text-black/60 flex justify-center">
          Hello! How are you feeling today?
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {feelings.map((feeling) => (
            <button
              key={feeling.id}
              tabIndex={0}
              className={cn(
                "w-[6rem] sm:w-[7rem] xl:w-[9rem] max-md:text-xs hover:scale-110 transition-transform duration-200 cursor-pointer rounded-xl border-[1px] border-[#D9DEE2] py-[1rem] px-[0.2rem] flex flex-nowrap flex-col items-center gap-4",
                feeling.id === selectedFeeling?.id &&
                  "border-[#1c8cf2] bg-[#e2f1ffb3]"
              )}
              onClick={() =>
                handleSelectFeeling({
                  id: feeling.id,
                  name: feeling.name,
                  iconUrl: feeling.iconUrl,
                })
              }
            >
              <img
                src={`${feeling.iconUrl}`}
                alt={`${feeling.name}`}
                className="w-[3rem] h-auto"
              />
              {feeling.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-7">
        <button
          tabIndex={0}
          className={cn(
            "p-2 w-2/3 md:w-1/3 bg-gray-400 text-white rounded cursor-pointer font-bold disabled:cursor-not-allowed",
            selectedFeeling && "bg-[#1C8CF2] active:bg-blue-600"
          )}
          onClick={handleCheckin}
          disabled={!selectedFeeling}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default WellbeingWidget;
