//"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = () => {
  return (
    <button className="text-red-400">
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBtn