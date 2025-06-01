import React, {useState} from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import { IoIosSend } from "react-icons/io";

function Chat() {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedChatId, setSelectedChatId] = useState([]);
    const [showRightSidebar, setShowRightSidebar] = useState(false);
    const selectedUser = {
  username: 'bob',
  avatar: '/useravater.jpg',
  online: true,
  media: [
  ],
};

  return (
    <>
   <div className='flex flex-row'>
  <LeftSideBar
   selectedChatId={selectedChatId}
   onSelectChat={setSelectedChatId}
     isOpen={isOpen}     
  setIsOpen={setIsOpen} 
        />
  <div
    className="flex flex-col w-full min-h-screen border-l-1 border-r-1 cursor-pointer"
    onClick={() => setShowRightSidebar(true)}
    style={{  borderColor: '#ACAD94',backgroundColor: '#E2E2E2', color: '#6E7271' }}
  >
    <div
      className="p-4 h-19 relative"
      style={{ backgroundColor: '#384D48', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}
    >
        <button
      className="md:hidden absolute top-2 left-4 z-50 bg-[#384D48] text-white p-2 rounded-md"
      onClick={() => setIsOpen(!isOpen)}
     >
      ☰
     </button>
        <div className='flex flex-row justif-left items-center gap-2 ml-10'>
         <img src='/useravater.jpg' className='rounded-full w-10'></img>
        <p>bob</p> <img src='/green_dot.png' className='w-3 h-3 mt-1'></img>
        </div>


    </div>
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
      <div className="flex justify-start">
        <div className="relative max-w-[80%]">
          <div className="inline-block p-3 rounded-lg bg-[#D8D4D5] text-[#1E1E1E] break-words">
            <p>Hello! What’s up?</p>
          </div>
          <div
            className="absolute top-1/2 left-[-10px] -translate-y-1/2 w-0 h-0 
                       border-r-[10px] border-r-[#D8D4D5] 
                       border-t-[10px] border-t-transparent 
                       border-b-[10px] border-b-transparent"
          ></div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative max-w-[80%]">
          <div className="inline-block p-3 rounded-lg bg-[#91A45A] text-white break-words">
            <p>Hey</p>
          </div>
          <div
            className="absolute top-1/2 right-[-10px] -translate-y-1/2 w-0 h-0 
                       border-l-[10px] border-l-[#91A45A] 
                       border-t-[10px] border-t-transparent 
                       border-b-[10px] border-b-transparent"
          ></div>
        </div>
      </div>
    </div>
    <div
      className="p-4 flex items-center gap-3 border-t"
      style={{ borderColor: '#ACAD94', backgroundColor: 'white' }}
    >
        <input type='file' id='image' accept='image/png , image/jpeg , image/jpg' hidden />
        <label htmlFor='image'><img src='/imageUpload.png' className='w-10'></img></label>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 rounded-md p-2 outline-none bg-stone-100"
        style={{
          border: '1px solid #ACAD94',
          color: '#6E7271',
        }}
      />
      <button
        style={{ backgroundColor: '#384D48', color: 'white' }}
        className="px-4 py-2 rounded-md font-semibold"
      >
        <IoIosSend className='text-2xl' />
      </button>
    </div>
  </div>
{showRightSidebar && (
   <RightSideBar
    selectedUser={selectedUser}
    onClose={() => setShowRightSidebar(false)}
    show={showRightSidebar}
  />
)}
</div>
    </>
  )
}

export default Chat