import ankitimage from '../assets/ankit_image.jpg'
import ankit from '../assets/ankit-favicon.jpg'
import toast from "react-hot-toast";
import '../Styles/Hexagon.css'
function Hexagon(){
//hello mesage on click on image
function hellomessage(){
  toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={ankit}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Ankit Mishra
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Namskaram! I am a Full stack web developer!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
}
    
    


    return(
        <div className='flex justify-content-center'>
          
            <a onClick={()=>hellomessage()} className='w-[250px] img cursor-pointer'>
                                  <img className="h-full w-full" src={ankitimage} alt="ankit-image" />
                              
                              </a>
         
          
        </div>
    )
}

export default Hexagon;