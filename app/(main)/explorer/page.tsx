import { ExploreGrid } from "@/components/explorer/Grid";
import React from "react";
import { Button } from "@/components/explorer/MovingButton";
import { cn } from "@/lib/utils";
import { PlaceholdersAndVanishInput } from "@/components/explorer/VanishingInput";
import { Input } from "@/components/ui/input";
import Transaction from "@/components/explorer/Transaction";
import Eposh from "@/components/explorer/Eposh";
import Validators from "@/components/explorer/Validators";
import MarketValue from "@/components/explorer/MarketValue";
import FirstLay from "@/components/explorer/FirstLay";
import AddressSearch from "@/components/explorer/AddressSearch";

const page = () => {
  const onChange = () => {};

  const onSubmit = () => {};

  return (
    <section className="h-full w-full    md:mt-30 mt-20 ">
      {/* <div className="p-10 flex justify-between">
        <div>
          <h1 className="text-[40px] font-bold ">Solana Blockchain Explorer</h1>
        </div>
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Mainet
            </span>
          </button>
        </div>
      </div> */}
      <div className="w-full mt-12 flex md:flex-row flex-col p-5 gap-4">
        <div className=" border border-green-[1px] backdrop-blur-xl md:w-50 w-full h-[700px] rounded-lg ">
          <div
            className=" glass-morphism w-[150px] h-[150px] bg-green-500 rounded-[100%] absolute z-1 top-[20%] left-[10%] 
            translate-x-[-50%] translate-y-[-50%]  blur-[90px] bg-transparent "
          ></div>

          <div className="p-5">
            <div className="flex gap-2">
              <div>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Block height
                  </span>
                </button>
              </div>

              <div>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Transaction
                  </span>
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-5 ml-5">
              <div>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Network hashrate
                  </span>
                </button>
              </div>

              <div>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Token price
                  </span>
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-5 ml-5 ">
              <div>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#39b245_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Total Wallet
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 p-5 ml-[20px]">

            <FirstLay/>


          </div>
        </div>

        {/* Epoch */}

        <div className="   border-green-[1px] backdrop-blur-xl md:w-[150%] w-full h-[700px] rounded-lg ">
          <div
            className=" glass-morphism w-[150px] h-[150px] bg-green-500 rounded-[100%] absolute z-1 top-[20%] left-[10%] 
            translate-x-[-50%] translate-y-[-50%]  blur-[90px] bg-transparent "
          ></div>

          <AddressSearch/>

          {/* Second Section */}

          <div className=" mt-4 ">
            <div className=" border border-green-[1px] backdrop-blur-xl md:w-50 w-full h-[300px] rounded-lg ">
              <div className="p-5">
                <Transaction />
              </div>
            </div>

            {/* Epoch Section */}
            <Eposh />
          </div>
        </div>
      </div>

      {/* <ExploreGrid/> */}
<div className="p-5">
<Validators/>
      <MarketValue/>
</div>
    </section>
  );
};

export default page;
