"use client";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function ButtonWishlist() {
  const [wishlist, setWishlist] = useState<boolean>(false);
  return (
    <div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => setWishlist(!wishlist)}
              className={clsx("p-1 border border-red-400 rounded-md")}
            >
              {wishlist ? (
                <HeartIconSolid
                  className="text-red-600"
                  width={20}
                  height={20}
                />
              ) : (
                <HeartIcon
                  width={20}
                  height={20}
                  className="text-red-400 hover:text-red-600 duration-300"
                />
              )}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className=" bg-red-100 font-semibold rounded-md px-4 py-2 text-sm leading-4 shadow-md animate-tooltip will-change-transform"
              sideOffset={5}
            >
              Add to Wishlist
              <Tooltip.Arrow className="fill-red-600" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}

export default ButtonWishlist;
