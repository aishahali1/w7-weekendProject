import React from 'react'

function RightSideBar({ selectedUser,onClose,show }) {
   if (!selectedUser) {
    return (
      <div className="w-100 min-h-screen bg-[#384D48] text-white p-4 hidden lg:block">
        <p className="text-center text-sm text-[#D8D4D5]">
          Select a chat to view user info
        </p>
      </div>
    );
  }

  return (
  <>
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-72 bg-[#384D48] text-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${show ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
        `}
      >
        <button onClick={onClose} className="absolute top-0 -left-1/2 text-gray-300 text-xl hover:text-black">
                 &times;
                </button>
        <SidebarContent selectedUser={selectedUser} />
      </div>
      <div className="w-72 min-h-screen bg-[#384D48] text-white p-4 hidden lg:flex flex-col gap-6">
        <SidebarContent selectedUser={selectedUser} />
      </div>
    </>

)}

function SidebarContent({ selectedUser }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={selectedUser.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border-2 border-white"
          />
          {selectedUser.online && (
            <img
              src="/green_dot.png"
              alt="Online"
              className="w-4 h-4 absolute bottom-1 right-1"
            />
          )}
        </div>
        <p className="mt-2 font-semibold text-lg">{selectedUser.username}</p>
        <span className="text-sm text-[#D8D4D5]">
          {selectedUser.online ? 'Online' : 'Offline'}
        </span>
      </div>
      <div>
        <h3 className="text-md font-semibold border-b border-[#ACAD94] pb-1 mb-3">
          Media
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {selectedUser.media.length > 0 ? (
            selectedUser.media.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Shared media"
                className="w-full h-20 object-cover rounded-md"
              />
            ))
          ) : (
            <p className="text-sm text-[#D8D4D5] col-span-3">
              No media shared yet.
            </p>
          )}
        </div>
      </div>
      </>
  );
}

export default RightSideBar