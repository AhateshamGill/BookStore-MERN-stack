import {
    AiFillAccountBook,
    AiOutlineAccountBook,
    AiOutlineClose,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
    return (
        <div
            className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
                    {book.publishYear}
                </h2>
                <h4 className="my-2 text-gray-500">{book._id}</h4>
                <div className="flex justify-start items-center gap-x-">
                    <PiBookOpenTextLight className="text-red-300 text-2xl" />
                    <h2 className="my-2">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-red-300 text-2xl" />
                    <h2 className="my-2">{book.author}</h2>
                </div>
                <p className="mt-4">Anything Your want to Show</p>
                <p className="my-2">
                    Nostrud vitae nostrud error for voluptas. Autem duis so eaque quia.
                    Adipisicing reprehenderit, but ullamco dolore incididunt. Sint vitae
                    iste so molestiae. Pariatur culpa yet aperiam for ullamco. Autem do
                    aliquip or elit for quasi but dicta. Qui quis, for minima so ipsum
                    corporis and occaecat. Laboriosam eius but irure, velit. Perspiciatis
                    dicta for iste and ipsa for ipsa nesciunt yet sit. Eum eos, laudantium
                    so dicta illo or magnam. Autem anim. Anim numquam elit veritatis or
                    rem dolor modi. Aliquip explicabo. Culpa excepteur dicta.</p>
            </div>
        </div>
    );
};

export default BookModal;
