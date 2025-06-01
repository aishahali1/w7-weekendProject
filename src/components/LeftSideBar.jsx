import { useState } from 'react';
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';

const LeftSideBar = ({ selectedChatId, onSelectChat,isOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults(characters)
      setError('')
      return
    }

    const filtered = characters.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length > 0) {
      setSearchResults(filtered);
      setError('');
    } else {
      setSearchResults([]);
      setError('Oops! Character does not exist.');
    }
  }
  
  const chats = [
  {
    id: 1,
    name: 'Alice',
    lastMessage: 'See you soon!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    name: 'Bob',
    lastMessage: 'Hello! What’s up?',
    avatar: '/useravater.jpg',
  },
];


 return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-[#384D48] text-white w-72 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0`}
      >
    <div className={'lg:block w-full min-h-screen bg-[#384D48] text-white flex flex-col'}
>
      <div className="p-4 flex flex-row justify-center text-center border-b border-[#ACAD94]">
       <div className='flex flex-col justify-center items-center'>
         <img src="/logo.png" alt="Chatify Logo" className="w-20 mb-2" />
        <p className="text-sm text-[#D8D4D5] leading-tight text-center">
          Welcome to Chatify. Start connecting!.
        </p>
       </div>
        <IoMdSettings className='text-3xl'/>
      </div>
          <div className="relative max-w-xl mt-4 mx-auto">
          <input
            type="text"
            placeholder="Search chats"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-5 pr-4 py-2 px-2 border-2 border-[#cccbba00] rounded w-full bg-stone-100 placeholder:text-[#374e48] placeholder:text-sm"
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 bottom-0 w-10 bg-[#a9bf79] font-semibold text-md text-white px-4 rounded-r"
          >
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#374e48]" />
          </button>
        </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-[#ACAD94]/20 hover:bg-[#6E7271]/20 ${
              selectedChatId === chat.id ? 'bg-[#6E7271]/30' : ''
            }`}
            onClick={() => onSelectChat(chat.id)}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white">{chat.name}</span>
              <span className="text-sm text-[#D8D4D5] truncate w-48">
                {chat.lastMessage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default LeftSideBar