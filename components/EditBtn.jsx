import { HiPencil } from 'react-icons/hi';

const EditBtn = () => {
  return (
    <div className='flex justify-center items-center hover:bg-orange-400 hover:text-gray-800 px-4 py-2 ml-2 lg:px-6 lg:py-2 lg:ml-4 border border-orange-400 rounded-lg'>
      <HiPencil />
    </div>
  );
}

export default EditBtn;
